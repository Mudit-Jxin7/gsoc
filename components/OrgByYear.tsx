"use client";
import { useState, useEffect, SetStateAction } from "react";
import { gsoc16 } from "@/utils/2016";
import { gsoc17 } from "@/utils/2017";
import { gsoc18 } from "@/utils/2018";
import { gsoc19 } from "@/utils/2019";
import { gsoc20 } from "@/utils/2020";
import { gsoc21 } from "@/utils/2021";
import { gsoc22 } from "@/utils/2022";
import { gsoc23 } from "@/utils/2023";
import { gsoc24 } from "@/utils/2024";
import Card from "@/components/Card";
import Link from "next/link";
import FilterByYear from "./FilterByYear";
import { categories } from "@/utils/data";

const Organization = ({ year }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenToggle, setIsOpenToggle] = useState(false);
  const [organizations, setOrganizations] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedTechnologies, setSelectedTechnologies] = useState([]);
  const [selectedTopics, setSelectedTopics] = useState([]);
  const [filteredOrganizations, setFilteredOrganizations] =
    useState(organizations);

  useEffect(() => {
    const selectedYear = year;
    let selectedOrganizations: any = [];
    switch (selectedYear) {
      case "2016":
        selectedOrganizations = gsoc16.organizations;
        break;
      case "2017":
        selectedOrganizations = gsoc17.organizations;
        break;
      case "2018":
        selectedOrganizations = gsoc18.organizations;
        break;
      case "2019":
        selectedOrganizations = gsoc19.organizations;
        break;
      case "2020":
        selectedOrganizations = gsoc20.organizations;
        break;
      case "2021":
        selectedOrganizations = gsoc21.organizations;
        break;
      case "2022":
        selectedOrganizations = gsoc22.organizations;
        break;
      case "2023":
        selectedOrganizations = gsoc23.organizations;
        break;
      case "2024":
        selectedOrganizations = gsoc24.organizations;
        break;
      default:
        break;
    }

    setOrganizations(selectedOrganizations);
  }, []);

  useEffect(() => {
    const filteredOrgs = organizations.filter((org) =>
      //@ts-ignore
      org.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    if (selectedCategory) {
      setFilteredOrganizations(
        filteredOrgs.filter(
          //@ts-ignore
          (org) => org.category.toLowerCase() === selectedCategory.toLowerCase()
        )
      );
    } else {
      setFilteredOrganizations(filteredOrgs);
    }
  }, [searchTerm, organizations, selectedCategory]);

  useEffect(() => {
    if (selectedTechnologies.length > 0) {
      setFilteredOrganizations(
        organizations.filter((org) =>
          //@ts-ignore
          selectedTechnologies.every((tech) => org.technologies.includes(tech))
        )
      );
    } else {
      setFilteredOrganizations(organizations);
    }
  }, [selectedTechnologies, organizations]);

  useEffect(() => {
    if (selectedTopics.length > 0) {
      setFilteredOrganizations(
        organizations.filter((org) =>
          //@ts-ignore
          selectedTopics.every((topic) => org.topics.includes(topic))
        )
      );
    } else {
      setFilteredOrganizations(organizations);
    }
  }, [selectedTopics, organizations]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

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

  const handleTechnologyChange = (event: {
    target: { selectedOptions: Iterable<unknown> | ArrayLike<unknown> };
  }) => {
    const selectedOptions = Array.from(
      event.target.selectedOptions,
      //@ts-expect-error
      (option) => option.value
    );
    if (selectedOptions.includes("")) {
      setSelectedTechnologies([]);
    } else {
      //@ts-expect-error
      setSelectedTechnologies(selectedOptions);
    }
  };

  const handleTopicChange = (event: any) => {
    const selectedOptions = Array.from(
      event.target.selectedOptions,
      //@ts-ignore
      (option) => option.value
    );
    if (selectedOptions.includes("")) {
      setSelectedTopics([]);
    } else {
      //@ts-ignore
      setSelectedTopics(selectedOptions);
    }
  };

  const toggleDropdownToggle = () => {
    setIsOpenToggle(!isOpenToggle);
  };

  const sortedTechnologies = Array.from(
    //@ts-ignore
    new Set(organizations.flatMap((org) => org.technologies))
  ).sort();

  const sortedTopics = Array.from(
    //@ts-ignore
    new Set(organizations.flatMap((org) => org.topics))
  ).sort();

  return (
    <>
      <div className="flex justify-between items-center mb-4 p-2 sm:p-6">
        <div className="flex flex-row sm:gap-3">
          <Link
            href="/"
            className="hidden sm:block text-2xl font-bold text-black"
          >
            GSOC Organizations {year}
          </Link>
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
        <div className="relative">
          <button
            onClick={toggleDropdown}
            className="px-3 h-12 w-60 text-black text-xs sm:text-base rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
          >
            Select Technologies
          </button>
          {isOpen && (
            <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
              <select
                multiple
                value={selectedTechnologies}
                onChange={handleTechnologyChange}
                className="w-full h-40 px-3 py-2 text-black text-xs sm:text-base rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
              >
                <option value="">None</option>
                {sortedTechnologies.map((technology) => (
                  <option key={technology} value={technology}>
                    {technology}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>
        <div className="relative">
          <button
            onClick={toggleDropdownToggle}
            className="px-3 h-12 w-60 text-black text-xs sm:text-base rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
          >
            Select Topics
          </button>
          {isOpenToggle && (
            <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
              <select
                multiple
                value={selectedTopics}
                onChange={handleTopicChange}
                className="w-full h-40 px-3 py-2 text-black text-xs sm:text-base rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
              >
                <option value="">None</option>
                {sortedTopics.map((topic) => (
                  <option key={topic} value={topic}>
                    {topic}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 sm:gap-8 sm:px-10">
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
