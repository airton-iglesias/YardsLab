import React from 'react';
import Footer from "../components/footer";
import Asidebaraccount from "../components/asidebar-Account";


export const metadata = {
    title: 'YardsLab - Dashboard',
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
      <Asidebaraccount/>
          
      <section>
        <div className="mx-auto ml-80 max-w-screen-lg px-3 py-6">
          <div className="pb-6 mt-6 text-center">
            <a href="#" className="flex w-32 items-center justify-center rounded-md border border-transparent bg-indigo-600 hover:bg-indigo-700 py-3 text-base font-medium text-white">
              <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </a>
          </div>

          <div className="mb-6 text-3xl font-bold">
            <div className="flex items-baseline justify-between text-white">
              <div>Seus
                <span className="bg-gradient-to-br from-sky-500 to-cyan-400 bg-clip-text text-transparent"> itens</span>
              </div>
              <div className="text-base"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="shadow-sm shadow-neutral-700">
              <div className="overflow-hidden rounded-md bg-white">
                <div className="aspect-w-3 aspect-h-2">
                  <img className="h-full w-full object-cover object-center" src="/images/yardpassdashboard-logo.png" alt="Image post 3" loading="lazy"/>
                </div>
                <div className="px-3 pt-2 pb-2 text-center">
                  <h2 className="text-xl font-semibold text-black">YardPass</h2>
                </div>
                <div className="px-3 pb-4 text-center">
                  <a href="#" className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 hover:bg-indigo-700 px-8 py-3 text-base font-medium text-white ">Acessar</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      <Footer />     
            
    </>
  );
}