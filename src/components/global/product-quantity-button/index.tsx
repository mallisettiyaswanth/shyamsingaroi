"use client";

import { useState } from "react";

const QuantityButton = ({ maxQuantity = 5 }: { maxQuantity?: number }) => {
  const [quantity, setQuantity] = useState(1);
  return (
    <div className="flex gap-2">
      <button className="bg-gray-200 px-2 py-1 rounded-md">-</button>
      <span className="px-2 py-1">{quantity}</span>
      <button className="bg-gray-200 px-2 py-1 rounded-md">+</button>
    </div>
  );
};

export default QuantityButton;
