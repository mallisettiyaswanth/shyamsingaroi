"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Star, ChevronDown, ChevronUp, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const products = [
  {
    id: 1,
    name: "Vibrant Summer Dress",
    price: 79.99,
    rating: 4.5,
    image: "/placeholder.svg",
    sale: true,
    originalPrice: 99.99,
  },
  {
    id: 2,
    name: "Colorful Sneakers",
    price: 89.99,
    rating: 4.2,
    image: "/placeholder.svg",
    new: true,
  },
  {
    id: 3,
    name: "Patterned Shirt",
    price: 59.99,
    rating: 4.7,
    image: "/placeholder.svg",
  },
  {
    id: 4,
    name: "Stylish Sunglasses",
    price: 129.99,
    rating: 4.8,
    image: "/placeholder.svg",
    sale: true,
    originalPrice: 159.99,
  },
  {
    id: 5,
    name: "Comfortable Jeans",
    price: 69.99,
    rating: 4.3,
    image: "/placeholder.svg",
  },
  {
    id: 6,
    name: "Elegant Watch",
    price: 199.99,
    rating: 4.9,
    image: "/placeholder.svg",
    new: true,
  },
  // Add more products as needed
];

export default function ProductListingPage() {
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState([0, 200]);

  const addFilter = (filter: string) => {
    setActiveFilters([...activeFilters, filter]);
  };

  const removeFilter = (filter: string) => {
    setActiveFilters(activeFilters.filter((f) => f !== filter));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-yellow-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
          Discover Our Collection
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Product Grid */}
          <div className="lg:w-3/4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <Card
                  key={product.id}
                  className="overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <CardContent className="p-0">
                    <div className="relative aspect-square">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover"
                      />
                      {product.sale && (
                        <Badge className="absolute top-2 left-2 bg-red-500">
                          Sale
                        </Badge>
                      )}
                      {product.new && (
                        <Badge className="absolute top-2 left-2 bg-green-500">
                          New
                        </Badge>
                      )}
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-lg mb-1">
                        {product.name}
                      </h3>
                      <div className="flex items-center gap-2 mb-2">
                        <div className="flex items-center text-yellow-400">
                          <Star className="h-4 w-4 fill-current" />
                          <span className="text-sm text-gray-600 ml-1">
                            {product.rating}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-lg">
                          ${product.price.toFixed(2)}
                        </span>
                        {product.originalPrice && (
                          <span className="text-sm text-gray-400 line-through">
                            ${product.originalPrice.toFixed(2)}
                          </span>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Filters Sidebar */}
          <div className="lg:w-1/4 space-y-6">
            <Card className="overflow-hidden">
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-4">Filters</h2>

                {/* Active Filters */}
                {activeFilters.length > 0 && (
                  <div className="mb-4">
                    <h3 className="font-semibold mb-2">Active Filters:</h3>
                    <div className="flex flex-wrap gap-2">
                      {activeFilters.map((filter) => (
                        <Badge
                          key={filter}
                          variant="secondary"
                          className="px-2 py-1"
                        >
                          {filter}
                          <button
                            onClick={() => removeFilter(filter)}
                            className="ml-2"
                          >
                            <X className="h-3 w-3" />
                          </button>
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                {/* Price Range */}
                <div className="mb-6">
                  <h3 className="font-semibold mb-2">Price Range</h3>
                  <Slider
                    min={0}
                    max={200}
                    step={10}
                    value={priceRange}
                    onValueChange={setPriceRange}
                    className="mb-2"
                  />
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>

                {/* Categories */}
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="categories">
                    <AccordionTrigger>Categories</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <Checkbox
                            id="category-dresses"
                            onCheckedChange={() => addFilter("Dresses")}
                          />
                          <label htmlFor="category-dresses" className="ml-2">
                            Dresses
                          </label>
                        </div>
                        <div className="flex items-center">
                          <Checkbox
                            id="category-tops"
                            onCheckedChange={() => addFilter("Tops")}
                          />
                          <label htmlFor="category-tops" className="ml-2">
                            Tops
                          </label>
                        </div>
                        <div className="flex items-center">
                          <Checkbox
                            id="category-shoes"
                            onCheckedChange={() => addFilter("Shoes")}
                          />
                          <label htmlFor="category-shoes" className="ml-2">
                            Shoes
                          </label>
                        </div>
                        <div className="flex items-center">
                          <Checkbox
                            id="category-accessories"
                            onCheckedChange={() => addFilter("Accessories")}
                          />
                          <label
                            htmlFor="category-accessories"
                            className="ml-2"
                          >
                            Accessories
                          </label>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                {/* Colors */}
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="colors">
                    <AccordionTrigger>Colors</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <Checkbox
                            id="color-red"
                            onCheckedChange={() => addFilter("Red")}
                          />
                          <label htmlFor="color-red" className="ml-2">
                            Red
                          </label>
                        </div>
                        <div className="flex items-center">
                          <Checkbox
                            id="color-blue"
                            onCheckedChange={() => addFilter("Blue")}
                          />
                          <label htmlFor="color-blue" className="ml-2">
                            Blue
                          </label>
                        </div>
                        <div className="flex items-center">
                          <Checkbox
                            id="color-green"
                            onCheckedChange={() => addFilter("Green")}
                          />
                          <label htmlFor="color-green" className="ml-2">
                            Green
                          </label>
                        </div>
                        <div className="flex items-center">
                          <Checkbox
                            id="color-yellow"
                            onCheckedChange={() => addFilter("Yellow")}
                          />
                          <label htmlFor="color-yellow" className="ml-2">
                            Yellow
                          </label>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                {/* Sizes */}
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="sizes">
                    <AccordionTrigger>Sizes</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <Checkbox
                            id="size-s"
                            onCheckedChange={() => addFilter("S")}
                          />
                          <label htmlFor="size-s" className="ml-2">
                            S
                          </label>
                        </div>
                        <div className="flex items-center">
                          <Checkbox
                            id="size-m"
                            onCheckedChange={() => addFilter("M")}
                          />
                          <label htmlFor="size-m" className="ml-2">
                            M
                          </label>
                        </div>
                        <div className="flex items-center">
                          <Checkbox
                            id="size-l"
                            onCheckedChange={() => addFilter("L")}
                          />
                          <label htmlFor="size-l" className="ml-2">
                            L
                          </label>
                        </div>
                        <div className="flex items-center">
                          <Checkbox
                            id="size-xl"
                            onCheckedChange={() => addFilter("XL")}
                          />
                          <label htmlFor="size-xl" className="ml-2">
                            XL
                          </label>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                {/* Sort By */}
                <div className="mt-6">
                  <h3 className="font-semibold mb-2">Sort By</h3>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select option" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="popularity">Popularity</SelectItem>
                      <SelectItem value="price-low-high">
                        Price: Low to High
                      </SelectItem>
                      <SelectItem value="price-high-low">
                        Price: High to Low
                      </SelectItem>
                      <SelectItem value="newest">Newest First</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Apply Filters Button */}
                <Button className="w-full mt-6 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white">
                  Apply Filters
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
