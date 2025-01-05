"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

interface Category {
  title: string;
  items: string[];
}

interface MegaMenuProps {
  isOpen: boolean;
  type: "women" | "men" | "kids";
}

const categories = {
  women: [
    {
      title: "Sarees",
      items: ["Pattu Sarees", "General Sarees", "Fancy Sarees"],
    },
    {
      title: "Ethnic Wear",
      items: [
        "Blouses",
        "Kurtas & Tunics",
        "Lehengas",
        "Palazzo Sets",
        "Dress Materials",
        "Party Wear Kurtas",
        "Leggings & Tracks",
      ],
    },
    {
      title: "Western Wear",
      items: [
        "Gowns & Dresses",
        "Skirts & Jeans",
        "Short Tops",
        "Jumpsuits",
        "Party wear",
      ],
    },
  ],
  men: [
    {
      title: "Traditional",
      items: ["Kurtas", "Sherwanis", "Dhotis"],
    },
    {
      title: "Casual Wear",
      items: ["Shirts", "T-Shirts", "Jeans", "Trousers"],
    },
    {
      title: "Formal Wear",
      items: ["Suits", "Blazers", "Formal Shirts", "Formal Pants"],
    },
  ],
  kids: [
    {
      title: "Girls",
      items: ["Dresses", "Tops", "Ethnic Wear"],
    },
    {
      title: "Boys",
      items: ["T-Shirts", "Shirts", "Pants"],
    },
    {
      title: "Accessories",
      items: ["Shoes", "Bags", "Hair Accessories"],
    },
  ],
};

export function MegaMenu({ isOpen, type }: MegaMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="absolute left-0 right-0 bg-white shadow-lg border-t z-50"
        >
          <div className="max-w-7xl mx-auto py-8 px-4">
            <div className="grid grid-cols-3 gap-8">
              {categories[type].map((category) => (
                <div key={category.title} className="space-y-4">
                  <h3 className="font-bold text-lg border-b pb-2">
                    {category.title}
                  </h3>
                  <ul className="space-y-2">
                    {category.items.map((item) => (
                      <li key={item}>
                        <Link
                          href={`/category/${type}/${item
                            .toLowerCase()
                            .replace(/ /g, "-")}`}
                          className="text-gray-600 hover:text-gray-900 transition-colors"
                        >
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
