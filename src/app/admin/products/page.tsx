import { DataTable } from "@/components/global/data-table/data-table";
import { columns } from "@/components/global/data-table/columns";


export default async function Page() {
 

  return (
    <section className="flex flex-col flex-grow p-5 overflow-hidden gap-5 w-full h-full">
      <h1 className="text-2xl">Product list</h1>
      <div className="max-w-6xl">
        {/* <DataTable columns={columns} data={data ?? []} /> */}
      </div>
    </section>
  );
}
