import React from 'react';
import styles from '../styles';
import { experiences } from '../constants/index.js';

const Experience = () => {
    return (
        <div className="experience-container">
            <h3 className={`${styles.heading3}`}>Pengalaman</h3>
            <div className="grid grid-cols-1 gap-4">
                {experiences.map((experience) => (
                    <div key={experience.id} className="experience-card">
                        <h3 className="text-lg font-bold">{experience.company}</h3>
                        <p className="text-sm">{experience.position}</p>
                        <p className="text-sm">{experience.duration}</p>
                        <p className="text-sm">{experience.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Experience;