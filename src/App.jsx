import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Sitemap from "./components/Navbar.jsx";
import Homepage from "./components/Homepage.jsx";

const App = () => (
    <BrowserRouter>
        <div className="bg-[#161513] min-h-screen">
            <Sitemap />
            <Homepage />

        </div>
    </BrowserRouter>
);

export default App;