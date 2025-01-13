"use client";

import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export default function NewStock() {
  const [currentIndex, setCurrentIndex] = useState(0);

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
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === products.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? products.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, []);

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
    <div className="min-h-screen  relative overflow-hidden">
      <div className="w-full text-center py-4 px-4 bg-white ">
        <span className="inline-block py-1 px-4 rounded-full border border-gray-700 text-sm text-gray-700">
          Festive Collection 2025
        </span>
      </div>

      <div className="container mx-auto px-4 pt-12 pb-24">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Shyam Silks – Your Style, Our Craft.
          </h1>
          <p className="text-gray-600 text-lg mb-8">
            Discover the perfect blend of trends and individuality. Explore our
            latest collection now!
          </p>
          <button className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors">
            New Collection
            <ArrowRight className="w-4 h-4 " />
          </button>
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
                    </div>

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
      </div>
    </div>
  );
}
