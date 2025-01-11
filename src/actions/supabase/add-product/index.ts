"use server";

import { createClient } from "@/actions/server";
import { z } from "zod";

const schema = z.object({
  name: z.string().nonempty("Name is required"),
  barcode: z.string().nonempty("Barcode is required"),
  price: z.number().nonnegative("Price is required"),
  description: z.string().nonempty("Description is required"),
  category: z.array(z.string()).nonempty("Category is required"),
  brand: z.string().nonempty("Brand is required"),
  tags: z.array(z.string()).nonempty("Tags are required"),
  sizes: z.array(z.string()).nonempty("Sizes are required"),
  gender: z.string().nonempty("Gender is required"),
  images: z
    .array(
      z
        .instanceof(File)
        .refine((file) => file.size > 0, "File cannot be empty")
        .refine(
          (file) =>
            ["image/jpeg", "image/png", "image/jpg"].includes(file.type),
          "Only JPEG and PNG formats are allowed"
        )
    )
    .nonempty("At least one image is required"),
});

type FormValues = z.infer<typeof schema>;

const addProduct = async (values: FormValues) => {
  try {
    const supabase = await createClient();
    const { data: product, error } = await supabase
      .from("products")
      .insert([
        {
          name: values.name,
          description: values.description,
          price: +values.price,
          brand: values.brand,
          barcode: values.barcode,
          stock: 100,
          discount: 10,
        },
      ])
      .select("*");
    if (error) {
      throw new Error(error.message);
    }

    const productID = product[0].id;

    const { error: categoryError } = await supabase
      .from("product_categories")
      .insert(
        values.category.map((category) => ({
          product_id: productID,
          category,
        }))
      );
  } catch (err) {
    console.log(err);
    return {
      status: 500,
      message: "Internal server",
    };
  }
};

export default addProduct;
