import { z } from "zod";

export const productSchema = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string(),
  price: z.number(),
  brand: z.string(),
  created_at: z.string(),
  updated_at: z.string(),
  barcode: z.string(),
  discount: z.number(),
  actual_price: z.number(),
  stock: z.number(),
  tags: z.array(
    z.object({
      id: z.number(),
      tag: z.string(),
      created_at: z.string(),
    })
  ),
  images: z.array(
    z.object({
      id: z.number(),
      url: z.string(),
      created_at: z.string(),
    })
  ),
  sizes: z.array(
    z.object({
      id: z.number(),
      size: z.string(),
      gender: z.string(),
      created_at: z.string(),
    })
  ),
  categories: z.array(
    z.object({
      id: z.number(),
      category: z.string(),
      gender: z.string(),
      created_at: z.string(),
    })
  ),
});

export type Product = z.infer<typeof productSchema>;
