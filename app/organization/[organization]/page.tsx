import React from "react";
import { allYears } from "@/utils/all";
import SingleOrganization from "@/components/SingleOrganization";
import Graph from "@/components/Graph";

const Page = ({ params }: { params: { organization: string } }) => {
  const decodedOrganizationName = decodeURIComponent(params.organization);

  const organization = allYears.find(
    (org) => org.name === decodedOrganizationName
  );

  if (!organization) {
    return <div>Organization not found</div>;
  }

  return (
    <div>
      <center className="text-3xl text-blue-700 my-12">
        {organization.name}
      </center>
      <div className="flex flex-row justify-around items-center gap-8 px-20">
        <SingleOrganization organization={organization}/>
        <Graph organization={organization}/>
      </div>
    </div>
  );
};

export default Page;
