"use client";

import Link from "next/link";
import Image from "next/image";

export default function CategorySection() {
  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <div className="grid grid-cols-2 gap-4 sm:gap-6 sm:grid-cols-2 max-w-3xl mx-auto">
        <Link
          href="/men"
          className="transform transition-transform hover:scale-105"
        >
          <div className="relative rounded-lg border-4 border-rose-500 overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-12 z-10">
              <div className="relative h-full">
                {[...Array(12)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute"
                    style={{
                      left: `${i * 8}%`,
                      borderLeft: "10px solid transparent",
                      borderRight: "10px solid transparent",
                      borderTop: "15px solid",
                      borderTopColor:
                        i % 3 === 0
                          ? "#FF4D4D"
                          : i % 3 === 1
                          ? "#4DA6FF"
                          : "#FFD700",
                    }}
                  />
                ))}
              </div>
            </div>

            <div className="relative bg-yellow-400 aspect-[3/4] max-w-[200px] sm:max-w-[280px] mx-auto">
              <Image
                src="/men.png"
                alt="Men's Fashion"
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="relative bg-red-600 py-3 px-4">
              <div className="absolute left-2 top-1/2 -translate-y-1/2 w-4 h-4 border-2 border-yellow-300 rotate-45" />
              <div className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 border-2 border-yellow-300 rotate-45" />

              <h2 className="text-center text-xl sm:text-2xl font-semibold text-yellow-300">
                Men
              </h2>
            </div>
          </div>
        </Link>

        <Link
          href="/women"
          className="transform transition-transform hover:scale-105"
        >
          <div className="relative rounded-lg border-4 border-rose-500 overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-12 z-10">
              <div className="relative h-full">
                {[...Array(12)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute"
                    style={{
                      left: `${i * 8}%`,
                      borderLeft: "10px solid transparent",
                      borderRight: "10px solid transparent",
                      borderTop: "15px solid",
                      borderTopColor:
                        i % 3 === 0
                          ? "#FF4D4D"
                          : i % 3 === 1
                          ? "#4DA6FF"
                          : "#FFD700",
                    }}
                  />
                ))}
              </div>
            </div>

            <div className="relative bg-yellow-400 aspect-[3/4] max-w-[200px] sm:max-w-[280px] mx-auto">
              <Image
                src="/women.png"
                alt="Women's Fashion"
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="relative bg-red-600 py-3 px-4">
              <div className="absolute left-2 top-1/2 -translate-y-1/2 w-4 h-4 border-2 border-yellow-300 rotate-45" />
              <div className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 border-2 border-yellow-300 rotate-45" />

              <h2 className="text-center text-xl sm:text-2xl font-semibold text-yellow-300">
                Women
              </h2>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
