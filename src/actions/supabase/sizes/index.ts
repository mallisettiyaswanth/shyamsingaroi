"use server";

import { createClient } from "@/actions/server";

const getSizes = async () => {
  try {
    const supabase = await createClient();
    const { data: sizes, error } = await supabase.from("size").select("*");
    if (error) {
      throw new Error(error.message);
    }
    const result: Record<string, Set<{ id: string; size: string }>> = {};

    sizes?.forEach((doc) => {
      if (!result[doc.gender]) {
        result[doc.gender] = new Set();
      }
      result[doc.gender].add({ size: doc.size, id: doc.id });
    });

    const formattedResult: Record<string, { id: string; size: string }[]> =
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

      newResult[gender] = formattedResult[gender].map(({ id, size }) => {
        return {
          label: (size?.at(0) ?? "").toUpperCase() + size.slice(1),
          value: id + "",
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
