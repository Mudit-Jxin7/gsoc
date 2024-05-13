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

const Organization = ({ year }: any) => {
  const [organizations, setOrganizations] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredOrganizations, setFilteredOrganizations] =
    useState(organizations);

  useEffect(() => {
    const selectedYear = year;
    let selectedOrganizations: any = [];
    switch (selectedYear) {
      case '2016':
        selectedOrganizations = gsoc16.organizations;
        break;
      case '2017':
        selectedOrganizations = gsoc17.organizations;
        break;
      case '2018':
        selectedOrganizations = gsoc18.organizations;
        break;
      case '2019':
        selectedOrganizations = gsoc19.organizations;
        break;
      case '2020':
        selectedOrganizations = gsoc20.organizations;
        break;
      case '2021':
        selectedOrganizations = gsoc21.organizations;
        break;
      case '2022':
        selectedOrganizations = gsoc22.organizations;
        break;
      case '2023':
        selectedOrganizations = gsoc23.organizations;
        break;
      case '2024':
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
      <div className="flex justify-between items-center mb-4 p-2 sm:p-6">
        <div className="flex flex-row sm:gap-3">
          <Link href='/' className="hidden sm:block text-2xl font-bold text-black">
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
