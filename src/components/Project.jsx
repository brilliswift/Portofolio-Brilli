import React from 'react';
import styled from '@emotion/styled';
import styles from '../styles';
import { projects } from '../constants/index';

const ProjectContainer = styled.div`
    margin-top: 2rem;
    font-family: Poppins;
  display: flex;
  flex-direction: column; /* Stack heading and grid vertically */
  justify-content: center; /* Center content vertically */
  align-items: center; /* Center content horizontally */
    

  ${styles.projectContainer}; /* Apply styles from your global stylesheet */
`;

const ProjectHeading = styled.h3`
  text-align: center;
    color : #ff855f;
    text-transform: uppercase;
    font-weight: 800;
`;

const Project = () => {
    return (
        <ProjectContainer className="project-container">
            <ProjectHeading className={`${styles.heading3}`}>Projects</ProjectHeading>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-8">
                {projects.map((project) => (
                    <div key={project.id} className="project-card">
                        <img src={project.image} alt={project.name} className="rounded-lg" />
                        <h3 className="text-lg font-bold mt-2 text-white">{project.name}</h3>
                        <p className="text-sm mt-1 text-white">{project.description}</p>
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline mt-2">Visit</a>
                    </div>
                ))}
            </div>
        </ProjectContainer>
    );
};

export default Project;