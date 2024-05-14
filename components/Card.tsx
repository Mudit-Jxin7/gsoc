import React from "react";
import Image from "next/image";
import Link from "next/link";

const Card = ({ organization }: any) => {
  return (
    <Link
      href={`/organization/${organization.name}`}
      className="cursor-pointer hover:scale-105 transition-all flex text-black shadow-2xl flex-col gap-6 w-4/5 mx-auto sm:w-full h-[32rem] rounded-2xl justify-center items-center"
    >
      <Image
        src={organization.image_url}
        alt={"img"}
        width={100}
        height={100}
        className="w-2/5 h-24"
      />

      <p className="font-semibold text-center px-3 mx-auto text-lg">
        {organization.name}
      </p>

      <p className="text-white bg-black inline-block text-center p-2 rounded-md mx-auto">
        {organization.category}
      </p>

      <p className="px-10 mx-auto text-slate-600 text-center">
        {organization.description}
      </p>
      <ul className="flex flex-wrap gap-3 px-10">
        {organization.technologies
          .slice(0, 4)
          .map((tech: string, idx: number) => (
            <li
              key={idx}
              className="text-black border-black border-2 inline-block text-center p-2 rounded-md mx-auto"
            >
              {tech}
            </li>
          ))}

        {organization.technologies.length > 4 && (
          <li className="text-black border-black border-2 inline-block text-center p-2 rounded-md mx-auto">
            + {organization.technologies.length - 4} more
          </li>
        )}
      </ul>
    </Link>
  );
};

export default Card;
