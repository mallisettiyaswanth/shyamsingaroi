"use server";

import { createClient } from "@/actions/server";

const addTag = async (tag: string) => {
  try {
    const supabase = await createClient();
    const { data: tagsData, error } = await supabase
      .from("tags")
      .insert([{ tag }]);

    if (error) {
      throw new Error("Error while adding tag");
    }

    return {
      status: 200,
      message: "Successfully added tag",
      data: tagsData,
    };
  } catch (err) {
    console.log(err);
    return {
      status: 404,
      message: "Something went wrong!",
    };
  }
};

export default addTag;
