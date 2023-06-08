import { Menu, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import CardBankDelConfirm from "./cardBankDelConfirm";
import CardBankEdit from "./cardBankEdit";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function PasswordCard(item){
    const [showPassword, setShowPassword] = useState(true);
    const [showDelConfirmPopUp, setShowDelConfirmPopUp] = useState(false);
    const [showEditPopUp, setShowEditPopUp] = useState(false);

    return(
        <>  
            {showDelConfirmPopUp ? (<><CardBankDelConfirm setShowDelConfirmPopUp={setShowDelConfirmPopUp} itemID = {item.id}  /></>):(<></>)}
            {showEditPopUp ? (<><CardBankEdit setShowEditPopUp={setShowEditPopUp} item = {item}  /></>):(<></>)}
            
            <div>
                <div className="flex items-center mx-auto lg:py-0">
                    <div className="flex w-[28rem] h-[18.2rem] bg-white rounded-lg shadow ">
                        <div className="w-full space-y-6 p-8 relative">
                            <div className="text-center mb-6 text-2xl font-semibold text-gray-900 ">
                                {item.username}
                            </div>
                            <Menu as="div" className="absolute top-[-20px] mr-[4px] right-0 w-7 h-7 hover:bg-slate-300 rounded-lg">
                                <div>
                                    <Menu.Button className="flex rounded-full text-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black" className="w-7 h-7">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </Menu.Button>
                                </div>
                                <Transition  as={Fragment} enter="transition ease-out duration-100" enterFrom="transform opacity-0 scale-95" enterTo="transform opacity-100 scale-100" leave="transition ease-in duration-75" leaveFrom="transform opacity-100 scale-100" leaveTo="transform opacity-0 scale-95">
                                    <Menu.Items className="absolute right-0 z-10 mt-2 text-center w-32 origin-top-right rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                        <Menu.Item>
                                            {({ active }) => (
                                                <a onClick={() => setShowEditPopUp(true)} className={classNames(active ? 'bg-blue-500' : '', 'block px-4 py-2 rounded-lg text-sm text-gray-700')}>Editar</a>)}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                                <a onClick={() => setShowDelConfirmPopUp(true)} className={classNames(active ? 'bg-blue-500' : '', 'block px-4 py-2 cursor-pointer rounded-lg text-sm text-gray-700')}>Excluir</a>)}
                                        </Menu.Item>
                                    </Menu.Items>
                                </Transition>
                            </Menu>  

                            <div className="w-full h-44 bg-red-100 rounded-xl text-white shadow-2xl transition-transform transform">
                            
                                <img className="flex object-cover w-[24rem] h-full rounded-xl" src="https://i.imgur.com/kGkSg1v.png"/>
                            
                                <div className="w-[24rem] px-8 absolute top-1">
                                    <div className="flex justify-between">
                                        <div className="">
                                            <p className="font-light">
                                                Nome
                                            </p>
                                            <input type="txt" className="flex font-medium text-black px-2 text-sm rounded-md w-56" value={item.card_name} readOnly/>
                                            <svg className="absolute flex right-[5.9rem] bottom-[7rem] w-8 h-8 hover:bg-gray-400 rounded-full p-1 cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M7.5 3.375c0-1.036.84-1.875 1.875-1.875h.375a3.75 3.75 0 013.75 3.75v1.875C13.5 8.161 14.34 9 15.375 9h1.875A3.75 3.75 0 0121 12.75v3.375C21 17.16 20.16 18 19.125 18h-9.75A1.875 1.875 0 017.5 16.125V3.375z" />
                                                <path d="M15 5.25a5.23 5.23 0 00-1.279-3.434 9.768 9.768 0 016.963 6.963A5.23 5.23 0 0017.25 7.5h-1.875A.375.375 0 0115 7.125V5.25zM4.875 6H6v10.125A3.375 3.375 0 009.375 19.5H16.5v1.125c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 013 20.625V7.875C3 6.839 3.84 6 4.875 6z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="pt-1">
                                        <p className="font-light">
                                            Número do cartão
                                        </p>
                                        <p className="font-medium">
                                            <input type="txt" className="font-medium text-black px-2 text-sm rounded-md w-[10.3rem]" value={item.card_number} readOnly/>
                                            <svg className="absolute flex right-[9.69rem] bottom-[3.7rem] w-8 h-8 hover:bg-gray-400 rounded-full p-1 cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M7.5 3.375c0-1.036.84-1.875 1.875-1.875h.375a3.75 3.75 0 013.75 3.75v1.875C13.5 8.161 14.34 9 15.375 9h1.875A3.75 3.75 0 0121 12.75v3.375C21 17.16 20.16 18 19.125 18h-9.75A1.875 1.875 0 017.5 16.125V3.375z" />
                                                <path d="M15 5.25a5.23 5.23 0 00-1.279-3.434 9.768 9.768 0 016.963 6.963A5.23 5.23 0 0017.25 7.5h-1.875A.375.375 0 0115 7.125V5.25zM4.875 6H6v10.125A3.375 3.375 0 009.375 19.5H16.5v1.125c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 013 20.625V7.875C3 6.839 3.84 6 4.875 6z" />
                                            </svg>
                                        </p>
                                    </div>
                                    <div className="pt-6 pr-6">
                                        <div className="flex justify-between">
                                            <div className="">
                                                <p className="font-light text-xs text-xs">
                                                    Validade
                                                </p>
                                                <input type="txt" className="font-medium text-black px-2 text-sm rounded-md w-14" value={item.card_date} readOnly/>
                                                <svg className="absolute flex right-[16.45rem] bottom-[-0.3rem] w-8 h-8 hover:bg-gray-400 rounded-full p-1 cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                                    <path d="M7.5 3.375c0-1.036.84-1.875 1.875-1.875h.375a3.75 3.75 0 013.75 3.75v1.875C13.5 8.161 14.34 9 15.375 9h1.875A3.75 3.75 0 0121 12.75v3.375C21 17.16 20.16 18 19.125 18h-9.75A1.875 1.875 0 017.5 16.125V3.375z" />
                                                    <path d="M15 5.25a5.23 5.23 0 00-1.279-3.434 9.768 9.768 0 016.963 6.963A5.23 5.23 0 0017.25 7.5h-1.875A.375.375 0 0115 7.125V5.25zM4.875 6H6v10.125A3.375 3.375 0 009.375 19.5H16.5v1.125c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 013 20.625V7.875C3 6.839 3.84 6 4.875 6z" />
                                                </svg>
                                            </div>

                                            <div className="">
                                                <p className="font-light text-xs">
                                                    CVV
                                                </p>
                                                <input type="txt" className="font-medium text-black px-2 text-sm rounded-md w-10" value={item.card_security} readOnly/>
                                                <svg className="absolute flex right-[7.7rem] bottom-[-0.3rem] w-8 h-8 hover:bg-gray-400 rounded-full p-1 cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                                    <path d="M7.5 3.375c0-1.036.84-1.875 1.875-1.875h.375a3.75 3.75 0 013.75 3.75v1.875C13.5 8.161 14.34 9 15.375 9h1.875A3.75 3.75 0 0121 12.75v3.375C21 17.16 20.16 18 19.125 18h-9.75A1.875 1.875 0 017.5 16.125V3.375z" />
                                                    <path d="M15 5.25a5.23 5.23 0 00-1.279-3.434 9.768 9.768 0 016.963 6.963A5.23 5.23 0 0017.25 7.5h-1.875A.375.375 0 0115 7.125V5.25zM4.875 6H6v10.125A3.375 3.375 0 009.375 19.5H16.5v1.125c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 013 20.625V7.875C3 6.839 3.84 6 4.875 6z" />
                                                </svg>
                                            </div>

                                            <div></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
}