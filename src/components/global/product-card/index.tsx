import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  product: {
    id: string;
    name: string;
    description: string;
    price: number;
    product_categories: {
      categories: {
        category: string;
      }[];
    }[];
    images: {
      id: string;
      url: string;
    }[];
  };
};

const ProductCard = ({ product }: Props) => {
  return (
    <Link
      href={`/product/${product.id}`}
      className="flex flex-col items-center justify-center h-full"
    >
      <div className="flex flex-col gap-2 h-full w-64">
        {product.images.length > 0 ? (
          <Image
            width={300}
            height={700}
            src={product.images[0].url ?? ""}
            alt={product.name}
            className="h-full"
          />
        ) : (
          <div className="h-full flex items-center justify-center">
            No Image Found
          </div>
        )}
        <div className="flex flex-col gap-1">
          <span>{product.name}</span>
          <span>Rs. {product.price}</span>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
