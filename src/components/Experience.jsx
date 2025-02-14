import React from 'react';
import styles from '../styles';
import { experiences } from '../constants/index.js';
import styled from "@emotion/styled";


const ExperienceContainer = styled.div`
    padding: 200px;
    color: #8491a0;
    font-family: Poppins;
    display: flex;
    flex-direction: column; 
    justify-content: center; 
    align-items: center; 
    ${styles.experienceContainer}; 
`;

const ExperienceHeading = styled.h3`
    text-align: center;
    text-transform: uppercase;
    font-weight: 800;
    background: linear-gradient(to bottom, #ffffff 0%,  #5badff 50%, #5badff 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 2rem;
`;

const Experience = () => {
    return (
        <ExperienceContainer className="experience-container">
            <ExperienceHeading className={`${styles.heading3}`}>Experience</ExperienceHeading>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-1 mt-8">
                {experiences.map((experience) => (
                    <div key={experience.id} className="experience-card space-y-2 mt-4">
                        <div className="flex justify-between items-center">
                            <h3 className="text-lg font-bold text-white mb-6 whitespace-pre">{experience.company}</h3>
                            <span className="text-sm font-light text-[#8491a0]">{experience.duration}</span>
                        </div>
                        {/*<p className="text-sm">{experience.position}</p>*/}
                        <p className="text-sm">{experience.description}</p>
                    </div>
                ))}
            </div>
        </ExperienceContainer>
    );
};

export default Experience;