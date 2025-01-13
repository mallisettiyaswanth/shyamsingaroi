import Image from "next/image";
import Link from "next/link";
import { Instagram, ShoppingCart, User, Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/global/new-ui/Navbar";
import logo from "@/../public/Logo.png";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FDFBF7]">
      <Navbar />
      <section className="py-20 bg-gradient-to-b from-purple-50 to-transparent pt-32">
        <div className="container mx-auto px-4">
          <div className="w-full flex items-center justify-center">
            <Image src={logo} alt="Logo" width={300} height={100} />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
            Discover Your Style
          </h1>
          <p className="text-xl text-gray-600 mb-12 text-center">
            Explore the latest trends for men and women
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link
              href="#men"
              className="group relative aspect-[4/3] overflow-hidden rounded-3xl bg-blue-100"
            >
              <Image
                src="/placeholder.svg"
                alt="Men's Fashion"
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-8 left-8 text-white">
                <Badge className="bg-blue-500 hover:bg-blue-600 mb-2">
                  New Arrivals
                </Badge>
                <h2 className="text-4xl font-bold mb-2">Men's Collection</h2>
                <p className="text-lg mb-4">Elevate your style</p>
                <Link href="/men">
                  <Button
                    size="lg"
                    className="bg-white text-blue-600 hover:bg-blue-50"
                  >
                    Shop Now
                  </Button>
                </Link>
              </div>
            </Link>
            <Link
              href="#women"
              className="group relative aspect-[4/3] overflow-hidden rounded-3xl bg-pink-100"
            >
              <Image
                src="/placeholder.svg"
                alt="Women's Fashion"
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-8 left-8 text-white">
                <Badge className="bg-pink-500 hover:bg-pink-600 mb-2">
                  Trending
                </Badge>
                <h2 className="text-4xl font-bold mb-2">Women's Collection</h2>
                <p className="text-lg mb-4">Express yourself</p>
                <Link href="/women">
                  <Button
                    size="lg"
                    className="bg-white text-pink-600 hover:bg-pink-50"
                  >
                    Shop Now
                  </Button>
                </Link>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Men's Section */}
      <section id="men" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Men's Fashion
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12">
            <CategoryCard
              name="Casual"
              itemCount={24}
              bgColor="bg-orange-100"
            />
            <CategoryCard name="Formal" itemCount={18} bgColor="bg-blue-100" />
            <CategoryCard name="Sports" itemCount={32} bgColor="bg-green-100" />
            <CategoryCard
              name="Accessories"
              itemCount={45}
              bgColor="bg-purple-100"
            />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <ProductCard
              name="Classic White Shirt"
              price={89.99}
              rating={4.5}
              sale={true}
              originalPrice={129.99}
            />
            <ProductCard
              name="Denim Jacket"
              price={149.99}
              rating={4.8}
              new={true}
            />
            <ProductCard name="Casual Sneakers" price={79.99} rating={4.2} />
            <ProductCard name="Leather Belt" price={45.99} rating={4.6} />
          </div>
          <div className="text-center mt-12">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              View All Men's Products
            </Button>
          </div>
        </div>
      </section>

      {/* Women's Section */}
      <section id="women" className="py-20 bg-pink-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Women's Fashion
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12">
            <CategoryCard name="Dresses" itemCount={36} bgColor="bg-pink-100" />
            <CategoryCard name="Tops" itemCount={48} bgColor="bg-yellow-100" />
            <CategoryCard
              name="Accessories"
              itemCount={52}
              bgColor="bg-purple-100"
            />
            <CategoryCard name="Footwear" itemCount={29} bgColor="bg-red-100" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <ProductCard
              name="Floral Summer Dress"
              price={79.99}
              rating={4.7}
              new={true}
            />
            <ProductCard name="Elegant Blouse" price={59.99} rating={4.5} />
            <ProductCard
              name="Designer Handbag"
              price={199.99}
              rating={4.9}
              sale={true}
              originalPrice={249.99}
            />
            <ProductCard name="Strappy Sandals" price={69.99} rating={4.4} />
          </div>
          <div className="text-center mt-12">
            <Button
              size="lg"
              className="bg-pink-600 hover:bg-pink-700 text-white"
            >
              View All Women's Products
            </Button>
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">New Arrivals</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <NewArrivalCard
              title="Summer Essentials"
              description="Light and breezy styles for hot days"
              bgColor="bg-yellow-100"
            />
            <NewArrivalCard
              title="Workout Collection"
              description="Performance wear for your active lifestyle"
              bgColor="bg-green-100"
            />
            <NewArrivalCard
              title="Evening Glamour"
              description="Stunning outfits for special occasions"
              bgColor="bg-purple-100"
            />
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Stay in Style</h2>
          <p className="text-xl mb-8">
            Subscribe to our newsletter for the latest trends and exclusive
            offers
          </p>
          <form className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow px-4 py-2 rounded-lg text-gray-900"
              required
            />
            <Button
              type="submit"
              size="lg"
              className="bg-white text-purple-600 hover:bg-gray-100"
            >
              Subscribe
            </Button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">About Us</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="hover:text-purple-600">
                    Our Story
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-purple-600">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-purple-600">
                    Press
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Customer Service</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="hover:text-purple-600">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-purple-600">
                    Shipping & Returns
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-purple-600">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Shop</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="hover:text-purple-600">
                    Men's Collection
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-purple-600">
                    Women's Collection
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-purple-600">
                    New Arrivals
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <Link href="#" className="hover:text-purple-600">
                  <Instagram className="h-6 w-6" />
                </Link>
                <Link href="#" className="hover:text-purple-600">
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </Link>
                <Link href="#" className="hover:text-purple-600">
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-12 text-center text-gray-600">
            <p>&copy; 2023 Siyam Silks. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function CategoryCard({
  name,
  itemCount,
  bgColor,
}: {
  name: string;
  itemCount: number;
  bgColor: string;
}) {
  return (
    <Link
      href={`/category/${name.toLowerCase()}`}
      className={`group relative aspect-square overflow-hidden rounded-2xl ${bgColor}`}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      <div className="absolute bottom-4 left-4 text-white">
        <h3 className="text-xl font-bold mb-1">{name}</h3>
        <p className="text-sm opacity-75">{itemCount} items</p>
      </div>
    </Link>
  );
}

