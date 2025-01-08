"use server";

import { createClient } from "@/actions/server";

const getInitialFormValues = async () => {
  try {
    const supabase = await createClient();

    const { data: categories, error } = await supabase
      .from("categories")
      .select("*");

    if (error) {
      console.error("Error fetching categories:", error.message);
      return null;
    }

    const { data: tagsData, error: tagError } = await supabase
      .from("tags")
      .select("*");

    if (tagError) {
      console.error("Error fetching tags:", tagError.message);
      return null;
    }

    const tagsSet = new Set(tagsData?.map((tag) => tag.tag));

    const tagsResult = Array.from(tagsSet).map((tag) => {
      return {
        label: tag.at(0).toUpperCase() + tag.slice(1),
        value: tag,
      };
    });

    const result: Record<string, Set<string>> = {};

    categories?.forEach((doc) => {
      if (!result[doc.gender]) {
        result[doc.gender] = new Set();
      }
      result[doc.gender].add(doc.category);
    });

    const formattedResult: Record<string, string[]> = Object.fromEntries(
      Object.entries(result).map(([key, value]) => [key, Array.from(value)])
    );

    const newResult: Record<
      string,
      {
        label: string;
        value: string;
      }[]
    > = {};

    Object.keys(formattedResult).map((gender) => {
      if (!newResult[gender]) {
        newResult[gender] = [];
      }

      newResult[gender] = formattedResult[gender].map((category) => {
        return {
          label: (category?.at(0) ?? "").toUpperCase() + category.slice(1),
          value: category,
        };
      });
    });

    return newResult;
  } catch (err) {
    console.error("Error in getInitialFormValues:", err);
    return null;
  }
};

export default getInitialFormValues;
