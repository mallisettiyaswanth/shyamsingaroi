"use server";

import { createClient } from "@/actions/server";

const getTags = async () => {
  try {
    const supabase = await createClient();
    const { data: tags, error } = await supabase.from("tags").select("*");
    if (error) {
      throw new Error("Error fetching tags");
    }

    return {
      status: 200,
      message: "Success",
      data: tags,
    };
  } catch (err) {
    console.log(err);
    return {
      status: 404,
      message: "Something went wrong",
    };
  }
};

export default getTags;