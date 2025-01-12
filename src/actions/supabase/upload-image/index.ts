"use server";

import { createClient } from "@/actions/server";

const uploadImageToSupabase = async (files: File[]) => {
  try {
    const supabase = await createClient();

    // Map files to upload promises
    const promises = files.map(async (file) => {
      const uniqueName = `${Date.now()}_${file.name}`; // Add a timestamp to make file names unique
      const { data, error } = await supabase.storage
        .from("shyamsilks")
        .upload(uniqueName, file, {
          cacheControl: "3600",
          upsert: false, // Ensure files aren't overwritten
        });

      if (error) {
        throw new Error(`Failed to upload ${file.name}: ${error.message}`);
      }

      return data; // `data` contains details about the uploaded file
    });

    // Await all upload promises
    const uploadedData = await Promise.all(promises);

    // Return the image paths
    return {
      status: 200,
      message: "Images uploaded successfully",
      data: uploadedData.map((image) => image.path || ""), // Ensure image.path is safe to access
    };
  } catch (err: any) {
    console.error("Error uploading images:", err);

    return {
      status: 500,
      message: err.message || "Something went wrong!",
    };
  }
};

export default uploadImageToSupabase;
