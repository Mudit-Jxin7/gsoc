import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "@phosphor-icons/react";

const Card = ({ organization }: any) => {
  return (
    <div className="hover:scale-105 transition-all flex text-black bg-[#fdfbfb] shadow-2xl flex-col gap-6 w-full h-96 rounded-2xl justify-center items-center">
      <Image
        src={organization.image_url}
        alt={"img"}
        width={100}
        height={100}
      />
      <div className="font-semibold px-6 mx-auto text-lg items-center flex flex-row gap-2">
        <p>{organization.name}</p>
        <ArrowUpRight size={32} />
      </div>
      <p className="px-10 mx-auto">{organization.description}</p>
      <ul className="flex flex-wrap gap-5 px-10">
        <li className="bg-[#141417] text-white inline-block text-center p-2 rounded-md mx-auto">
          c
        </li>
        <li className="bg-[#141417] text-white inline-block text-center p-2 rounded-md mx-auto">
          c++
        </li>
        <li className="bg-[#141417] text-white inline-block text-center p-2 rounded-md mx-auto">
          ros
        </li>
        <li className="bg-[#141417] text-white inline-block text-center p-2 rounded-md mx-auto">
          opencv
        </li>
        <li className="bg-[#141417] text-white inline-block text-center p-2 rounded-md mx-auto">
          cmake
        </li>
        <li className="bg-[#141417] text-white inline-block text-center p-2 rounded-md mx-auto">
          boost
        </li>
      </ul>
    </div>
  );
};

export default Card;
