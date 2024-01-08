// import React from "react";
// import { CiMobile1 } from "react-icons/ci";
// import { RxDesktop } from "react-icons/rx";
// import { VscTools } from "react-icons/vsc";
// import { TbFileDescription } from "react-icons/tb";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { projects } from "../utils/constant";

const Project = () => {
	const [project, setProject] = useState<Project | null>(null);
	const { projectId } = useParams();

	useEffect(() => {
		(() => {
			const result = projects.find(({ id }) => id === projectId) as Project;
			setProject(result);
		})();
	}, []);

	if (project === undefined) return <h1>No Data</h1>;

	return (
		<div className="space-y-3 lg:space-y-6 mt-2 ">
			<h1 className="text-3xl lg:text-4xl dark:text-slate-100 font-bold">
				{project?.title}
			</h1>
			<div className="flex flex-col lg:flex-row gap-4">
				<img
					src={project?.img}
					className="dark:shadow-slate-50  lg:w-11/12  "
				/>
				<div className="space-y-4 ">
					<div className="p-2 lg:p-5 border dark:bg-[#352F44] dark:border-transparent dark:text-slate-100 border-slate-100 bg-white rounded-lg shadow-sm">
						<h3>Description: </h3>
						<p className="indent-5">{project?.description} </p>
					</div>
					<div className="p-2 lg:p-5 border dark:bg-[#352F44] dark:border-transparent dark:text-slate-100 border-slate-100 bg-white rounded-lg shadow-sm">
						<h3 className=" ">Technologies:</h3>
						<div className="flex flex-1 flex-wrap gap-1">
							{project?.techs.map((tech, index) => (
								<code
									key={index}
									className="border text-sm dark:text-black px-2  rounded-md border-gray-200 bg-slate-50">
									{tech}
								</code>
							))}
						</div>
					</div>
					<div className="p-2 lg:p-5 border dark:bg-[#352F44] dark:border-transparent dark:text-slate-100 border-slate-100 bg-white rounded-lg shadow-sm">
						<h3 className="inline-flex  items-center gap-x-2">
							Web Application
						</h3>
						<div className="flex">
							<span>Repo</span>
							<a className="truncate">: {project?.webRepo} </a>
						</div>
						<div className="flex">
							<span>Link</span>
							<a className="truncate">: {project?.webUrl} </a>
						</div>
					</div>
					{project?.hasApp && (
						<div className="p-2 lg:p-5 border dark:bg-[#352F44] dark:border-transparent dark:text-slate-100 border-slate-100 bg-white rounded-lg shadow-sm">
							<h3 className="inline-flex  items-center gap-x-2">
								Mobile Application
							</h3>
							<div className="flex">
								<span>Repo</span>
								<a className="truncate">: {project?.appRepo} </a>
							</div>
							{project?.appUrl && (
								<div className="flex">
									<span>Link</span>
									<a className="truncate">: {project?.appUrl} </a>
								</div>
							)}
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default Project;
