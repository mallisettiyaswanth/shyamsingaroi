"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Heart,
  Share2,
  Barcode,
  Calendar,
  Tag,
  Package,
  Ruler,
} from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import getSingleProduct from "@/actions/supabase/product/get-product";

export default function InspectProduct({
  id,
  actions = true,
}: {
  id: number;
  actions?: boolean;
}) {
  const [selectedImage, setSelectedImage] = useState(0);
  const { data, isLoading, error } = useQuery({
    queryKey: ["product", id],
    queryFn: () => getSingleProduct(id),
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const product = data?.data;

  const created_date = new Date(product?.created_at || "");
  const formatted_createdAt = created_date.toLocaleDateString("en-US", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
  const updated_date = new Date(product?.created_at || "");
  const formatted_updatedAt = updated_date.toLocaleDateString("en-US", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Image Gallery */}
          <div className="space-y-4">
            <motion.div
              className="relative h-[500px] rounded-lg overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 mix-blend-overlay z-10" />
              <Image
                src={product?.images[selectedImage].url || ""}
                alt={product?.name || ""}
                fill
                className="object-cover"
              />
            </motion.div>
            <div className="flex gap-4 overflow-x-auto pb-2">
              {product?.images.map((image, index) => (
                <button
                  key={image.id}
                  onClick={() => setSelectedImage(index)}
                  className={`relative w-24 h-24 rounded-lg overflow-hidden flex-shrink-0 border-2 
                    ${
                      selectedImage === index
                        ? "border-purple-500"
                        : "border-transparent"
                    }`}
                >
                  <Image
                    src={image.url}
                    alt={`${product.name} ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                {product?.name}
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 mt-2">
                {product?.description}
              </p>
            </div>

            <div className="flex items-baseline gap-4">
              <span className="text-3xl font-bold text-green-600 dark:text-green-400">
                ₹{product?.price}
              </span>
              <span className="text-xl line-through text-gray-500">
                ₹{product?.actual_price}
              </span>
            </div>

            <div className="space-y-4">
              <h2 className="font-semibold flex items-center gap-2">
                <Ruler className="w-5 h-5 text-purple-500" />
                Sizes
              </h2>
              <div className="flex flex-wrap gap-2">
                {product?.sizes.map((size) => (
                  <Button key={size.size} variant="outline" size="sm">
                    {size.size}
                  </Button>
                ))}
              </div>
            </div>

            {actions && (
              <>
                <div className="flex gap-4">
                  <Button className="flex-1" size="lg">
                    Add to Cart
                  </Button>
                  <Button variant="outline" size="lg">
                    <Heart className="w-5 h-5" />
                  </Button>
                  <Button variant="outline" size="lg">
                    <Share2 className="w-5 h-5" />
                  </Button>
                </div>
                <Separator />
              </>
            )}

            <Card className="p-4">
              <div className="grid gap-3">
                <div className="flex items-center gap-2">
                  <Package className="w-5 h-5 text-purple-500" />
                  <span className="font-medium">Brand:</span>
                  <span>{product?.brand}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Barcode className="w-5 h-5 text-purple-500" />
                  <span className="font-medium">Barcode:</span>
                  <span>{product?.barcode}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Tag className="w-5 h-5 text-purple-500" />
                  <span className="font-medium">Stock:</span>
                  <span
                    className={`${
                      product?.stock && product?.stock > 50
                        ? "text-green-600 dark:text-green-400"
                        : product?.stock && product?.stock > 20
                        ? "text-yellow-600 dark:text-yellow-400"
                        : "text-red-600 dark:text-red-400"
                    }`}
                  >
                    {product?.stock} units available
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-purple-500" />
                  <span className="font-medium">Listed on:</span>
                  <span>{formatted_createdAt}</span>
                </div>
              </div>
            </Card>

            <div className="space-y-2">
              <h2 className="font-semibold">Categories</h2>
              <div className="flex flex-wrap gap-2">
                {product?.categories.map((category) => (
                  <Badge
                    key={category.id}
                    variant="secondary"
                    className="bg-gradient-to-r from-purple-500/10 to-pink-500/10"
                  >
                    {category.gender} - {category.category}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <h2 className="font-semibold">Tags</h2>
              <div className="flex flex-wrap gap-2">
                {product?.tags.map((tag) => (
                  <Badge key={tag.id} variant="outline">
                    {tag.tag}
                  </Badge>
                ))}
              </div>
            </div>

            <Separator />

            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Specification</TableHead>
                  <TableHead>Detail</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Product ID</TableCell>
                  <TableCell>{product?.id}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Last Updated</TableCell>
                  <TableCell>{formatted_updatedAt}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Gender</TableCell>
                  <TableCell>{product?.categories[0]?.gender}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
}
