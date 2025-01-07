import { z } from "zod";

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.


export const productSchema = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string(),
  category: z.string(),
  price: z.number(),
  tags: z.array(z.string()),
  brand: z.string(),
  meta: z.object({
    created_at: z.string(),
    updated_at: z.string(),
    barcode: z.string(),
    qrcode: z.string(),
  }),
  images: z.array(z.string()),
  sizes: z.array(z.string()),
});

export type Product = z.infer<typeof productSchema>;
