import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "@phosphor-icons/react";

const Card = () => {
  return (
    <div className="hover:scale-105 transition-all flex text-black bg-[#d3cfcf] shadow-2xl flex-col gap-6 w-1/5 h-96 rounded-2xl justify-center items-center">
      <Image
        src="https://lh3.googleusercontent.com/5bb1zuSJfNaskJVgD5jO4Mdzamk1udiUH1BXVSzMcM8fB-kIy62kBFS6MtQj1EW445ZkQ1BWlvJL2oXRJNqsYBcmPWpSXng"
        alt={"img"}
        width={100}
        height={100}
      />
      <div className="font-semibold text-xl items-center flex flex-row gap-4">
        <p>3DTK</p>
        <ArrowUpRight size={32} />
      </div>
      <p className="px-10 mx-auto">
        The 3D Toolkit provides algorithms and methods to process 3D point
        clouds
      </p>
      <ul className="flex flex-wrap gap-5 px-10">
        <li className="bg-[#141417] text-white inline-block text-center p-2 rounded-md mx-auto">c</li>
        <li className="bg-[#141417] text-white inline-block text-center p-2 rounded-md mx-auto">c++</li>
        <li className="bg-[#141417] text-white inline-block text-center p-2 rounded-md mx-auto">ros</li>
        <li className="bg-[#141417] text-white inline-block text-center p-2 rounded-md mx-auto">opencv</li>
        <li className="bg-[#141417] text-white inline-block text-center p-2 rounded-md mx-auto">cmake</li>
        <li className="bg-[#141417] text-white inline-block text-center p-2 rounded-md mx-auto">boost</li>
      </ul>
    </div>
  );
};

export default Card;
