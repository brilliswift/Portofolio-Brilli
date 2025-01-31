import React from 'react';
import styles from '../styles';
import { projects } from '../constants/index.js';

const Project = () => {
    return (
        <div className="project-container">
            <h3 className={`${styles.heading3}`}>Project</h3>
            <div className="project-grid flex flex-wrap sm:justify-start w-full">
                {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} /> // Pass project data as prop
                ))}
            </div>
        </div>
    );
};

const ProjectCard = ({ project }) => (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
        <div className="project-card">
            <img
                src={project.image}
                alt={project.name}
                className="w-full h-full object-cover rounded-lg"
            />
            <h3 className="text-lg font-bold">{project.name}</h3>
            <p className="text-sm">{project.description}</p>
            <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="text-blue-500 hover:underline"
            >
                Visit
            </a>
        </div>
    </div>
);

export default Project;