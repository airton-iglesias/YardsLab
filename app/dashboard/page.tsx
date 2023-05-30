"use client";
import React, { useEffect, useState } from 'react';
import Asidebaraccount from "../components/asidebar-Account";
import CheckCookies from "../components/checkCookies";
import Link from 'next/link';
import Header from '../components/header';
import ServiceAdd from '../components/serviceAdd';


export default function Page() {

  const [yardPass, setYardPass] = useState(false);
  const [addItem, setAddItem] = useState(false);

  const setAddItemFalse = () => {
    setAddItem(false)
  }

  useEffect(() => {
    const reqData = async () =>  {

      const req = await fetch('/api/controllers/cookies/cookieYardPassExist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      })

      const data = await req.json();

      if(data.message == "TRUE"){
        setYardPass(true);
      }
      else if(data.message == "FALSE"){
        setYardPass(false);
      }
    }
            
    reqData();
  }, []);

  return (
    <> 
      <div className="fixed top-0 z-[30]">
        <Header pathname="/dashboard" />
      </div>

      {addItem ? (
        <>
          <ServiceAdd setAddItemFalse={setAddItemFalse}/>
        </>):(<></>)
      }

      <section>
        <div className=" pr-3 ml-0 mt-20 w-max-screen px-3 py-6  lg:ml-36 lg:pr-[30px]">
          <div className="pb-6 mt-6 text-center">
            <button onClick={()=>setAddItem(true)} className="flex w-32 items-center justify-center rounded-md border border-transparent bg-indigo-600 hover:bg-indigo-700 py-3 text-base font-medium text-white">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 10.5v6m3-3H9m4.06-7.19l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
              </svg>
            </button>
          </div>
          <div className="mb-6 text-3xl font-bold">
            <div className="flex items-baseline justify-between text-white">
              <div>Seus
                <span className="bg-gradient-to-br from-sky-500 to-cyan-400 bg-clip-text text-transparent"> itens</span>
              </div>
              <div className="text-base"></div>
            </div>
          </div>
          <div className="relative grid grid-cols-1 gap-6 lg:grid-cols-4 min-w-[100%] max-w-[100%]">
            {yardPass ? (
              <>
                <div className="shadow-sm shadow-neutral-700 lg:w-[100%] xl:w-[80%]">
                  <div className="overflow-hidden rounded-md bg-white">
                    <div className="aspect-w-3 aspect-h-2">
                      <img className="h-full w-full object-cover object-center" src="/images/yardpassdashboard-logo.png" alt="Image post 3" loading="lazy"/>
                    </div>
                    <div className="px-3 pt-2 pb-2 text-center">
                      <h2 className="text-2xl font-semibold text-black">YardPass</h2>
                      <p className="text-slate-500  ">Gerenciador de Senhas e Cartões</p>
                    </div>
                    <div className="px-3 pb-4 text-center">
                      <Link href="/yardpass" className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 hover:bg-indigo-700 px-8 py-3 text-base font-medium text-white ">Acessar</Link>
                    </div>
                  </div>
                </div>
              </>
              ):(<></>)
            }
          </div>
        </div>
      </section>
      <CheckCookies/>
    </>
  );
}