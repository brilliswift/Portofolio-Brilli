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
            <Contact/>
            <Routes>
                <Route path="/" component={Homepage} />
                <Route path="/project" component={Project} />
                <Route path="/experience" component={Experience} />
                <Route path="/contact" component={Contact} />
            </Routes>
        </div>
    </BrowserRouter>
);

export default App;