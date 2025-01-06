import Home from "@/components/global/mens";
import ResponsiveNavbar from "@/components/global/navbar";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <>
      <ResponsiveNavbar />
      <div className="min-h-screen px-16">
        <Home />
      </div>
    </>
  );
};

export default page;
