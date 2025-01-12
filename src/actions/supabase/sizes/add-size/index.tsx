"use server";

import { createClient } from "@/actions/server";

const addSize = async (gender: string, size: string) => {
  try {
    const supabase = await createClient();
    const { error } = await supabase.from("size").insert([{ gender, size }]);

    if (error) {
      throw new Error(error.message);
    }
    return {
      status: 200,
      message: "Size added successfully",
    };
  } catch (err) {
    console.log(err);
    return {
      status: 500,
      message: "Internal server",
    };
  }
};

export default addSize;
