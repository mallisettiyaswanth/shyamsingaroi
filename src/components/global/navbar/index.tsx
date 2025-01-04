import React from "react";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { Input } from "@/components/ui/input";
import { Heart, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="flex flex-col p-5 px-8 z-50 gap-5 sticky top-0 bg-white/25 backdrop-blur-sm">
      <nav className="w-full justify-between flex items-center">
        <div className="gap-8 text-sm border-gray-400 hidden lg:flex">
          <span>Women</span>
          <span>Men</span>
          <span>kids</span>
        </div>
        <div className="">Logo</div>
        <ul className="flex gap-3 items-center">
          <li className="flex flex-col gap-1 items-center justify-center px-3">
            <ShoppingCart className="w-4 h-4" />
            <span className="text-xs font-semibold">Cart</span>
          </li>
          <li className="flex flex-col gap-1 items-center justify-center px-3">
            <Heart className="w-4 h-4" />
            <span className="text-xs font-semibold">Favourites</span>
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
        </ul>
      </nav>
      <div className="gap-4 lg:gap-8 text-sm border-gray-400 flex lg:hidden">
        <span>Women</span>
        <span>Men</span>
      </div>
    </div>
  );
};

export default Navbar;
