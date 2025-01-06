import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <div className="container grid md:grid-cols-2 gap-6 py-6">
      {/* Shirts Section */}
      <div className="relative overflow-hidden rounded-lg bg-[#8CD4D9] p-6 group">
        <div className="flex h-[400px] items-center">
          <div className="relative z-10 space-y-4 animate-fade-in-up">
            <h2 className="text-5xl font-bold text-[#1B4B72] group-hover:scale-105 transition-transform duration-300">
              SHIRTS
            </h2>
            <p className="text-xl text-[#1B4B72] group-hover:scale-105 transition-transform duration-300">
              STARTS FROM ₹599
            </p>
            <Button className="bg-[#1B4B72] hover:bg-[#153957] transition-transform duration-300 hover:scale-110">
              EXPLORE
            </Button>
          </div>
          <img
            src="https://cdn.shopify.com/s/files/1/1845/0661/files/img1_480x480.png?v=1682411198"
            alt="Men's Shirt"
            className="absolute right-0 top-0 h-full max-w-sm object-contain animate-slide-in-left"
          />
        </div>
      </div>

      {/* Jeans Section */}
      <div className="relative overflow-hidden rounded-lg bg-[#8CD4D9] p-6 group">
        <div className="flex h-[400px] items-center">
          <div className="relative z-10 space-y-4 animate-fade-in-up">
            <h2 className="text-5xl font-bold text-[#1B4B72] group-hover:scale-105 transition-transform duration-300">
              JEANS
            </h2>
            <p className="text-xl text-[#1B4B72] group-hover:scale-105 transition-transform duration-300">
              STARTS FROM ₹799
            </p>
            <Button className="bg-[#1B4B72] hover:bg-[#153957] transition-transform duration-300 hover:scale-110">
              EXPLORE
            </Button>
          </div>
          <img
            src="https://cdn.shopify.com/s/files/1/1845/0661/files/img1_480x480.png?v=1682411198"
            alt="Men's Jeans"
            className="absolute right-0 top-0 h-full max-w-sm object-contain animate-slide-in-right"
          />
        </div>
      </div>
    </div>
  );
}
