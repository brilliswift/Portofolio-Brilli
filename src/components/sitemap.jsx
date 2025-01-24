import React from 'react';
import { Link } from "react-router-dom";

function SiteMap() {
    return (
        <div className="flex justify-center items-center text-white font-poppins font-bold w-full px-10 mx-12 text-xl mb-10">
            <Link to="/" className="mr-4"><img className=""/> Brilli </Link>
            <Link to="/" className="mr-4">Home</Link>
            <Link to="/project" className="mr-4">Project</Link>
            <Link to="/experience" className="mr-4">Experience</Link>
            <Link to="/contact">Contact</Link>
        </div>
    );
}

export default SiteMap;