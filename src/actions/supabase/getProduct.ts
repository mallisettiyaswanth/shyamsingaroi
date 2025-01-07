import { createClient } from "../server";

type Product = {
  id: number;
  name: string;
  description: string;
  created_at: string;
  updated_at: string;
  qrcode: string;
  barcode: string;
  price: number;
  brand: string;
  discount: number;
  images:
    | {
        id: number;
        url: string;
        created_at: string;
      }[]
    | null;
};
const getProduct = async (productId: number) => {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("products")
    .select(
      `
            *,
            images (
              id,
              url,
              created_at
            )
        `
    )
    .eq("id", productId)
    .single();

  console.log(data);

  if (error) {
    console.error("Error fetching product with images:", error);
    return {
      status: 500,
      message: "Failed to fetch product!",
    };
  }
  if (!data) {
    return {
      status: 404,
      message: "Product not found!",
    };
  }
  const product = data as {
    id: number;
    name: string;
    description: string;
    created_at: string;
    updated_at: string;
    qrcode: string;
    barcode: string;
    price: number;
    brand: string;
    discount: number;
    images:
      | {
          id: number;
          url: string;
          created_at: string;
        }[]
      | null;
  };
  const result: Product = {
    id: product.id,
    name: product.name,
    description: product.description,
    created_at: product.created_at,
    updated_at: product.updated_at,
    qrcode: product.qrcode,
    barcode: product.barcode,
    images: product.images,
    price: product.price,
    brand: product.brand,
    discount: product.discount,
  };

  return {
    status: 200,
    message: "Success",
    data: result,
  };
};

export default getProduct;
