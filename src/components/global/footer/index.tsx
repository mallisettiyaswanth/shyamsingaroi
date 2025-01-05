import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full">
      <div className="container px-4 py-12 mx-auto">
        <div className="grid gap-8 lg:grid-cols-4">
          {/* Logo and Newsletter Section */}
          <div className="lg:col-span-1 space-y-4 text-center">
            <Link href="/" className="inline-block">
              <h2 className="text-2xl font-bold">Syam silks</h2>
            </Link>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">
                Get newsletter update for upcoming product and best discount for
                all item
              </p>
              <form className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Your Email"
                  className="max-w-[220px]"
                />
                <Button type="submit" variant="default">
                  Submit
                </Button>
              </form>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="font-semibold mb-3 text-center sm:text-left">
              Product
            </h3>
            <ul className="space-y-2">
              {[
                "T-shirt",
                "Jacket",
                "Shoes",
                "Pants",
                "Sunglasses",
                "Tuxedo",
              ].map((item) => (
                <li key={item} className="text-center sm:text-left">
                  <Link
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories Links */}
          <div>
            <h3 className="font-semibold mb-3 text-center sm:text-left">
              Categories
            </h3>
            <ul className="space-y-2">
              {["Men", "Women", "Kids", "Girl", "New Arrival"].map((item) => (
                <li key={item} className="text-center sm:text-left">
                  <Link
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="font-semibold mb-3 text-center sm:text-left">
              Our Social Media
            </h3>
            <ul className="space-y-2">
              {["Instagram", "Facebook", "Youtube", "Twitter"].map((item) => (
                <li key={item} className="text-center sm:text-left">
                  <Link
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t">
        <div className="container px-4 py-4 mx-auto flex flex-col sm:flex-row justify-between items-center text-sm">
          <p className="text-muted-foreground">© 2025 shyam silks</p>
          <div className="flex gap-4 mt-2 sm:mt-0">
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground"
            >
              Terms & Conditions
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
