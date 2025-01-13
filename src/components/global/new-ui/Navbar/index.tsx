import Image from "next/image";
import React from "react";
import logo from "@/../public/Logo.png";
import Link from "next/link";
import { LogIn, Search, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="flex px-8 py-3 fixed top-0 backdrop-blur-md items-center z-10 bg-white/20 w-full border-b-2 justify-between">
      <div className="flex gap-16 items-center">
        <Image
          src={logo}
          alt="Logo"
          width={75}
          height={50}
          className="filter brightness-50"
        />
        <div className="flex gap-8">
          <Link href="/men" className="tracking-wider">
            Men
          </Link>
          <Link href="/women">Women</Link>
        </div>
      </div>
      <div className="flex gap-8">
        <Link href="/cart" className="flex gap-3 items-center">
          <ShoppingBag className="h-4 w-4" />
          <span>Cart</span>
        </Link>
        <div className="flex gap-2 items-center">
          <SignedOut>
            <Button
              variant="outline"
              className="border-none shadow-none font-normal text-base gap-3"
            >
              <LogIn />
              <SignInButton />
            </Button>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
