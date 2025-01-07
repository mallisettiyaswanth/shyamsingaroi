import getProduct from "@/actions/supabase/getProduct";
import QuantityButton from "@/components/global/product-quantity-button";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

type Props = {
  params: {
    id: string;
  };
};

const ProductsShowCase = async ({ params: { id } }: Props) => {
  const product = await getProduct(+id);

  console.log(product);

  return (
    <div className="p-5 flex flex-col">
      <div className="flex w-full h-full flex-col lg:flex-row p-3">
        <div className="flex flex-col lg:w-1/2 flex-1">
          <Image
            src={
              product && product.data && product.data.images
                ? product.data?.images[0].url
                : ""
            }
            className="w-full"
            alt="product"
            width={600}
            height={600}
          />
        </div>
        <div className="flex flex-col gap-3 flex-1 p-5">
          <h1 className="w-full font-semibold text-2xl">
            {product && product.data && product.data.name
              ? product.data.name
              : ""}
          </h1>
          <span className="text-base text-gray-400">
            {product && product.data && product.data.description}
          </span>
          <span className="text-2xl">
            Rs. {product && product.data && product.data.price.toFixed(2)}
          </span>
          <div className="flex gap-2">
            <QuantityButton />
            <Button className="rounded-full">Add to cart</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsShowCase;
