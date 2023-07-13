import React from 'react';


export default function Page() {
    return (
        <>
            <div className="bg-gradient-to-r from-slate-900 to-slate-700 h-screen pt-12">
                <div className="relative text-center">
                    <h1 className="text-6xl text-white font-bold mb-8 animate-pulse">
                        Em breve...
                    </h1>
                    <p className="text-white font-bold text-xl mb-8">
                        Estamos trabalhando para trazer algumas coisas interessantes!
                    </p>
                </div>
                <div className="w-120 h-120 md:justify-center">
                    <img className="w-96 h-96 mx-auto" src="/images/teamwork.png" loading="lazy"/>
                </div>
            </div>
        </>
    );
  }