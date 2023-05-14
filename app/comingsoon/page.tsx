import React from 'react';
import Navbar from "../components/navbar";

export default function Page() {
    return (
        <div className="bg-gradient-to-r from-slate-900 to-slate-700 h-screen">
            <header className="bg-white sticky top-0 z-50">
                <Navbar/>
            </header>
            <div className="relative mt-16 text-center">
                <h1 className="text-7xl text-white font-bold mb-8 animate-pulse">
                    Em breve...
                </h1>
                <p className="text-white font-bold text-xl mb-8">
                    Estamos trabalhando para trazer algumas coisas interessantes!
                </p>
            </div>
            <div className="w-120 h-120 md:justify-center">
                <img className="w-120 h-120 mx-auto" src="/images/teamwork.png"/>
            </div>
        </div>
    );
  }