"use client";
import React from 'react';
import Header from "./components/header";
import Footer from "./components/footer";
import CheckCookies from "./components/checkCookies";
import Link from 'next/link';

export default function Page() {
    return (
      <>
        <div className="bg-gradient-to-r from-slate-900 to-slate-700">
          <Header pathname='/'/>
          <section>
            <div className="mx-auto max-w-screen-lg px-3 py-6">
              <div className="flex flex-col items-center md:flex-row md:justify-between md:gap-x-24">
                <div className="mt-40">
                  <h1 className="text-3xl font-bold text-white">Olá, eu sou o 
                    <span className="bg-gradient-to-br from-sky-500 to-cyan-400 bg-clip-text text-transparent"> Airton!</span> 👋
                  </h1>
                  <p className="mt-6 text-xl leading-9 text-white">Sou um desenvolvedor <span className="text-cyan-400">FullStack </span>
                    apaixonado por criar soluções inovadoras. Com minhas habilidades, transformo desafios em código funcional. 
                    YardsLab é como chamo esse espaço e <span className="text-cyan-400">espero que goste do que irá encontrar aqui!</span>
                  </p>
                  <div className="mt-12 w-36 h-10">
                    <Link className="w-full h-full p-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md font-medium" href="https://wa.me/5592991920999">Me Contrate →</Link>
                  </div>
                </div>
                <div className="shrink-0 mt-20 hover:scale-110">
                  <img className="mt-10 h-80 w-80 border-4 rounded-full" src="/images/me.png" loading="lazy"/>
                </div>
              </div>
            </div>
          </section>

          <div className="mx-auto max-w-screen-lg px-3 py-6 border-t border-gray-600 mt-20 mb-5"></div>

          <section>
            <div className="mx-auto max-w-screen-lg px-3 py-6">
              <div className="mb-6 text-2xl font-bold">
                <div className="flex items-baseline justify-between text-white">
                  <div>Principais
                    <span className="bg-gradient-to-br from-sky-500 to-cyan-400 bg-clip-text text-transparent"> Ferramentas</span>
                  </div>
                  <div className="text-base">
                    <Link href="/sobre" className="md:hover:text-indigo-600">Ver todas as ferramentas →</Link>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                <div className="hover:scale-110">
                  <div className="overflow-hidden rounded-md bg-slate-800">
                    <div className="aspect-w-3 aspect-h-2">
                      <img className="h-full w-full object-cover object-center" src="/images/react-logo.png" alt="Image post 2" loading="lazy"/>
                    </div>
                    <div className="px-3 pt-4 pb-6 text-center">
                      <h2 className="text-xl font-semibold text-white">React</h2>
                    </div>
                  </div>
                </div>
                <div className="hover:scale-110">
                  <div className="overflow-hidden rounded-md bg-slate-800">
                    <div className="aspect-w-3 aspect-h-2">
                      <img className="h-full w-full object-cover object-center" src="/images/node-logo.png" alt="Image post 3" loading="lazy"/>
                    </div>
                    <div className="px-3 pt-4 pb-6 text-center">
                      <h2 className="text-xl font-semibold text-white">NodeJS</h2>
                    </div>
                  </div>
                </div>
                <div className="hover:scale-110">
                  <div className="overflow-hidden rounded-md bg-slate-800">
                    <div className="aspect-w-3 aspect-h-2">
                      <img className="h-full w-full object-cover object-center" src="/images/mysql-logo.png" alt="Image post 3" loading="lazy"/>
                    </div>
                    <div className="px-3 pt-4 pb-6 text-center">
                      <h2 className="text-xl font-semibold text-white">MySQL</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="mx-auto max-w-screen-lg px-3 py-6 border-t border-gray-600 mt-20 mb-5"></div>

          <section>
            <div className="mx-auto max-w-screen-lg px-3 py-6">
            <div className="mb-6 text-2xl font-bold">
                <div className="flex items-baseline justify-between text-white">
                  <div>Projetos
                    <span className="bg-gradient-to-br from-sky-500 to-cyan-400 bg-clip-text text-transparent"> Recentes</span>
                  </div>
                  <div className="text-base">
                    <Link href="/projetos" className="md:hover:text-indigo-600">Ver todos os projetos →</Link>
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
                      <Link href="/dashboard">Ir para o projeto →</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <CheckCookies/>

          <Footer/>     
        </div>
      </>
    );
  }