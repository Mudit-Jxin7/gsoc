"use client";
import { useState, useEffect } from "react";
import { allYears } from "@/utils/all";
import Card from "@/components/Card";

export default function Home() {
  const [organizations, setOrganizations] = useState(allYears);
  const [currentPage, setCurrentPage] = useState(1);

  const organizationsToShow = organizations.slice(
    (currentPage - 1) * 12,
    currentPage * 12
  );

  return (
    <div className="bg-[#fdfbfb]">
      <div className="grid grid-cols-4 gap-8 px-10">
        {organizationsToShow.map((organization, idx) => {
          return (
            <div key={idx}>
              <Card organization={organization} />{" "}
            </div>
          );
        })}
      </div>
      <div className="flex text-black mt-8 gap-6 justify-center">
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === Math.ceil(organizations.length / 12)}
        >
          Next
        </button>
      </div>
    </div>
  );
}
