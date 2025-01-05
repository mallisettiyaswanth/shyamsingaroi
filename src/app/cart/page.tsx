"use client";

import Image from "next/image";
import { Heart, Minus, Plus, Search, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ShoppingCart() {
  return (
    <div className="min-h-screen">
      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Cart Items */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Your Cart</h2>
            <div className="space-y-6">
              {/* Cart Item 1 */}
              <div className="flex gap-4">
                <div className="w-32 h-32 bg-gray-100 rounded">
                  <Image
                    src="/placeholder.svg"
                    alt="Badacore Tshirt"
                    width={128}
                    height={128}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between">
                    <div>
                      <h3 className="font-medium">Badacore Tshirt</h3>
                      <p className="text-sm text-gray-500">Variant: Oversize</p>
                      <p className="text-sm text-gray-500">Size: XL</p>
                      <p className="text-sm text-gray-500">Color: Cream</p>
                    </div>
                    <div className="text-right">
                      <div className="font-medium">$90.00</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center space-x-4">
                      <Button variant="ghost" size="icon">
                        <Heart className="w-5 h-5" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <ShoppingBag className="w-5 h-5" />
                      </Button>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Button variant="outline" size="icon">
                        <Minus className="w-4 h-4" />
                      </Button>
                      <span>1</span>
                      <Button variant="outline" size="icon">
                        <Plus className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Cart Item 2 */}
              <div className="flex gap-4">
                <div className="w-32 h-32 bg-gray-100 rounded">
                  <Image
                    src="/placeholder.svg"
                    alt="Brown Bomber"
                    width={128}
                    height={128}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between">
                    <div>
                      <h3 className="font-medium">Brown Bomber</h3>
                      <p className="text-sm text-gray-500">
                        Variant: Windbreaker
                      </p>
                      <p className="text-sm text-gray-500">Size: L</p>
                      <p className="text-sm text-gray-500">Color: Brown</p>
                    </div>
                    <div className="text-right">
                      <div className="font-medium">$52.00</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center space-x-4">
                      <Button variant="ghost" size="icon">
                        <Heart className="w-5 h-5" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <ShoppingBag className="w-5 h-5" />
                      </Button>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Button variant="outline" size="icon">
                        <Minus className="w-4 h-4" />
                      </Button>
                      <span>2</span>
                      <Button variant="outline" size="icon">
                        <Plus className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Summary */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Summary</h2>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-medium">$191.00</span>
              </div>
              <div className="flex justify-between">
                <span>Estimated Delivery & Handling</span>
                <span className="font-medium">Free</span>
              </div>
              <div className="flex justify-between">
                <span>Estimated Taxes</span>
                <span className="font-medium">$21.00</span>
              </div>
              <div className="border-t pt-4">
                <div className="flex justify-between">
                  <span className="font-medium">Total</span>
                  <span className="font-medium">$212.00</span>
                </div>
              </div>
              <Button className="w-full bg-black text-white hover:bg-black/90">
                Checkout Now
              </Button>
              <Button variant="outline" className="w-full">
                <Image
                  src="/placeholder.svg"
                  alt="PayPal"
                  width={80}
                  height={20}
                  className="h-5 w-auto"
                />
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
