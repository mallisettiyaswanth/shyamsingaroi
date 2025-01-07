"use server";

import { createClient } from "@/actions/server";

const getCategoryProducts = async (
  category: string,
  gender: "men" | "women"
) => {
  try {
    const supabase = await createClient();

    const { data, error } = await supabase
      .from("products")
      .select(
        `
            id,
            name,
            description,
            price,
            product_categories!inner (
                categories!inner (
                    category,
                    gender
                )
            ),
            images (
                id,
                url
            )
        `
      )
      .eq("product_categories.categories.gender", gender)
      .eq("product_categories.categories.category", category);

    if (error) {
      throw new Error(error.message);
    }

    return {
      status: 200,
      message: "Success",
      data,
    };
  } catch (err) {
    console.log(err);
    return {
      status: 404,
      message: "Something went wrong!",
    };
  }
};

export default getCategoryProducts;
