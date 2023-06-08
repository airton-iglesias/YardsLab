"use client";
import React, { useContext, useEffect, useState } from 'react';
import Asidebaraccount from "../components/asidebar-Account";
import CheckCookies from "../components/checkCookies";
import Header from '../components/header';
import PasswordCard from "../components/passwordCard";
import PasswordAdd from "../components/passwordAdd";
import { toast } from 'react-hot-toast';
import { GlobalContext } from '../context/GlobalContext';
import CardBank from "../components/cardBank";


export default function Page() {
  const {passwordsData, cardBankData} = useContext(GlobalContext);
  const [havePasswords, setHavePasswords] = useState(false);
  const [passwordAddPopUp, setPasswordAddPopUp] = useState(false);
  const [filterRenderPasswords, setFilterRenderPasswords] = useState("All");
  const [haveCardBank, setHaveCardBank] = useState(false);

  const setAddItemFalse = () => {
    setPasswordAddPopUp(false)
  }

  useEffect(() => {
    if (!!passwordsData[0]?.id && haveCardBank[0]?.id){
      setHavePasswords(!!passwordsData[0]?.id);
      setHaveCardBank(!!haveCardBank[0]?.id);
    }
    else{
      setHaveCardBank(true)
      setHavePasswords(false)
    }
  }, [passwordsData, haveCardBank]);

  return (
    <> 
      <div className="fixed top-0 z-[30]">
        <Header pathname="/yardpass"/>
      </div>
    
      {passwordAddPopUp ? (
        <>
          <div className="absolute z-10">
            <PasswordAdd setAddItemFalse={setAddItemFalse}/>
          </div>
        </>
      ):(<></>)
      }

      <div>
        <Asidebaraccount setFilterRenderPasswords={setFilterRenderPasswords}/>
      </div>
      <section>
        <div className=" pr-3 ml-0 mt-20 w-max-screen px-3 py-6  lg:ml-80 lg:pr-[30px]">
          <div className="pb-6 mt-6 text-center">
            <button onClick={() => setPasswordAddPopUp(true)} className="flex w-32 items-center justify-center rounded-md border border-transparent bg-indigo-600 hover:bg-indigo-700 py-3 text-base font-medium text-white">
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
          <div className="relative grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 min-w-[100%] max-w-[100%]">
            {havePasswords ? (
              filterRenderPasswords == "Passwords" ? 
                (
                passwordsData.map(item => (
                  <div key={item.id}>
                    <PasswordCard Key={item.id} id={item.id} name={item.website} login={item.username} senha={item.password}/>
                  </div>
                ))):
                filterRenderPasswords == "CardBank" ? 
                (
                  cardBankData.map(item => (
                  <div key={item.id}>
                    <CardBank Key={item.id} id={item.id} username={item.username} card_name={item.card_name} card_number={item.card_number} card_date={item.card_date} card_security={item.card_security}/>
                  </div>
                ))):
                filterRenderPasswords == "All" ? 
                (
                  <>
                    {passwordsData.map(item => (
                      <div key={item.id}>
                        <PasswordCard Key={item.id} id={item.id} name={item.website} login={item.username} senha={item.password}/>
                      </div>
                    ))}

                    {cardBankData.map(item => (
                      <div key={item.id}>
                        <CardBank Key={item.id} id={item.id} username={item.username} card_name={item.card_name} card_number={item.card_number} card_date={item.card_date} card_security={item.card_security}/>
                      </div>
                    ))}
                  </>
                ):(<></>)):(<></>)
            }
            {haveCardBank ? (
              filterRenderPasswords == "Passwords" ? 
                (
                passwordsData.map(item => (
                  <div key={item.id}>
                    <PasswordCard Key={item.id} id={item.id} name={item.website} login={item.username} senha={item.password}/>
                  </div>
                ))):
                filterRenderPasswords == "CardBank" ? 
                (
                  cardBankData.map(item => (
                  <div key={item.id}>
                    <CardBank Key={item.id} id={item.id} username={item.username} card_name={item.card_name} card_number={item.card_number} card_date={item.card_date} card_security={item.card_security}/>
                  </div>
                ))):
                filterRenderPasswords == "All" ? 
                (
                  <>
                    {passwordsData.map(item => (
                      <div key={item.id}>
                        <PasswordCard Key={item.id} id={item.id} name={item.website} login={item.username} senha={item.password}/>
                      </div>
                    ))}

                    {cardBankData.map(item => (
                      <div key={item.id}>
                        <CardBank Key={item.id} id={item.id} username={item.username} card_name={item.card_name} card_number={item.card_number} card_date={item.card_date} card_security={item.card_security}/>
                      </div>
                    ))}
                  </>
                ):(<></>)):(<></>)
            }
          </div>
        </div>
      </section>
      <CheckCookies/>
    </>
  );
}