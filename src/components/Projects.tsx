"use client";
import { useState } from "react";
import Image from "next/image";
import { categories, Project } from "@/data/projects";
import VideoComponent from "./VideoComponent";
import dynamic from "next/dynamic";

const SanitizedHtml = dynamic(() => import("../components/SanitizedHtml"), {
	ssr: false,
});

export default function PortfolioPage() {
	const [selectedCategory, setSelectedCategory] = useState<string>("all");
	const [selectedProject, setSelectedProject] = useState<Project | null>(
		null
	);

	const filteredProjects =
		selectedCategory === "all"
			? categories.flatMap((c) => c.projects)
			: categories.find((c) => c.id === selectedCategory)?.projects ?? [];

	return (
		<div className="container mx-auto px-4 py-16 relative" id={"projects"}>
			{/* Heading */}
			<h1 className="text-4xl md:text-5xl font-extrabold text-center mb-12">
				<span className="text-white">Projects</span>
			</h1>

			{/* Category Filter */}
			<div className="flex flex-wrap justify-center gap-3 mb-14">
				{[{ id: "all", name: "All" }, ...categories].map((category) => (
					<button
						key={category.id}
						className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 shadow-sm ${
							selectedCategory === category.id
								? "bg-orange-600 text-white shadow-lg"
								: "bg-gray-100 text-gray-800 hover:bg-gray-200"
						}`}
						onClick={() => setSelectedCategory(category.id)}>
						{category.name}
					</button>
				))}
			</div>

			{/* Projects Grid */}
			<div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-8">
				{filteredProjects.map((project) => (
					<div
						key={project.id}
						className="relative group rounded-2xl overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
						onClick={() => setSelectedProject(project)}>
						{project.images && (
							<Image
								src={project.images[0]}
								alt={project.title}
								width={400}
								height={250}
								className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-110"
							/>
						)}
						{project.videos && (
							<VideoComponent
								{...{
									key: "project-video",
									videoSrc: project.videos[0],
									height: 180,
								}}
							/>
						)}
						<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
						<div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
							<h2 className="font-semibold text-lg">
								{project.title}
							</h2>
							<p className="text-sm line-clamp-2">
								<SanitizedHtml
									{...{
										html:
											project.description ||
											"<p>View project details</p>",
									}}
								/>
							</p>
						</div>
					</div>
				))}
			</div>

			{/* Modal for Project Details */}
			{selectedProject && (
				<div
					className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4 py-8"
					onClick={() => setSelectedProject(null)}>
					<div
						className="relative bg-white/95 backdrop-blur-md p-6 rounded-2xl  w-full h-full overflow-y-auto shadow-2xl"
						onClick={(e) => e.stopPropagation()}>
						<button
							className="absolute top-3 right-3 w-9 h-9 flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300 text-gray-700 text-xl font-bold transition"
							onClick={() => setSelectedProject(null)}>
							X
						</button>

						{/* Title + Description */}
						<h2 className="text-2xl md:text-3xl font-bold mb-3 text-gray-900">
							{selectedProject.title}
						</h2>
						{selectedProject.description && (
							<p className="text-gray-700 mb-6 leading-relaxed">
								<SanitizedHtml
									{...{
										html:
											selectedProject.description ||
											"<p></p>",
									}}
								/>
							</p>
						)}

						{/* Images Grid */}
						<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
							{selectedProject.images?.map(
								(img: string, idx: number) => (
									<div
										key={idx}
										className="overflow-hidden rounded-lg">
										<Image
											src={img}
											alt={`${selectedProject.title} ${
												idx + 1
											}`}
											width={400}
											height={600}
											className="w-full h-120 object-cover transition-transform duration-500 hover:scale-110"
										/>
									</div>
								)
							)}
						</div>

						{/* Videos Grid */}
						<div className="grid grid-cols1 md:grid-cols-3 gap-4">
							{selectedProject.videos?.map(
								(img: string, idx: number) => (
									<div
										key={idx}
										className="overflow-hidden rounded-lg">
										<VideoComponent
											key={"video-grid"}
											videoSrc={img}
											className="w-full h-120 object-cover transition-transform duration-500 hover:scale-110"
											height={480}
										/>
									</div>
								)
							)}
						</div>
					</div>
				</div>
			)}
		</div>
	);
}
