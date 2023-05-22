"use client";
import React, { useState } from "react";

export default function asidebaraccount(){

    const [premiumPopup, setPremiumPopup] = useState(true); 



    return(
        <>
            <aside className="fixed bg-white md:shrink-0 h-full w-full max-w-[18rem]">
                <a href="/">
                    <div className="flex mx-auto justify-center items-center gap-3 p-4 text-2xl font-bold">
                        <img src="/icons/favicon.png" alt="brand" className="h-12 w-12" />
                        <h1>YardsLab</h1>
                    </div>
                </a>
                <div className="border-t border-gray-300 pt-2 mt-3 mx-auto w-56"></div>
                <ul className="mb-2 items-center gap-4 p-4 pt-0 text-lg font-semibold">
                    <li className="mb-2 mx-auto w-56">
                        <a className="inline-flex hover:bg-gray-300 rounded-md p-2 w-full" href="/dashboard"> 
                            <svg className="w-6 h-6 mt-0.5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                <path strokeLinecap="round" stroke-Linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                            </svg>
                            Início
                        </a>
                    </li>
                    <div className="border-t border-gray-300 pt-2 mx-auto w-56"></div>
                    <li className="mb-2 mx-auto w-56">
                        <a className="inline-flex hover:bg-gray-300 rounded-md p-2 w-full" href="#"> 
                            <svg className="w-6 h-6 mt-0.5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                <path fill-rule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clip-rule="evenodd" />
                            </svg>
                            Conta
                        </a>
                    </li>
                    <li className="mb-2 mx-auto w-56">
                        <a className="inline-flex hover:bg-gray-300 rounded-md p-2 w-full" href="#"> 
                            <svg className="w-6 h-6 mt-0.5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                <path fill-rule="evenodd" d="M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 00-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 00-2.282.819l-.922 1.597a1.875 1.875 0 00.432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 000 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 00-.432 2.385l.922 1.597a1.875 1.875 0 002.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 002.28-.819l.923-1.597a1.875 1.875 0 00-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 000-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 00-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 00-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 00-1.85-1.567h-1.843zM12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z" clip-rule="evenodd" />
                            </svg>
                            Configurações
                        </a>
                    </li>                    
                    <li className="mb-2 mx-auto  w-56">
                        <a className="inline-flex hover:bg-gray-300 rounded-md p-2 w-full" href="#"> 
                            <svg className="w-6 h-6 mt-0.5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M5.636 5.636a9 9 0 1012.728 0M12 3v9" />
                            </svg>
                            Sair
                        </a>
                    </li>
                </ul>

                {premiumPopup ?                 
                    
                    <div className="absolute inset-x-0 bottom-0 mb-24 w-64 mx-auto">
                        <div className="absolute font-bold right-0 mt-2 mr-2">
                            <button onClick={()=> setPremiumPopup(false)} className="">
                                <svg className="w-6 h-6 hover:bg-slate-600 rounded-full" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
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
                                <a href="#" className="bg-indigo-600 hover:bg-indigo-700 rounded-md p-2.5 px-8 font-medium">Assinar</a>
                            </div>
                        </div>
                    </div>:<div className="hidden"></div>
                }

            </aside>
        </>
    )
}