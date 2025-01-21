import { useState } from 'react'
import Hero from "./components/hero";
import Sitemap from "./components/sitemap.jsx";

const App = () => { 
return (
    <>
        <div className="bg-[#161513] min-h-screen">
            <Sitemap/>
            <h1 className="text-3xl text-white font-bold">
                Profil
            </h1>
            <Hero/>
        </div>
        </>
        )
        }

        export default App
