"use server";

import { createClient } from "@/actions/server";

export const addCategory = async (category: string, gender: string) => {
  try {
    const supabase = await createClient();
    const { error } = await supabase.from("categories").insert([
      {
        category,
        gender,
      },
    ]);

    if (error) {
      throw new Error("Error while adding category");
    }

    return {
      status: 200,
      message: "Successfully added tag",
    };
  } catch (error) {
    console.error(error);
    return {
      status: 404,
      message: "Failed to add category, Something went wrong!",
    };
  }
};
