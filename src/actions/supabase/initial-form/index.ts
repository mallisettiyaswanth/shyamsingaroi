"use server";

import { createClient } from "@/actions/server";

const getInitialFormValues = async () => {
  try {
    const supabase = await createClient();

    const { data: categories, error } = await supabase
      .from("categories")
      .select("id, category, gender");

    if (error) {
      console.error("Error fetching categories:", error.message);
      return null;
    }

    const result: Record<string, Set<{ id: string; category: string }>> = {};

    categories?.forEach((doc) => {
      if (!result[doc.gender]) {
        result[doc.gender] = new Set();
      }
      result[doc.gender].add({ id: doc.id, category: doc.category });
    });

    const formattedResult: Record<string, { id: string; category: string }[]> =
      Object.fromEntries(
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

      newResult[gender] = formattedResult[gender].map(({ id, category }) => {
        return {
          label: (category?.at(0) ?? "").toUpperCase() + category.slice(1),
          value: id + "",
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
