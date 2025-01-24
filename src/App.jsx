import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Hero from "./components/hero";
import Sitemap from "./components/sitemap";
import About from "./components/about";

const App = () => (
    <BrowserRouter>
        <div className="bg-[#161513] min-h-screen">
            <Sitemap />
            <h1 className="text-3xl text-white font-bold">Profil</h1>
            <Hero />
            <About />
        </div>
    </BrowserRouter>
);

export default App;