import { useState } from "react";

const ExperienceItem=() => {
    const [experienceitems]=useState([
        {
            date: "September 2023 - Februari 2024",
            place:"KBM Al-Mahdiyyin",
            experience: "Front End Web Developer Internship",
            project:"Applied project management methodologies to define project scopes and set milestones. Design UI & UX for an attendance web application using Figma. Implemented UI & UX as an attendance web application."
        },
        {
            date: "Maret 2023 - Februari 2024",
            place:"LINES Yogyakarta",
            experience: "Seasoned Reporter",
            project:"Conducted thorough research to gather reliable and credible sources for news stories. Analyzed complex issues to provide comprehensive and well-rounded news coverage. Created compelling and informative news content that resonated with a diverse audience. Skillfully documented events and conducted interviews to capture the essence of stories.Collaborated with cross-functional teams to ensure timely and accurate news delivery.Adapted to fast-paced environments, meeting tight deadlines without compromising quality."
        },
        {
            date: "Maret 2023 - Juni 2023",
            place:"Universitas Bina Sarana Informatika",
            experience: "Project Manager",
            project:"Applied project management methodologies to define project scopes, set milestones, and manage budgets effectively. Employed organizational skills to oversee project timelines, resource allocation, and risk management, contributing to project success."
        },
        {
            date: "Februari 2023 - Juli 2023",
            place:"Bangkit Academy by Google",
            experience: "Cloud Computing Cohort",
            project:"Understanding fundamental cloud computing. Hands-on lab GCP (Google Cloud Platform) prepare for Certification Associate Cloud Engineer. Involved in a capstone project to develop a food expiration tracking application. "
        },
          
    
    ])
    return (
        <>
            {experienceitems.map((experienceitems, index) => (
                <div key={index} className="experience-item">
                    <div className="grid-2">
                        <p className="experience-date">
                            {experienceitems.date}
                        </p>
                        <div>
                            <h4>{experienceitems.place}</h4>
                            <h4>{experienceitems.experience}</h4>
                            <p>{experienceitems.project}</p>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}

export default ExperienceItem