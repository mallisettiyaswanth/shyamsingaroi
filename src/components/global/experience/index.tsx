import { Button } from "@/components/ui/button";
import React from "react";

type Props = {};

const Experience = (props: Props) => {
  return (
    <div className="p-5 w-full pt-16 flex flex-col gap-5">
      <img
        src="https://www.shutterstock.com/image-photo/fashion-woman-yellow-silk-dress-600nw-2364067289.jpg"
        alt=""
        className="object-cover w-full h-[300px] sm:h-[300px] md:h-[400px] rounded-lg"
      />
      <div className="w-full flex flex-col gap-3 text-center">
        <h1 className="text-center w-full text-5xl font-semibold">
          Wedding Dresses
        </h1>
        <span className="text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
          ducimus?
        </span>
      </div>
      <Button size="lg" className="rounded-full w-fit self-center px-10">
        Shop now
      </Button>
    </div>
  );
};

export default Experience;
