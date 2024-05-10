"use client";
import { useState, useEffect, SetStateAction } from "react";
import { allYears } from "@/utils/all";
import Card from "@/components/Card";

const Organization = () => {
  const [organizations, setOrganizations] = useState(allYears);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredOrganizations, setFilteredOrganizations] =
    useState(organizations);

  useEffect(() => {
    setOrganizations(allYears);
  }, []);

  useEffect(() => {
    const filteredOrgs = organizations.filter((org) =>
      org.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredOrganizations(filteredOrgs);
  }, [searchTerm, organizations]);

  const organizationsToShow = filteredOrganizations.slice(
    (currentPage - 1) * 12,
    currentPage * 12
  );

  const handleSearchChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setSearchTerm(event.target.value);
  };

  return (
    <>
      <div className="flex justify-between items-center mb-4 p-6">
        <h1 className="text-2xl font-bold text-black">GSOC Organizations</h1>
        <input
          type="text"
          placeholder="Search Organizations"
          className="px-3 py-2 text-black rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>

      <div className="grid grid-cols-4 gap-8 px-10">
        {organizationsToShow.map((organization, idx) => {
          return (
            <div key={idx}>
              <Card organization={organization} />
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
          disabled={
            currentPage === Math.ceil(filteredOrganizations.length / 12)
          }
        >
          Next
        </button>
      </div>
    </>
  );
};

export default Organization;
