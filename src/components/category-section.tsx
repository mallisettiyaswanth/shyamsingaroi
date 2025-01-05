import Link from "next/link";
import Image from "next/image";
import { Flag } from "lucide-react";

interface CategoryCard {
  title: string;
  image: string;
  href: string;
}

export default function CategorySection() {
  const categories: CategoryCard[] = [
    {
      title: "Men",
      image: "/men.png",
      href: "/category/men",
    },
    {
      title: "Women",
      image: "/women.png",
      href: "/category/women",
    },
    {
      title: "Boys",
      image: "/boy.png",
      href: "/category/boys",
    },
    {
      title: "Girls",
      image: "/girl.png",
      href: "/category/girls",
    },
  ];

  return (
    <section className="w-full py-12 px-10 flex justify-center">
      <div className="container ">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <Link
              key={category.title}
              href={category.href}
              className="group relative block overflow-hidden rounded-lg  transition-transform hover:scale-105"
            >
              {/* Decorative Bunting */}
              <div className="absolute left-0 right-0 top-0 z-10 flex justify-center gap-2 p-2">
                {[...Array(5)].map((_, i) => (
                  <Flag
                    key={i}
                    className="h-4 w-4 text-gray-500 hidden transform -rotate-45"
                    fill="currentColor"
                  />
                ))}
              </div>

              {/* Yellow Background */}
              <div className="absolute inset-0 bg-[#cca23c]" />

              {/* Image */}
              <div className="relative aspect-[3/4] w-full">
                <Image
                  src={category.image}
                  alt={`${category.title} category`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
              </div>

              {/* Category Title */}
              <div className="absolute bottom-0 left-0 right-0 bg-[#cccccc] p-3 text-center">
                <h2 className="text-xl font-bold text-black">
                  {category.title}
                </h2>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
