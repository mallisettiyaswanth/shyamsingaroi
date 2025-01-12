import getCategoryProducts from "@/actions/supabase/category";
import ResponsiveNavbar from "@/components/global/navbar";
import ProductCard from "@/components/global/product-card";
import { RangeSlider } from "@/components/ui/range-slider";
import Image from "next/image";
import React from "react";

type Props = {
  params: {
    category: string;
  };
};

const ProductPage = async ({ params }: Props) => {
  const { category } = params;
  const products = await getCategoryProducts(category, "men");

  return (
    <div className="flex flex-col min-h-screen w-full">
      <ResponsiveNavbar />
      <div className="flex flex-row gap-5">
        <div className="flex-[2] w-full h-full">
          <div className="gap-2 items-center p-5 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {products.data?.map((product, index: number) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>
        </div>
        <div className="flex-1 p-5">
          <RangeSlider
            min={100}
            max={10000}
            step={5}
            minStepsBetweenThumbs={5}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
