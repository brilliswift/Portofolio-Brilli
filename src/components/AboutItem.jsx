import React, { useState } from 'react'

const AboutItem=() => {
    const [aboutitems]=useState([
        {
            title: "Cloud Computing", desc: "Experienced in deploying and managing applications on cloud platforms, with a focus on Google Cloud Platform (GCP). Proficient in utilizing cloud services for scalability, reliability, and cost-efficiency.", 
        },
        {
            title: "Web Development",
            desc: "Skilled in front-end and back-end web development technologies, including HTML, CSS, JavaScript, and Basic React. Experienced in creating responsive and user-friendly web applications. "
        },
        {
            title: "Machine Learning",
            desc: "Familiar with the fundamentals of machine learning, including data preprocessing, model training, and evaluation. Currently exploring phyton programming."
        },
    ])
    return (
        <>
            {aboutitems.map((aboutitems, index) => (
                <div key={index} className="about-item">
                        <h4>{aboutitems.title}</h4>
                        <p>{aboutitems.desc}</p>
                </div>
            ))}
        </>
    );
};

export default AboutItem
