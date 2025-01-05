import AddProductForm from "@/components/admin/add-product";
import React from "react";

type Props = {};

const Page = (props: Props) => {
  return (
    <div className="w-full h-full p-5">
      <h1 className="text-xl font-semibold">Add Product</h1>
      <AddProductForm />
    </div>
  );
};

export default Page;
