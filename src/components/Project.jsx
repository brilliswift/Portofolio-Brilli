import React from 'react';
import styled from '@emotion/styled';
import styles from '../styles';
import { projects } from '../constants/index.js';

// Card Container
const ProjectContainer = styled.div`
    font-family: 'Poppins', sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
    background: linear-gradient(135deg, #191919 80%, #ff855f 100%);
    padding: 6rem 2rem;
    ${styles.projectContainer};
`;

const ProjectHeading = styled.h3`
    text-align: center;
    text-transform: uppercase;
    font-weight: 800;
    font-size: 2.5rem;
    background: linear-gradient(to bottom, #ffffff 0%, #ff855f 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 2.5rem;
    letter-spacing: 2px;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  width: 100%;
  max-width: 1200px;
`;

const ProjectCard = styled.div`
  background: rgba(30, 30, 30, 0.95);
  border-radius: 1.5rem;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.25);
  backdrop-filter: blur(6px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.2s, box-shadow 0.2s;
  &:hover {
    transform: translateY(-8px) scale(1.03);
    box-shadow: 0 16px 40px 0 rgba(255, 133, 95, 0.25);
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 1rem;
  margin-bottom: 1.5rem;
  transition: opacity 0.2s;
  &:hover {
    opacity: 0.85;
  }
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 0.5rem;
`;

const ProjectDesc = styled.p`
  color: #e0e0e0;
  font-size: 1rem;
  margin-bottom: 1.2rem;
  text-align: center;
`;

const GithubButton = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #ff855f;
  background: #191919;
  border: 1px solid #ff855f;
  padding: 0.5rem 1.3rem;
  border-radius: 999px;
  font-weight: 600;
  text-decoration: none;
  transition: background 0.2s, color 0.2s, border 0.2s;
  margin-top: auto;
  &:hover {
    background: #ff855f;
    color: #191919;
    border-color: #ff855f;
  }
  svg {
    width: 1.2rem;
    height: 1.2rem;
  }
`;

const Project = () => {
    return (
        <ProjectContainer>
            <ProjectHeading className={styles.heading3}>Projects</ProjectHeading>
            <ProjectsGrid>
                {projects.map((project) => (
                    <ProjectCard key={project.id}>
                        <ProjectImage src={project.image} alt={project.name} />
                        <ProjectTitle>{project.name}</ProjectTitle>
                        <ProjectDesc>{project.description}</ProjectDesc>
                        <GithubButton href={project.link} target="_blank" rel="noopener noreferrer">
                            <svg viewBox="0 0 24 24" fill="none">
                                <path d="M12.026 2c-5.522 0-10 4.477-10 10a9.997 9.997 0 006.838 9.488c.5.09.682-.217.682-.482 0-.238-.009-.868-.014-1.703-2.782.604-3.369-1.343-3.369-1.343-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.004.07 1.532 1.03 1.532 1.03.892 1.527 2.341 1.087 2.91.832.091-.647.35-1.087.636-1.338-2.221-.253-4.555-1.112-4.555-4.951 0-1.093.39-1.987 1.029-2.686-.103-.253-.447-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.338 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.699 1.028 1.593 1.028 2.686 0 3.849-2.337 4.695-4.566 4.944.359.31.678.921.678 1.857 0 1.34-.012 2.42-.012 2.75 0 .267.18.576.688.479A10.001 10.001 0 0022.026 12c0-5.523-4.477-10-10-10z" fill="currentColor"/>
                            </svg>
                            Github
                        </GithubButton>
                    </ProjectCard>
                ))}
            </ProjectsGrid>
        </ProjectContainer>
    );
};

export default Project;