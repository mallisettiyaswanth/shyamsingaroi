import React from "react";

type Props = {};

const ProductCard = (props: Props) => {
  return (
    <div className="p-1 flex flex-col gap-3 rounded-md">
      <img
        src="https://assets-global.website-files.com/6256995755a7ea0a3d8fbd11/645924d369c84c1e3dbda2ad_Frame%201.jpg"
        alt="product"
        className="rounded-lg"
      />
      <div className="text-sm flex flex-col gap-1">
        <span>Product Name</span>
        <span className="font-semibold">$45</span>
      </div>
    </div>
  );
};

export default ProductCard;
