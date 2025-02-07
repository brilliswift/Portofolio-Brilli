import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Sitemap from "./components/Navbar";
import Homepage from "./components/Homepage";
import Contact from "./components/Contact";

const App = () => (
    <BrowserRouter>
        <div className="bg-[#161513] min-h-screen">
            <Sitemap />
            <Homepage />
            <Contact/>
        </div>
    </BrowserRouter>
);

export default App;