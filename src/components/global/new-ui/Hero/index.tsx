import React from "react";
import HeroImage from "@/../public/heroimage.jpg";
import Image from "next/image";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="min-h-full flex">
      <Image src={HeroImage} alt="Hero Image" layout="fill" objectFit="cover" />
    </div>
  );
};

export default Hero;
