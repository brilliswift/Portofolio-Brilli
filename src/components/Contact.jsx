import React from 'react';
import styled from "@emotion/styled";
import styles from "../styles.js";


const ContactContainer = styled.div`
    padding: 200px;
    background-color: #191919;
    color: #8491a0;
    font-family: Poppins;
    display: flex;
    flex-direction: column; 
    justify-content: left; 
    align-items: normal; 
    padding-top: 5rem;
    padding-bottom: 5rem;
    ${styles.experienceContainer}; 
`;

const ContactHeading = styled.h3`
    text-align: left;
    color : white;
    font-weight: 800;
    margin-bottom: 2rem;
`;

const Contact= () => {
    return (
        <ContactContainer className="contact-container">
            <ContactHeading className={`${styles.heading3}`}>Contact</ContactHeading>
            <p>
                Seasoned Full Stack Developer with over 1 year of hands-on experience in designing
                and implementing robust, scalable, and innovative web solutions. Adept at leveraging a
                comprehensive skill set encompassing front-end and back-end technologies
            </p>
            <div className="font-bold text-sm shadow-gray-800 mt-4">iambrillia@gmail.com</div>
        </ContactContainer>
    )
}

export default Contact;
