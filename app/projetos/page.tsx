import React from 'react';
import Header from "../components/header";
import Footer from "../components/footer";

export const metadata = {
    title: 'YardsLab - Projetos',
    icons: {
      icon: '/icons/favicon.png',
      shortcut: '/icons/favicon.png',
      apple: '/icons/favicon.png',
      other: {
        rel: 'apple-touch-icon-precomposed',
        url: '/icons/favicon.png',
      },
    },
  };

export default function Page() {
    return (
        <>
            <Header/>

            <div className="bg-gradient-to-r from-slate-900 to-slate-700 h-screen">
                <section className="py-32">
                    <div className="mx-auto max-w-screen-lg px-3 py-6">
                        <div className="mb-6 text-2xl font-bold">
                            <div className="flex items-baseline justify-between text-white">
                                <div>Projetos</div>
                                <div className="text-base">
                                    <a href="./" className="md:hover:text-blue-700">Ver todos os projetos →</a>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-6">
                            <div className="flex flex-col items-center gap-x-8 rounded-md bg-slate-800 p-3 md:flex-row">
                                <div className="shrink-0">
                                    <div>
                                        <img className=" h-36 w-36" src="/images/yardpass.png" alt="Project Web Design" loading="lazy"/>
                                    </div>
                                </div>

                                <div>
                                    <div className="flex flex-col items-center gap-y-2 md:flex-row">
                                        <div>
                                            <div className="text-xl font-semibold text-white">YardPass</div>
                                        </div>
                                        <div className="ml-3 flex gap-2">
                                            <div className="rounded-md px-2 py-1 text-xs font-semibold bg-yellow-400 text-yellow-900">TypeScript</div>
                                            <div className="rounded-md px-2 py-1 text-xs font-semibold bg-violet-400 text-violet-900">NextJS</div>
                                            <div className="rounded-md px-2 py-1 text-xs font-semibold bg-emerald-400 text-emerald-900">NodeJS</div>
                                            <div className="rounded-md px-2 py-1 text-xs font-semibold bg-sky-400 text-sky-900">Tailwind</div>
                                            <div className="rounded-md px-2 py-1 text-xs font-semibold bg-cyan-400 text-cyan-900">MySQL</div>
                                        </div>
                                    </div>
                                    <p className="mt-3 text-gray-400">O YardPass é um gerenciador de senha para Web, Mobile e Desktop. 
                                    Nele, você poderá guardar senhas, cartões e muito mais. Tudo é armazenado na nuvem para que você tenha a garantia de que não irá perder as suas informações! 
                                    </p>
                                    <div className="text-cyan-400 hover:underline">
                                        <a href="./comingsoon">Ir para o projeto →</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="mb-80"></div>
                <Footer/>     
            </div>
        </>
    );
  }