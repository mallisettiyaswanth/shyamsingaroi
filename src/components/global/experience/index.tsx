import { Button } from "@/components/ui/button";
import React from "react";

type Props = {};

const Experience = (props: Props) => {
  return (
    <div className="p-5 w-full pt-16 flex flex-col gap-5">
      {/* Video Embed */}
      <div className="relative w-full h-[400px] sm:h-[300px] md:h-[400px] rounded-lg overflow-hidden">
        <video
          src="/video.mp4"
          title="Wedding Dresses Video"
          className="absolute top-0 left-0 w-full h-full object-cover"
          muted
          autoPlay
          loop
          controls
        ></video>
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
      </div>

      {/* Content Section */}
      <div className="w-full flex flex-col gap-3 text-center px-5">
        <h1 className="text-center w-full text-4xl sm:text-5xl font-extrabold text-gray-900">
          Embrace Elegance with Every Step
        </h1>
        <p className="text-gray-700 text-base sm:text-lg md:text-xl">
          Explore our exquisite collection of wedding dresses, tailored to make
          your special day truly unforgettable. Discover timeless elegance
          today.
        </p>
      </div>

      {/* Shop Button */}
      <Button
        size="lg"
        className="rounded-full w-fit self-center px-10 bg-gradient-to-r from-pink-500 to-red-500 text-white shadow-lg hover:opacity-90 transition"
      >
        Shop the Collection
      </Button>
    </div>
  );
};

export default Experience;
