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
  flex-direction: column; /* Stack heading and grid vertically */
  justify-content: center; /* Center content vertically */
  align-items: center; /* Center content horizontally */

    

  ${styles.experienceContainer}; /* Apply styles from your global stylesheet */
`;

const ExperienceHeading = styled.h3`
  text-align: center;
    color : #5badff;
    text-transform: uppercase;
    font-weight: 800;
`;

const Experience = () => {
    return (
        <ExperienceContainer className="experience-container">
            <ExperienceHeading className={`${styles.heading3}`}>Experience</ExperienceHeading>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-1 mt-8">
                {experiences.map((experience) => (
                    <div key={experience.id} className="experience-card">
                        <h3 className="text-lg font-bold text-white">{experience.company}</h3>
                        <p className="text-sm">{experience.position}</p>
                        <p className="text-sm">{experience.duration}</p>
                        <p className="text-sm">{experience.description}</p>
                    </div>
                ))}
            </div>
        </ExperienceContainer>
    );
};

export default Experience;