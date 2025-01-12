"use server";

import { createClient } from "@/actions/server";
import { z } from "zod";

const schema = z.object({
  name: z.string().nonempty("Name is required"),
  barcode: z.string().nonempty("Barcode is required"),
  price: z.string().nonempty("Price is required"),
  discount: z.string().nonempty("discount is required"),
  stock: z.string().nonempty("stock is required"),
  description: z.string().nonempty("Description is required"),
  category: z.array(z.string()).nonempty("Category is required"),
  brand: z.string().nonempty("Brand is required"),
  tags: z.array(z.string()).nonempty("Tags are required"),
  sizes: z.array(z.string()).nonempty("Sizes are required"),
  gender: z.string().nonempty("Gender is required"),
  images: z.array(z.string()).nonempty("Images are required"),
});

type FormValues = z.infer<typeof schema>;

const addProduct = async (values: FormValues) => {
  const { data, error } = schema.safeParse(values);
  if (error) {
    return {
      status: 400,
      message: error.errors[0].message,
    };
  }
  console.log(data);
  try {
    const supabase = await createClient();
    const actual_price = (
      +values.price -
      +values.price * (+values.discount / 100)
    ).toFixed(0);
    const { data: product, error } = await supabase
      .from("products")
      .insert([
        {
          name: values.name,
          description: values.description,
          price: +values.price,
          brand: values.brand,
          barcode: values.barcode,
          stock: +values.stock,
          discount: +values.discount,
          actual_price: +actual_price,
        },
      ])
      .select("*");
    if (error) {
      throw new Error(error.message);
    }

    console.log(product);
    const productID = product[0].id;
    const { error: categoryError } = await supabase
      .from("product_categories")
      .insert(
        values.category.map((category) => ({
          product_id: productID,
          category_id: category,
        }))
      );
    if (categoryError) {
      throw new Error(categoryError.message);
    }

    const { error: tagsError } = await supabase.from("product_tags").insert(
      values.tags.map((tag) => ({
        product_id: productID,
        tag_id: tag,
      }))
    );
    if (tagsError) {
      throw new Error(tagsError.message);
    }

    const { error: sizesError } = await supabase
      .from("product_dimensions")
      .insert(
        values.sizes.map((size) => ({
          product_id: productID,
          size_id: size,
          gender: values.gender,
          is_available: true,
        }))
      );
    if (sizesError) {
      throw new Error(sizesError.message);
    }

    const { error: imagesError } = await supabase.from("images").insert(
      values.images.map((image) => ({
        product_id: productID,
        url: image,
      }))
    );
    if (imagesError) {
      throw new Error(imagesError.message);
    }

    return {
      status: 200,
      message: "Product added successfully",
    };
  } catch (err) {
    console.log(err);
    return {
      status: 500,
      message: "Internal server",
    };
  }
};

export default addProduct;