function ProductCard({
  name,
  price,
  rating,
  sale,
  originalPrice,
  new: isNew,
}: {
  name: string;
  price: number;
  rating: number;
  sale?: boolean;
  originalPrice?: number;
  new?: boolean;
}) {
  return (
    <Card className="group overflow-hidden">
      <CardContent className="p-0">
        <div className="relative aspect-square">
          <Image
            src="/placeholder.svg"
            alt={name}
            fill
            className="object-cover transition-transform group-hover:scale-105"
          />
          {sale && (
            <Badge className="absolute top-4 left-4 bg-red-500 hover:bg-red-600">
              Sale
            </Badge>
          )}
          {isNew && (
            <Badge className="absolute top-4 left-4 bg-green-500 hover:bg-green-600">
              New
            </Badge>
          )}
          <Button className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 translate-y-4 transition-all group-hover:opacity-100 group-hover:translate-y-0">
            Quick View
          </Button>
        </div>
        <div className="p-4">
          <h3 className="font-semibold mb-1 group-hover:text-purple-600 transition-colors">
            {name}
          </h3>
          <div className="flex items-center gap-2 mb-2">
            <div className="flex items-center text-yellow-400">
              <Star className="h-4 w-4 fill-current" />
              <span className="text-sm text-gray-600 ml-1">{rating}</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-bold text-lg">${price.toFixed(2)}</span>
            {originalPrice && (
              <span className="text-sm text-gray-400 line-through">
                ${originalPrice.toFixed(2)}
              </span>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function NewArrivalCard({
  title,
  description,
  bgColor,
}: {
  title: string;
  description: string;
  bgColor: string;
}) {
  return (
    <Card className={`group overflow-hidden ${bgColor}`}>
      <CardContent className="p-6">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <Button className="group-hover:bg-black group-hover:text-white transition-colors">
          Explore <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardContent>
    </Card>
  );
}
