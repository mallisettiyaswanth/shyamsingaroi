"use client";

import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function NewStock() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const fashionImages = [
    {
      src: "https://www.cmrshoppingmall.in/media/catalog/product/cache/545296cc39c6d1f702d8d23f874257e0/8/9/8905661303144_7_.jpg",
      alt: "Fashion model in brown outfit",
    },
    {
      src: "https://www.cmrshoppingmall.in/media/catalog/product/cache/545296cc39c6d1f702d8d23f874257e0/8/9/8905661303144_7_.jpg",
      alt: "Fashion model in salmon suit",
    },
    {
      src: "https://www.cmrshoppingmall.in/media/catalog/product/cache/545296cc39c6d1f702d8d23f874257e0/8/9/8905661303144_7_.jpg",
      alt: "Fashion model in white outfit",
    },
    {
      src: "https://www.cmrshoppingmall.in/media/catalog/product/cache/545296cc39c6d1f702d8d23f874257e0/8/9/8905661303144_7_.jpg",
      alt: "Fashion model in orange hoodie",
    },
    {
      src: "https://www.cmrshoppingmall.in/media/catalog/product/cache/545296cc39c6d1f702d8d23f874257e0/8/9/8905661303144_7_.jpg",
      alt: "Fashion model in white turtleneck",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === fashionImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? fashionImages.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, []);

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

        <div className="relative max-w-4xl mx-auto">
          <div className="relative flex justify-center items-center">
            <button
              onClick={prevSlide}
              className="absolute left-2 md:left-6 z-10 p-3 rounded-full bg-transperant text-black border border-gray-600 hover:bg-black hover:text-white transition-all"
            >
              <ArrowRight className="w-6 h-6 rotate-180 " />
            </button>

            <div className="relative w-full overflow-hidden">
              <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{
                  transform: `translateX(-${currentIndex * 100}%)`,
                }}
              >
                {fashionImages.map((image, index) => (
                  <div
                    key={index}
                    className="w-full flex-shrink-0 flex justify-center items-center"
                  >
                    <div className="relative rounded-xl border border-gray-300 overflow-hidden w-[280px] md:w-[400px] h-[400px] md:h-[600px] shadow-lg">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={nextSlide}
              className="absolute right-2 md:right-6 z-10 p-3 rounded-full  bg-transperant text-black border border-gray-600 hover:bg-black hover:text-white  transition-all"
            >
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
