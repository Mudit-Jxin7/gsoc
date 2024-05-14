"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Links from "./Links";
import { Separator } from "@/components/ui/separator";
import List from "./List";

const SingleOrganization = ({ organization }: any) => {
  return (
    <>
      <div className="w-1/2 h-auto shadow-xl flex flex-col gap-6 justify-center items-center">
        <Image
          src={organization.image_url}
          alt={"img"}
          width={200}
          height={200}
        />
        <Link
          href={`${organization.url}`}
          className="bg-blue-600 p-3 rounded-lg text-white"
        >
          View More
        </Link>
        <Links organization={organization} />
        <Separator />
        <h3 className="font-semibold">Category</h3>
        <button className="bg-blue-600 p-2 rounded-lg text-white">
          {organization.category}
        </button>
        <List organization={organization} />
      </div>
    </>
  );
};

export default SingleOrganization;
