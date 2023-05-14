import React from 'react';
import Navbar from "./components/navbar";
export default function Page() {
    return (
      <div className="bg-gradient-to-r from-slate-900 to-slate-700">
        <header className="bg-white sticky top-0 z-50">
          <Navbar/>
        </header>
        
        <section>
          <div className="mx-auto max-w-screen-lg px-3 py-6">
            <div className="flex flex-col items-center md:flex-row md:justify-between md:gap-x-24">
              <div className="mt-24">
                <h1 className="text-3xl font-bold text-white">Olá, eu sou o 
                  <span className="bg-gradient-to-br from-sky-500 to-cyan-400 bg-clip-text text-transparent"> Airton!</span> 👋
                </h1>
                <p className="mt-6 text-xl leading-9 text-white">Atualmente, programo aplicações FullStacks para <span className="text-cyan-400">Web</span>, <span className="text-cyan-400">Mobile</span> e <span className="text-cyan-400">Desktop</span>.
                Busco formas para sempre aprimorar o meu conhecimento com os projetos que crio. YardsLab é como chamo esse espaço e <span className="text-cyan-400">espero que goste do que irá encontrar aqui!</span>
                </p>
                <div className="mt-12 w-36 h-10">
                  <a className="w-full h-full p-3 bg-white rounded-md md:hover:bg-blue-700 font-medium" href="./comingsoon">Me Contrate →</a>
                </div>
              </div>
              <div className="shrink-0">
                <img className="mt-10 h-80 w-80 border-4 rounded-full" src="/images/me.png"/>
              </div>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-screen-lg px-3 py-6 border-t border-gray-600 mt-20 mb-5"></div>

        <section>
          <div className="mx-auto max-w-screen-lg px-3 py-6">
            <div className="mb-6 text-2xl font-bold">
              <div className="flex items-baseline justify-between text-white">
                <div>Ferramentas
                  <span className="bg-gradient-to-br from-sky-500 to-cyan-400 bg-clip-text text-transparent"> Utilizadas</span>
                </div>
                <div className="text-base">
                  <a href="./comingsoon" className="md:hover:text-blue-700">Ver todas as ferramentas →</a>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <a className="hover:scale-110" href="./comingsoon">
                <div className="overflow-hidden rounded-md bg-slate-800">
                  <div className="aspect-w-3 aspect-h-2">
                    <img className="h-full w-full object-cover object-center" src="/images/react-logo.png" alt="Image post 2" loading="lazy"/>
                  </div>
                  <div className="px-3 pt-4 pb-6 text-center">
                    <h2 className="text-xl font-semibold text-white">React</h2>
                    <div className="mt-2 text-sm text-white">Utilizo o React para desenvolver as minhas aplicações Web e Mobile.</div>
                  </div>
                </div>
              </a>
              <a className="hover:scale-110" href="./comingsoon">
                <div className="overflow-hidden rounded-md bg-slate-800">
                  <div className="aspect-w-3 aspect-h-2">
                    <img className="h-full w-full object-cover object-center" src="/images/node-logo.png" alt="Image post 3" loading="lazy"/>
                  </div>
                  <div className="px-3 pt-4 pb-6 text-center">
                    <h2 className="text-xl font-semibold text-white">NodeJS</h2>
                      <div className="mt-2 text-sm text-white">Utilizo o NodeJS no Back-End das minhas aplicações.</div>
                  </div>
                </div>
              </a>
              <a className="hover:scale-110" href="./comingsoon">
                <div className="overflow-hidden rounded-md bg-slate-800">
                  <div className="aspect-w-3 aspect-h-2">
                    <img className="h-full w-full object-cover object-center" src="/images/mysql-logo.png" alt="Image post 3" loading="lazy"/>
                  </div>
                  <div className="px-3 pt-4 pb-6 text-center">
                    <h2 className="text-xl font-semibold text-white">MySQL</h2>
                      <div className="mt-2 text-sm text-white">Utilizo o MySQL como banco de dados para as minhas aplicações.</div>
                  </div>
                </div>
              </a>
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
                  <a href="./comingsoon" className="md:hover:text-blue-700">Ver todos os projetos →</a>
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
                      <div className="rounded-md px-2 py-1 text-xs font-semibold bg-blue-400 text-blue-900">React.js</div>
                      <div className="rounded-md px-2 py-1 text-xs font-semibold bg-violet-400 text-violet-900">Next.js</div>
                      <div className="rounded-md px-2 py-1 text-xs font-semibold bg-emerald-400 text-emerald-900">Node.js</div>
                      <div className="rounded-md px-2 py-1 text-xs font-semibold bg-sky-400 text-sky-900">Tailwind.css</div>
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
   
        <footer>
          <div className="mx-auto max-w-screen-lg px-3 py-6">
            <div className="border-t border-gray-600 pt-5">
              <div className="text-sm text-gray-200 text-center">© Copyright 2023. Todos os direitos reservados para
                <a className="text-cyan-400 hover:underline" href="./comingsoon" target="_blank" rel="noopener noreferrer"> Airton Iglesias</a>!
              </div>
            </div>
          </div>
        </footer>        
      </div>
    );
  }