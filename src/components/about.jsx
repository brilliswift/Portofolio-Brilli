import React from 'react';
import styles from '../styles';

const About = () => {
    return (
        <div className="flex flex-col text-center">
            <p className={`${styles.paragraph}`}>
                I am a full-stack developer with 2 years of experience
            </p>
            <p className={`${styles.paragraph}`}>
                specializing in front-end and back-end development.
            </p>
            <p className={`${styles.paragraph}`}>
                My expertise lies in crafting robust and scalable SaaS-based
            </p>
            <p className={`${styles.paragraph}`}>
                architectures on the Google Cloud Platform.
            </p>
        </div>
    );
};

export default About;