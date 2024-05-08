"use client";
import { useState, useEffect } from "react";
import { allYears } from "@/utils/all";
import Card from "@/components/Card";

export default function Home() {
  const [organizations, setOrganizations] = useState(allYears);
  return (
    <div className="bg-[#d3cfcf]">
      {/* {organizations.map((organization, idx) => {
        return (
          <div className="text-black" key={idx}>
            <h1>{organization.name}</h1>
          </div>
        );
      })} */}
      <Card />
    </div>
  );
}
