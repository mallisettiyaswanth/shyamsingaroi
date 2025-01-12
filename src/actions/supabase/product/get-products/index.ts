"use server";

import { createClient } from "@/actions/server";

const getProducts = async () => {
  try {
    const supabase = await createClient();
    const { data: products, error } = await supabase.from("products").select(`
        *,
        images (id, url, created_at),
        product_dimensions (
          id, 
          product_id, 
          gender, 
          is_available, 
          created_at,
          size (id, gender, size, created_at)
        ),
        product_categories (
          id, 
          product_id, 
          created_at,
          categories (id, category, gender, created_at)
        ),
        product_tags (
          id, 
          product_id,
          tags (id, tag, created_at)
        )
      `);

    if (error) {
      console.error("Supabase error:", error);
      return {
        status: 500,
        message: "Failed to fetch products.",
        error: error.message,
      };
    }

    console.log(products);

    return {
      status: 200,
      data: products,
    };
  } catch (error) {
    console.error("Server error:", error);
    return {
      status: 500,
      message: "Something went wrong while fetching products.",
    };
  }
};

export default getProducts;
