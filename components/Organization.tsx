"use client";
import { useState, useEffect, SetStateAction } from "react";
import { allYears } from "@/utils/all";
import Card from "@/components/Card";
import FilterByYear from "./FilterByYear";
import { categories } from "@/utils/data";

const Organization = () => {
  const [organizations, setOrganizations] = useState(allYears);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [filteredOrganizations, setFilteredOrganizations] =
    useState(organizations);

  useEffect(() => {
    setOrganizations(allYears);
  }, []);

  useEffect(() => {
    const filteredOrgs = organizations.filter((org) =>
      org.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    if (selectedCategory) {
      setFilteredOrganizations(
        filteredOrgs.filter(
          (org) => org.category.toLowerCase() === selectedCategory.toLowerCase()
        )
      );
    } else {
      setFilteredOrganizations(filteredOrgs);
    }
  }, [searchTerm, organizations, selectedCategory]);

  const organizationsToShow = filteredOrganizations.slice(
    (currentPage - 1) * 12,
    currentPage * 12
  );

  const handleSearchChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setSearchTerm(event.target.value);
  };

  const handleCategoryChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <>
      <div className="flex justify-between items-center mb-4 p-2 sm:p-6">
        <div className="flex flex-row sm:gap-3">
          <h1 className="hidden sm:block text-2xl font-bold text-black">
            GSOC Organizations
          </h1>
        </div>
        <input
          type="text"
          placeholder="Search Organizations"
          className="px-3 py-2 w-44 sm:w-96 text-black text-xs sm:text-base rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>

      <div className="flex justify-around flex-row gap-4 w-3/4 mx-auto mb-20">
        <FilterByYear />
        <select
          value={selectedCategory}
          onChange={handleCategoryChange}
          className="px-3 py-2 text-black text-xs sm:text-base rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
        >
          <option value="">All Categories</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 sm:gap-8 sm:px-10">
        {organizationsToShow.map((organization, idx) => (
          <div key={idx}>
            <Card organization={organization} />
          </div>
        ))}
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
