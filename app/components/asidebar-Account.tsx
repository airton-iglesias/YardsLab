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
                        <Link className="inline-flex hover:bg-gray-300 rounded-md p-2 w-full" href="/comingsoon"> 
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mt-1 mr-2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
                            </svg>
                            Senhas
                        </Link>
                    </li>
                    <li className="mb-2 mx-auto w-56">
                        <Link className="inline-flex hover:bg-gray-300 rounded-md p-2 w-full" href="/comingsoon"> 
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mt-1 mr-2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
                            </svg>

                            Cartões
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
                                <Link href="/comingsoon" className="bg-indigo-600 hover:bg-indigo-700 rounded-md p-2.5 px-8 font-medium">Assinar</Link>
                            </div>
                        </div>
                    </div>:<div className="hidden"></div>
                }

            </aside>
        </>
    )
}