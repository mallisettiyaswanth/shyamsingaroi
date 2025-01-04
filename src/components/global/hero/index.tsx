"use client";
import { Button } from "@/components/ui/button";
import { ArrowDown, ArrowRight } from "lucide-react";
import React from "react";
import { motion } from "motion/react";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="px-2 lg:px-8 flex flex-col items-center min-h-screen">
      <div className="w-full rounded-lg overflow-hidden relative mx-auto shadow-lg">
        <img
          src="https://img.freepik.com/free-photo/beautiful-african-model-with-perfect-curly-hairs-elegant-orange-blouse-silk-pants-sitting-vintage-chair-beige-wall_273443-4089.jpg?semt=ais_hybrid"
          alt="Elegant African model sitting in a vintage chair"
          className="object-cover w-full h-[500px] sm:h-[500px] md:h-[600px]"
        />

        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-end py-8 pr-10 w-full">
          <div className="flex justify-between items-center w-full px-5 flex-col md:flex-row lg:flex-row gap-5">
            <div className="flex-col flex text-white md:text-left text-center lg:text-left gap-3 ">
              <h1 className="text-white text-3xl sm:text-4xl md:text-7xl font-semibold px-5">
                Shyam silks
              </h1>
              <span className="px-5">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Ducimus, nam?
              </span>
            </div>
            <Button
              size="lg"
              className="rounded-full lg:self-end bg-white text-black px-10"
            >
              Explore
              <ArrowRight />
            </Button>
          </div>
        </div>
      </div>
      <div className="my-5 justify-self-end flex items-center flex-col gap-3">
        {/* <span>Scroll down</span> */}
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: 20 }}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration: 1,
          }}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "2rem",
          }}
        >
          <ArrowDown />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
