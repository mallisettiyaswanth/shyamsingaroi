"use client";

import { useState } from "react";
import { ShoppingCart, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SignedOut, SignedIn, SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { MegaMenu } from "@/components/mega-menu";

export default function ResponsiveNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<"women" | "men" | "kids" | null>(
    null
  );

  const handleMouseEnter = (menu: "women" | "men" | "kids") => {
    setActiveMenu(menu);
  };

  const handleMouseLeave = () => {
    setActiveMenu(null);
  };

  return (
    <div className="relative">
      <div className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-300">
        <nav className="flex flex-col p-5 px-8">
          <div className="flex justify-between items-center">
            <div>
              <img src="/logo.png" alt="Logo" className="w-full h-14" />
            </div>
            <div className="hidden gap-8 text-md uppercase font-bold lg:flex">
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter("women")}
                onMouseLeave={handleMouseLeave}
              >
                <Link href="/category/women" className="pointer">
                  Women
                </Link>
              </div>
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter("men")}
                onMouseLeave={handleMouseLeave}
              >
                <Link href="/category/men" className="pointer">
                  Men
                </Link>
              </div>
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter("kids")}
                onMouseLeave={handleMouseLeave}
              >
                <Link href="/category/kids" className="pointer">
                  Kids
                </Link>
              </div>
            </div>
            <ul className="flex gap-3 items-center">
              <li className="flex flex-col gap-1 items-center justify-center px-3">
                <ShoppingCart className="w-4 h-4" />
                <span className="text-xs font-semibold">Cart</span>
              </li>
              <li>
                <SignedOut>
                  <Button>
                    <SignInButton />
                  </Button>
                </SignedOut>
                <SignedIn>
                  <UserButton />
                </SignedIn>
              </li>
              <li className="lg:hidden">
                <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                  {isMenuOpen ? (
                    <X className="w-6 h-6" />
                  ) : (
                    <Menu className="w-6 h-6" />
                  )}
                </button>
              </li>
            </ul>
          </div>
          {isMenuOpen && (
            <div className="flex flex-col gap-4 text-sm lg:hidden mt-4">
              <span>Women</span>
              <span>Men</span>
              <span>Kids</span>
            </div>
          )}
        </nav>
      </div>

      {/* Mega Menu */}
      <div
        onMouseEnter={() => activeMenu && setActiveMenu(activeMenu)}
        onMouseLeave={handleMouseLeave}
      >
        <MegaMenu isOpen={activeMenu === "women"} type="women" />
        <MegaMenu isOpen={activeMenu === "men"} type="men" />
        <MegaMenu isOpen={activeMenu === "kids"} type="kids" />
      </div>
    </div>
  );
}
