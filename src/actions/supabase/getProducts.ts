"use server";

import { createClient } from "@/actions/server";
import { z } from "zod";

const productSchema = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string(),
  category: z.string(),
  price: z.number(),
  tags: z.array(z.string()),
  brand: z.string(),
  created_at: z.string(),
  updated_at: z.string(),
  barcode: z.string(),
  qrcode: z.string(),
  images: z.array(z.string()),
  sizes: z.array(z.string()),
});

type Product = z.infer<typeof productSchema>;

export const getProducts = async () => {
  try {
    const supabase = await createClient();
    let {
      data: products,
    }: {
      data: Product[] | null;
    } = await supabase.from("products").select("*");

    if (!products) {
      return {
        status: 404,
        message: "No products found!",
      };
    }

    const returnObjects = products.map((doc) => {
      return {
        id: doc.id,
        name: doc.name,
        description: doc.description,
        price: doc.price,
        brand: doc.brand,
        tags: doc.tags,
        category: doc.category,
        images: doc.images,
        sizes: doc.sizes,
        meta: {
          created_at: doc.created_at,
          updated_at: doc.updated_at,
          qrcode: doc.qrcode,
          barcode: doc.barcode,
        },
      };
    });

    return returnObjects;
  } catch (err) {
    console.error(err);
    return {
      status: 400,
      message: "Something went wrong!",
    };
  }
};
