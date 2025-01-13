"use server";

import { createClient } from "@/actions/server";
import { Product } from "@/components/global/data-table/schema";

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

    const formattedData: Product[] = products.map((product) => {
      return {
        id: product.id,
        actual_price: product.actual_price,
        barcode: product.barcode,
        brand: product.brand,
        created_at: product.created_at,
        updated_at: product.updated_at,
        description: product.description,
        discount: product.discount,
        images: product.images.map(
          (image: { id: number; url: string; created_at: string }) => ({
            id: image.id,
            url: image.url,
            created_at: image.created_at,
          })
        ),
        name: product.name,
        price: product.price,
        tags: product.product_tags.map(
          (tag: { tags: { id: number; tag: string; created_at: string } }) =>
            tag.tags
        ),
        categories: product.product_categories.map(
          (category: {
            categories: {
              id: number;
              category: string;
              gender: string;
              created_at: string;
            };
          }) => category.categories
        ),
        sizes: product.product_dimensions.map(
          (size: {
            size: {
              id: number;
              size: string;
              gender: string;
              created_at: string;
            };
          }) => size.size
        ),
        stock: product.stock,
      };
    });

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

export default getProducts;
