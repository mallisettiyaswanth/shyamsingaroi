"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown, ChevronUp, Sparkles, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
  variant: string;
  size: string;
  color: string;
  image: string;
}

export default function CartPage() {
  const [products, setProducts] = useState<Product[]>([
    {
      id: 1,
      name: "Badacore Tshirt",
      price: 90.0,
      quantity: 1,
      variant: "Oversize",
      size: "XL",
      color: "Cream",
      image: "/placeholder.svg",
    },
    {
      id: 2,
      name: "Brown Bomber",
      price: 52.0,
      quantity: 2,
      variant: "Windbreaker",
      size: "L",
      color: "Brown",
      image: "/placeholder.svg",
    },
  ]);
  const [showCoupon, setShowCoupon] = useState(false);
  const [couponCode, setCouponCode] = useState("");

  const updateQuantity = (id: number, change: number) => {
    setProducts(
      products.map((product) =>
        product.id === id
          ? { ...product, quantity: Math.max(1, product.quantity + change) }
          : product
      )
    );
  };

  const subtotal = products.reduce(
    (sum, product) => sum + product.price * product.quantity,
    0
  );
  const taxes = subtotal * 0.11;
  const total = subtotal + taxes;

  return (
    <div className="min-h-screen bg-[#fafafa] p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items Section */}
          <div className="lg:col-span-2 space-y-6">
            <h1 className="text-4xl font-bold relative">
              Your Cart
              <span className="absolute -top-6 -right-6 w-24 h-24 bg-orange-200 rounded-full opacity-50 blur-2xl" />
              <span className="absolute -bottom-6 -left-6 w-24 h-24 bg-purple-200 rounded-full opacity-50 blur-2xl" />
            </h1>

            {products.map((product) => (
              <Card
                key={product.id}
                className="overflow-hidden hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-6">
                  <div className="flex flex-col sm:flex-row gap-6">
                    <div className="relative w-full sm:w-32 h-32 bg-gray-100 rounded-lg overflow-hidden">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 space-y-4">
                      <div className="flex justify-between">
                        <div>
                          <h2 className="text-xl font-semibold">
                            {product.name}
                          </h2>
                          <div className="text-sm text-gray-600 space-y-1">
                            <p>Variant: {product.variant}</p>
                            <p>Size: {product.size}</p>
                            <p>Color: {product.color}</p>
                          </div>
                        </div>
                        <p className="text-xl font-bold">
                          ${product.price.toFixed(2)}
                        </p>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex gap-4">
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() => updateQuantity(product.id, -1)}
                          >
                            -
                          </Button>
                          <span className="flex items-center justify-center w-8">
                            {product.quantity}
                          </span>
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() => updateQuantity(product.id, 1)}
                          >
                            +
                          </Button>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="text-red-500 hover:text-red-700 hover:bg-red-50"
                          onClick={() =>
                            setProducts(
                              products.filter((p) => p.id !== product.id)
                            )
                          }
                        >
                          <Trash2 className="w-5 h-5" />
                          <span className="sr-only">Remove item</span>
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Summary Section */}
          <div className="lg:col-span-1">
            <Card className="sticky top-4">
              <CardContent className="p-6 space-y-6">
                <h2 className="text-2xl font-bold flex items-center gap-2">
                  Summary
                  <Sparkles className="w-5 h-5 text-yellow-500" />
                </h2>

                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Estimated Delivery & Handling</span>
                    <span className="text-green-600">Free</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Estimated Taxes</span>
                    <span>${taxes.toFixed(2)}</span>
                  </div>

                  <Button
                    variant="ghost"
                    className="w-full flex items-center justify-between"
                    onClick={() => setShowCoupon(!showCoupon)}
                  >
                    Have a coupon code?
                    {showCoupon ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </Button>

                  {showCoupon && (
                    <div className="flex gap-2">
                      <Input
                        placeholder="Enter coupon code"
                        value={couponCode}
                        onChange={(e) => setCouponCode(e.target.value)}
                      />
                      <Button>Apply</Button>
                    </div>
                  )}

                  <div className="h-px bg-gray-200" />

                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <Button className="w-full">Checkout Now</Button>
                  <Button variant="outline" className="w-full">
                    Continue Shopping
                  </Button>
                  <div className="relative h-12">
                    <Image
                      src="/placeholder.svg"
                      alt="PayPal"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
