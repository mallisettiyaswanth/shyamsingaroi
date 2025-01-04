import React from "react";
import ProductCard from "../product";
import { Heart } from "lucide-react";

type Props = {};

const NewStock = (props: Props) => {
  return (
    <div className="min-h-screen flex flex-col gap-8 p-5">
      <h1 className="text-3xl lg:text-5xl px-5 flex gap-2 items-center w-full justify-center flex-col">
        <span>New collection</span>
        {/* <Heart className="w-8 h-8" /> */}
        <span className="text-sm text-center text-gray-400 font-normal">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda,
          inventore?
        </span>
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 gap-y-5">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default NewStock;
