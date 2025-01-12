import ResponsiveNavbar from "@/components/global/navbar";
import Link from "next/link";
import React from "react";

type Props = {};

const ProductPage = (props: Props) => {
  return (
    <div className="flex flex-col gap-3">
      <ResponsiveNavbar />
      <div className="w-full flex flex-col gap-8 py-5">
        <div className="w-full text-center flex flex-col gap-2">
          <h1 className="text-4xl">Men's latest fashion</h1>
          <p className="text-gray-400 text-sm">
            choose wide range of top choices.
          </p>
        </div>
        <div className="flex flex-row gap-3">
          <Link href="/product/men" className="flex-1">
            <div className="w-full h-96 flex items-center justify-center">
              shirts
            </div>
          </Link>
          <Link href="/product/men" className="flex-1">
            <div className="w-full h-96 flex items-center justify-center">
              phants
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
