"use server";

import { createClient } from "@/actions/server";
import { Product } from "@/components/global/data-table/schema";

const getSingleProduct = async (id: number) => {
  try {
    const supabase = await createClient();

    const { data: products, error } = await supabase
      .from("products")
      .select(
        `
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
      `
      )
      .eq("id", id);

    if (error) {
      console.error("Supabase error:", error);
      return {
        status: 500,
        message: "Failed to fetch products.",
        error: error.message,
      };
    }

    const formattedData: Product = {
      id: products[0].id,
      actual_price: products[0].actual_price,
      barcode: products[0].barcode,
      brand: products[0].brand,
      created_at: products[0].created_at,
      updated_at: products[0].updated_at,
      description: products[0].description,
      discount: products[0].discount,
      images: products[0].images.map(
        (image: { id: number; url: string; created_at: string }) => ({
          id: image.id,
          url: image.url,
          created_at: image.created_at,
        })
      ),
      name: products[0].name,
      price: products[0].price,
      tags: products[0].product_tags.map(
        (tag: { tags: { id: number; tag: string; created_at: string } }) =>
          tag.tags
      ),
      categories: products[0].product_categories.map(
        (category: {
          categories: {
            id: number;
            category: string;
          };
        }) => category.categories
      ),
      sizes: products[0].product_dimensions.map(
        (size: {
          size: {
            id: number;
            size: string;
          };
        }) => size.size
      ),
      stock: products[0].stock,
    };

    return {
      status: 200,
      data: formattedData,
    };
  } catch (error) {
    console.error("Server error:", error);
    return {
      status: 500,
      message: "Something went wrong while fetching products.",
    };
  }
};

export default getSingleProduct;
