import Organization from "@/components/OrgByYear";
import React from "react";

const page = ({ params }: { params: { year: string } }) => {
  return <Organization year={params.year} />;
};

export default page;
