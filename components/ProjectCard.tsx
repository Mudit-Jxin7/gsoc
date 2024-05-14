import Link from "next/link";
import React from "react";

const ProjectCard = ({ project }: any) => {
  return (
    <div className="w-full my-7 h-auto border-2 border-slate-200 p-4 text-start gap-2 flex flex-col">
      <h3 className="font-semibold">{project.title}</h3>
      <p className="text-xs text-slate-500">{project.student_name}</p>
      <p className="text-sm">{project.short_description}</p>
      <div className="flex flex-row gap-4">
        <Link className="border-2 border-blue-400 w-20 p-2 text-center rounded-lg" href={`${project.code_url}`}>Code</Link>
        <Link className="border-2 border-blue-400 w-20 p-2 text-center rounded-lg" href={`${project.project_url}`}>Project</Link>
      </div>
    </div>
  );
};

export default ProjectCard;
