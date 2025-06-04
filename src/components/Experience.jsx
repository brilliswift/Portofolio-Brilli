import React from 'react';
import styled from '@emotion/styled';
import styles from '../styles';
import { experiences } from '../constants/index.js';

// Main Container
const ExperienceContainer = styled.div`
    font-family: 'Poppins', sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
    background: linear-gradient(135deg, #191919 80%, #5badff 100%);
    padding: 6rem 2rem;
    ${styles.projectContainer}; /* Optional: Use your container style */
`;

const ExperienceHeading = styled.h3`
    text-align: center;
    text-transform: uppercase;
    font-weight: 800;
    font-size: 2.5rem;
    background: linear-gradient(to bottom, #ffffff 0%, #5badff 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 2.5rem;
    letter-spacing: 2px;
`;

const ExperienceGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 2rem;
    width: 100%;
    max-width: 900px;
`;

const ExperienceCard = styled.div`
    background: rgba(30, 30, 30, 0.96);
    border-radius: 1.5rem;
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.18);
    backdrop-filter: blur(6px);
    border: 1px solid rgba(90, 173, 255, 0.18);
    padding: 2.2rem 2rem 2rem 2rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    transition: transform 0.2s, box-shadow 0.2s;
    &:hover {
        transform: translateY(-8px) scale(1.03);
        box-shadow: 0 16px 40px 0 rgba(90, 173, 255, 0.20);
    }
`;

const CardHeader = styled.div`
    display: flex;
    width: 100%;
    align-items: flex-start;
    justify-content: space-between;
    margin-bottom: 1rem;
`;

const Company = styled.h3`
    font-size: 1.25rem;
    font-weight: 700;
    color: #fff;
`;

const Duration = styled.span`
    font-size: 1rem;
    color: #91b8e0;
    font-weight: 500;
`;

const Position = styled.div`
  font-size: 1.1rem;
  color: #5badff;
  font-weight: 600;
  margin-bottom: 0.65rem;
`;

const Description = styled.p`
  color: #e0e0e0;
  font-size: 1rem;
  line-height: 1.7;
  margin-bottom: 0.3rem;
`;

const Experience = () => {
    return (
        <ExperienceContainer>
            <ExperienceHeading className={styles.heading3}>Experience</ExperienceHeading>
            <ExperienceGrid>
                {experiences.map((exp) => (
                    <ExperienceCard key={exp.id}>
                        <CardHeader>
                            <Company>{exp.company}</Company>
                            <Duration>{exp.duration}</Duration>
                        </CardHeader>
                        {exp.position && <Position>{exp.position}</Position>}
                        <Description>{exp.description}</Description>
                    </ExperienceCard>
                ))}
            </ExperienceGrid>
        </ExperienceContainer>
    );
};

export default Experience;