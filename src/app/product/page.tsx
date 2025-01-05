"use client";
import Navbar from "@/components/global/navbar";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";
import { ShoppingCart } from "lucide-react";
import React, { useState } from "react";

type Props = {};

const ProductPage = (props: Props) => {
  const productImages = [
    "https://assets-global.website-files.com/6256995755a7ea0a3d8fbd11/645924d369c84c1e3dbda2ad_Frame%201.jpg",
    "https://assets-global.website-files.com/6256995755a7ea0a3d8fbd11/645924d369c84c1e3dbda2ad_Frame%201.jpg",
    "https://assets-global.website-files.com/6256995755a7ea0a3d8fbd11/645924d369c84c1e3dbda2ad_Frame%201.jpg",
    "https://assets-global.website-files.com/6256995755a7ea0a3d8fbd11/645924d369c84c1e3dbda2ad_Frame%201.jpg",
    "https://assets-global.website-files.com/6256995755a7ea0a3d8fbd11/645924d369c84c1e3dbda2ad_Frame%201.jpg",
  ];
  const [productImageIndex, setProductImageIndex] = useState(0);
  const sizes = ["sm", "md", "lg", "xl", "2xl", "3xl", "4xl"];
  const [selectedSize, setSelectedSize] = useState("");

  return (
    <div className="flex flex-col gap-5">
      <Navbar />
      <div className="p-5 flex flex-col gap-5">
        <div className="flex flex-col lg:flex-row lg:gap-24 gap-5 px-2 lg:px-10">
          <div className="flex-1 flex flex-col gap-3">
            <div className="flex">
              <img
                src={productImages[productImageIndex]}
                alt="Main product image"
                className="object-cover rounded-md h-[450px] w-full"
              />
            </div>
            <div className="w-full flex gap-3 flex-wrap">
              {productImages.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Product thumbnail ${index + 1}`}
                  onClick={() => setProductImageIndex(index)}
                  className={cn(
                    "object-cover rounded-md h-[75px]",
                    index === productImageIndex &&
                      "border-black border-2 flex-1"
                  )}
                />
              ))}
              <div className="h-[75px] border rounded-md flex items-center justify-center bg-black/10">
                <span className="text-sm text-gray-400">+4 more</span>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-10 py-10">
            <div className="flex flex-col gap-3">
              <div className="w-full">
                <h1 className="font-semibold text-sm">Branch Name</h1>
              </div>
              <div className="w-full">
                <h1 className="text-4xl font-semibold">Product name</h1>
              </div>
            </div>
            <div className="w-full">
              <h1 className="text-5xl font-bold">$199.00</h1>
            </div>
            <div className="w-full flex gap-3 flex-col">
              <span className="text-gray-400 text-sm">Sizes</span>
              <div className="w-full gap-3 flex flex-wrap">
                <RadioGroup
                  value={selectedSize}
                  onValueChange={setSelectedSize}
                  className="grid grid-cols-3 gap-2 sm:grid-cols-6"
                >
                  {sizes.map((size) => (
                    <div key={size} className="relative">
                      <RadioGroupItem
                        value={size.toString()}
                        id={`size-${size}`}
                        className="peer sr-only"
                      />
                      <Label
                        htmlFor={`size-${size}`}
                        className="flex cursor-pointer items-center justify-center rounded-lg border-2 bg-white px-3 py-2 text-center peer-data-[state=checked]:bg-black peer-data-[state=checked]:text-white"
                      >
                        {size}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
            </div>
            <Button>
              <ShoppingCart />
              Add to cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
