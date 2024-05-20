"use client";
import React, { useState } from "react";
import { allYears } from "@/utils/all";
import SingleOrganization from "@/components/SingleOrganization";
import Graph from "@/components/Graph";
import ProjectCard from "@/components/ProjectCard";

const Page = ({ params }: { params: { organization: string } }) => {
  const decodedOrganizationName = decodeURIComponent(params.organization);

  const organization = allYears.find(
    (org) => org.name === decodedOrganizationName
  );

  const [selectedYear, setSelectedYear] = useState<number | null>(null);

  const handleYearSelect = (year: number) => {
    setSelectedYear(year);
  };

  if (!organization) {
    return <div>Organization not found</div>;
  }

  return (
    <div>
      <center className="text-3xl text-blue-700 my-12">
        {organization.name}
      </center>
      <div className="flex flex-row justify-around items-center gap-8 px-20">
        <SingleOrganization organization={organization} />
        <Graph organization={organization} />
      </div>
      <center>
        <h3 className="text-3xl text-blue-700 my-12">Past Projects</h3>
        <div>
          {Object.keys(organization.years).map((year) => (
            <button
              key={year}
              className="bg-blue-600 p-2 rounded-lg text-white m-2"
              onClick={() => handleYearSelect(parseInt(year))}
            >
              {year}
            </button>
          ))}
        </div>
        {selectedYear && (
          <div className="w-3/4">
            <ul className="flex flex-col w-3/4 justify-center gap-4">
              {
                //@ts-ignore
                organization.years[selectedYear.toString()].projects.map(
                  (project: any, index: number) => (
                    <div key={index}>
                      <ProjectCard project={project} />
                    </div>
                  )
                )
              }
            </ul>
          </div>
        )}
      </center>
    </div>
  );
};

export default Page;
