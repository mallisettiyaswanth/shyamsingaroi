import getProduct from "@/actions/supabase/getProduct";
import Image from "next/image";
import React from "react";

type Props = {
  params: {
    id: string;
  };
};

const ProductsShowCase = async ({ params: { id } }: Props) => {
  const product = await getProduct(+id);

  return (
    <div className="p-5 flex flex-col">
      <div className="flex w-full h-full flex-col lg:flex-row p-3">
        <div className="flex flex-col w-full lg:w-1/2">
          <Image
            src={
              product && product.data && product.data.images
                ? product.data?.images[0].url
                : ""
            }
            alt="product"
            width={500}
            height={500}
          />
        </div>
        <div className=""></div>
      </div>
    </div>
  );
};

export default ProductsShowCase;
