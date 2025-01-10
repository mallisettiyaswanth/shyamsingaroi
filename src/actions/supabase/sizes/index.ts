"use server";

import { createClient } from "@/actions/server";

const getSizes = async () => {
  try {
    const supabase = await createClient();
    const { data: sizes, error } = await supabase.from("size").select("*");
    if (error) {
      throw new Error(error.message);
    }
    const result: Record<string, Set<string>> = {};

    sizes?.forEach((doc) => {
      if (!result[doc.gender]) {
        result[doc.gender] = new Set();
      }
      result[doc.gender].add(doc.size);
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

      newResult[gender] = formattedResult[gender].map((size) => {
        return {
          label: (size?.at(0) ?? "").toUpperCase() + size.slice(1),
          value: size,
        };
      });
    });

    return newResult;
  } catch (err) {
    console.log(err);
    return {
      status: 500,
      message: "Something went wrong!",
    };
  }
};

export default getSizes;
