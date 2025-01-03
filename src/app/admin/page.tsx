import React from "react";
import { checkRole } from "@/utils/roles";
import { redirect } from "next/navigation";
type Props = {};

const Page = async (props: Props) => {
  const isAdmin = await checkRole("admin");
  if (!isAdmin) {
    redirect("/");
  }
  return <div>{JSON.stringify(isAdmin)}</div>;
};

export default Page;
