"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, Heart, BarChart2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

// Extended product data
const products = [
  {
    id: 1,
    name: "Peach Embroidered Kurta",
    price: "₹1,139.00",
    image:
      "https://www.cmrshoppingmall.in/media/catalog/product/cache/545296cc39c6d1f702d8d23f874257e0/a/s/as72200_3_.jpg",
  },
  {
    id: 2,
    name: "Navy Blue Embroidered Kurta",
    price: "₹1,679.00",
    image:
      "https://www.cmrshoppingmall.in/media/catalog/product/cache/545296cc39c6d1f702d8d23f874257e0/a/s/as72200_3_.jpg",
  },
  {
    id: 3,
    name: "Yellow Printed Kurta Set",
    price: "₹2,999.00",
    image:
      "https://www.cmrshoppingmall.in/media/catalog/product/cache/545296cc39c6d1f702d8d23f874257e0/a/s/as72200_3_.jpg",
  },
  {
    id: 4,
    name: "Cream Cotton Kurta with Floral Prints",
    price: "₹1,559.00",
    image:
      "https://www.cmrshoppingmall.in/media/catalog/product/cache/545296cc39c6d1f702d8d23f874257e0/a/s/as72200_3_.jpg",
  },
  {
    id: 5,
    name: "Green Embroidered Anarkali",
    price: "₹2,299.00",
    image:
      "https://www.cmrshoppingmall.in/media/catalog/product/cache/545296cc39c6d1f702d8d23f874257e0/a/s/as72200_3_.jpg",
  },
  {
    id: 6,
    name: "Pink Floral Kurta Set",
    price: "₹1,899.00",
    image:
      "https://www.cmrshoppingmall.in/media/catalog/product/cache/545296cc39c6d1f702d8d23f874257e0/a/s/as72200_3_.jpg",
  },
  {
    id: 7,
    name: "Blue Printed Straight Kurta",
    price: "₹1,459.00",
    image:
      "https://www.cmrshoppingmall.in/media/catalog/product/cache/545296cc39c6d1f702d8d23f874257e0/a/s/as72200_3_.jpg",
  },
  {
    id: 8,
    name: "Maroon Embellished Kurta",
    price: "₹2,159.00",
    image:
      "https://www.cmrshoppingmall.in/media/catalog/product/cache/545296cc39c6d1f702d8d23f874257e0/a/s/as72200_3_.jpg",
  },
  {
    id: 9,
    name: "White Chikankari Kurta",
    price: "₹1,799.00",
    image:
      "https://www.cmrshoppingmall.in/media/catalog/product/cache/545296cc39c6d1f702d8d23f874257e0/a/s/as72200_3_.jpg",
  },
  {
    id: 10,
    name: "Beige Embroidered Anarkali",
    price: "₹2,499.00",
    image:
      "https://www.cmrshoppingmall.in/media/catalog/product/cache/545296cc39c6d1f702d8d23f874257e0/a/s/as72200_3_.jpg",
  },
];

export default function TopProducts() {
  const [api] = useEmblaCarousel(
    {
      align: "start",
      loop: true,
    },
    [
      Autoplay({
        delay: 3000,
        stopOnInteraction: false,
      }),
    ]
  );

  return (
    <>
      <div>
        <img src="/top.png" alt="" className="w-full" />
      </div>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 3000,
            stopOnInteraction: false,
          }),
        ]}
        className="w-full mt-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <CarouselContent className="-ml-2 md:-ml-4 gap-5 ">
          {products.map((product) => (
            <CarouselItem
              key={product.id}
              className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
            >
              <Card className="border-none shadow-none">
                <CardContent className="p-0">
                  <div className="relative">
                    {/* Product Image */}
                    <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Action Buttons - Always Visible */}
                    {/* <div className="absolute right-4 top-4 flex flex-col gap-2">
                    <Button
                    size="icon"
                      variant="secondary"
                      className="h-10 w-10 rounded-full bg-white/90 backdrop-blur-sm"
                    >
                      <Search className="h-4 w-4" />
                      <span className="sr-only">Quick view</span>
                    </Button>
                    <Button
                      size="icon"
                      variant="secondary"
                      className="h-10 w-10 rounded-full bg-white/90 backdrop-blur-sm"
                    >
                      <Heart className="h-4 w-4" />
                      <span className="sr-only">Add to wishlist</span>
                    </Button>
                    <Button
                      size="icon"
                      variant="secondary"
                      className="h-10 w-10 rounded-full bg-white/90 backdrop-blur-sm"
                      >
                      <BarChart2 className="h-4 w-4" />
                      <span className="sr-only">Compare</span>
                    </Button>
                  </div> */}
                  </div>

                  {/* Product Info */}
                  <div className="pt-4">
                    <Link href="#" className="block ">
                      <h3 className="text-sm text-gray-700 font-medium line-clamp-2">
                        {product.name}
                      </h3>
                      <p className="mt-1 text-sm font-semibold text-gray-900">
                        {product.price}
                      </p>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-center gap-2 mt-4 md:mt-0">
          <CarouselPrevious className="relative md:absolute -left-12 h-12 w-12 rounded-full border-2" />
          <CarouselNext className="relative md:absolute -right-12 h-12 w-12 rounded-full border-2" />
        </div>
      </Carousel>
    </>
  );
}
