import React from 'react';
import Navbar from "../components/header";

export default function Page() {
    return (
        <>
            <Navbar/>
            <div className="bg-gradient-to-r from-slate-900 to-slate-700 h-screen pt-32">
                <div className="relative text-center">
                    <h1 className="text-7xl text-white font-bold mb-8 animate-pulse">
                        Em breve...
                    </h1>
                    <p className="text-white font-bold text-xl mb-8">
                        Estamos trabalhando para trazer algumas coisas interessantes!
                    </p>
                </div>
                <div className="w-120 h-120 md:justify-center">
                    <img className="w-120 h-120 mx-auto" src="/images/teamwork.png" loading="lazy"/>
                </div>
            </div>
        </>
    );
  }