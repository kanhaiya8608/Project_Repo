import React from "react";
import projects from "../data/project.js";
import { FaGithub } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";

const ProjectList = () => {
    return (
        <div className="relative container mx-auto">
            <div className="grid gap-8 grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className="max-w-5xl bg-white border border-gray-400 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col"
                    >
                        <img
                            src={`/images/Screenshots/${project.image}.webp`}
                            alt={project.name}
                            className="md:max-h-40 w-full rounded-t-lg object-cover"
                            height={60}
                        />
                        <div className="flex-grow p-5 flex flex-col justify-between">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                {project.name}
                            </h5>
                            <div className="technologies flex flex-wrap gap-4">
                                {project.technologies.map((tech) => (
                                    <div
                                        key={tech.name}
                                        className="technology-box"
                                    >
                                        <img
                                            src={`/images/${tech.image}.webp`}
                                            alt={tech.name}
                                            className="h-10"
                                        />
                                    </div>
                                ))}
                            </div>
                            <p className="my-3 font-normal text-sm text-gray-700 dark:text-gray-400 h-auto">
                                {project.description}
                            </p>
                            <div className="flex justify-between">
                                <div>
                                    <a
                                        href={project.repoLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-700 dark:text-gray-400"
                                    >
                                        <FaGithub size={30} />
                                    </a>
                                </div>
                                <div>
                                    <a
                                        href={project.liveLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-700 dark:text-gray-400"
                                    >
                                        <TbWorldWww size={30} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProjectList;
