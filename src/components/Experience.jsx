import React from 'react';
import styles from '../styles';
import { experiences } from '../constants/index.js';
import styled from "@emotion/styled";


const ExperienceContainer = styled.div`
    margin-top: 2rem;
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
    color : #5badff;
    text-transform: uppercase;
    font-weight: 800;
    text-shadow: 3px 2px black;
    margin-bottom: 2rem;
`;

const Experience = () => {
    return (
        <ExperienceContainer className="experience-container">
            <ExperienceHeading className={`${styles.heading3}`}>Experience</ExperienceHeading>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-1 mt-8">
                {experiences.map((experience) => (
                    <div key={experience.id} className="experience-card space-y-2 mt-4">
                        <h3 className="text-lg font-bold text-white mb-6 whitespace-pre">{experience.company}                                                                                                                                                                                       <span
                            className="text-sm space-x-4 font-light text-[#8491a0]">{experience.duration}</span>
                        </h3>
                        {/*<p className="text-sm">{experience.position}</p>*/}
                        <p className="text-sm">{experience.description}</p>
                    </div>
                ))}
            </div>
        </ExperienceContainer>
    );
};

export default Experience;