import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Homepage from "./components/Homepage";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Experience from "./components/Experience";

const App = () => (
    <BrowserRouter>
        <div className="bg-[#161513] min-h-screen">
            <Navbar/>
            <Homepage/>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/project" element={<Project />} />
                <Route path="/experience" element={<Experience />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </div>
    </BrowserRouter>
);

export default App;