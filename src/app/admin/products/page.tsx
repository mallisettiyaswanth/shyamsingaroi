"use client";

import { DataTable } from "@/components/global/data-table/data-table";
import { columns } from "@/components/global/data-table/columns";
import { useQuery } from "@tanstack/react-query";
import getProducts from "@/actions/supabase/product/get-products";

export default function Page() {
  const { data } = useQuery({
    queryKey: ["products"],
    queryFn: () => getProducts(),
  });
  console.log(data);
  return (  
    <section className="flex flex-col flex-grow p-5 overflow-hidden gap-5 w-full h-full">
      <h1 className="text-2xl">Product list</h1>
      <div className="max-w-6xl">
        {/* <DataTable columns={columns} data={products ?? []} /> */}
      </div>
    </section>
  );
}
