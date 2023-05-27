"use client";
import Link from "next/link";
import React, { useState } from "react";

export default function asidebaraccount(){

    const [premiumPopup, setPremiumPopup] = useState(true); 



    return(
        <>
            <aside className="fixed bg-white md:shrink-0 h-full w-full max-w-[18rem] hidden lg:block">
                <Link href="/">
                    <div className="flex mx-auto justify-center items-center gap-3 p-4 text-2xl font-bold">
                        <img src="/icons/favicon.png" alt="brand" className="h-12 w-12" />
                        <h1>YardsLab</h1>
                    </div>
                </Link>
                <div className="border-t border-gray-300 pt-2 mt-3 mx-auto w-56"></div>
                <ul className="mb-2 items-center gap-4 p-4 pt-0 text-lg font-semibold">
                    <li className="mb-2 mx-auto w-56">
                        <Link className="inline-flex hover:bg-gray-300 rounded-md p-2 w-full" href="/dashboard"> 
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 mt-0.5 mr-2">
                            <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                            <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                        </svg>
                            Início
                        </Link>
                    </li>
                    <div className="border-t border-gray-300 pt-2 mx-auto w-56"></div>
                    <li className="mb-2 mx-auto w-56">
                        <Link className="inline-flex hover:bg-gray-300 rounded-md p-2 w-full" href="#"> 
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 mt-0.5 mr-2">
                                <path d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                            </svg>
                            Conta
                        </Link>
                    </li>
                    <li className="mb-2 mx-auto w-56">
                        <Link className="inline-flex hover:bg-gray-300 rounded-md p-2 w-full" href="#"> 
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mt-1 mr-2">
                                <path fillRule="evenodd" d="M7.84 1.804A1 1 0 018.82 1h2.36a1 1 0 01.98.804l.331 1.652a6.993 6.993 0 011.929 1.115l1.598-.54a1 1 0 011.186.447l1.18 2.044a1 1 0 01-.205 1.251l-1.267 1.113a7.047 7.047 0 010 2.228l1.267 1.113a1 1 0 01.206 1.25l-1.18 2.045a1 1 0 01-1.187.447l-1.598-.54a6.993 6.993 0 01-1.929 1.115l-.33 1.652a1 1 0 01-.98.804H8.82a1 1 0 01-.98-.804l-.331-1.652a6.993 6.993 0 01-1.929-1.115l-1.598.54a1 1 0 01-1.186-.447l-1.18-2.044a1 1 0 01.205-1.251l1.267-1.114a7.05 7.05 0 010-2.227L1.821 7.773a1 1 0 01-.206-1.25l1.18-2.045a1 1 0 011.187-.447l1.598.54A6.993 6.993 0 017.51 3.456l.33-1.652zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"/>
                            </svg>
                            Configurações
                        </Link>
                    </li>                    
                    <li className="mb-2 mx-auto  w-56">
                        <Link className="inline-flex hover:bg-gray-300 rounded-md p-2 w-full" href="#"> 
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mt-1 mr-2">
                                <path fillRule="evenodd" d="M10 2a.75.75 0 01.75.75v7.5a.75.75 0 01-1.5 0v-7.5A.75.75 0 0110 2zM5.404 4.343a.75.75 0 010 1.06 6.5 6.5 0 109.192 0 .75.75 0 111.06-1.06 8 8 0 11-11.313 0 .75.75 0 011.06 0z" clipRule="evenodd" />
                            </svg>
                            Sair
                        </Link>
                    </li>
                </ul>

                {premiumPopup ?                 
                    
                    <div className="absolute inset-x-0 bottom-0 mb-24 w-64 mx-auto">
                        <div className="absolute font-bold right-0 mt-2 mr-2">
                            <button onClick={()=> setPremiumPopup(false)} className="">
                                <svg className="w-6 h-6 hover:bg-slate-600 rounded-full" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white">
                                    <path d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </button>
                        </div>
                        <div className=" pt-6 pb-6 items-center text-center text-white rounded-2xl w-62  bg-slate-800">
                            <h3 className="mx-auto font-bold text-xl">Seja Premium!</h3>
                            <p className="font-normal opacity-80 p-2">
                                Atualizando para o Premium, você garante acesso a mais recursos e estará ajudando a manter os serviços online, além de me motivar muito!
                            </p>
                            <span className="font-semibold mt-4 underline">Planos a partir de R$1.</span>
                            <div className="mt-4 justify-center flex gap-3">
                                <Link href="#" className="bg-indigo-600 hover:bg-indigo-700 rounded-md p-2.5 px-8 font-medium">Assinar</Link>
                            </div>
                        </div>
                    </div>:<div className="hidden"></div>
                }

            </aside>
        </>
    )
}