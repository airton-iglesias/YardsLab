import { Menu, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import PasswordDelConfirm from "./passwordDelConfirm";
import PasswordEdit from './passwordEdit';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function PasswordCard(item){
    const [showPassword, setShowPassword] = useState(true);
    const [showDelConfirmPopUp, setShowDelConfirmPopUp] = useState(false);
    const [showEditPopUp, setShowEditPopUp] = useState(false);

    return(
        <>  
            {showDelConfirmPopUp ? (<><PasswordDelConfirm setShowDelConfirmPopUp={setShowDelConfirmPopUp} itemID = {item.id}  /></>):(<></>)}
            {showEditPopUp ? (<><PasswordEdit setShowEditPopUp={setShowEditPopUp} item = {item}  /></>):(<></>)}
            
            <div>
                <div className="flex items-center mx-auto lg:py-0">
                    <div className="flex w-[28rem] h-[18.2rem] bg-white rounded-lg shadow ">
                        <div className="w-full space-y-6 p-8 relative">
                            <div className="text-center mb-6 text-2xl font-semibold text-gray-900 ">
                                {item.name}
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

                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 ">Login/Email</label>
                                <div>
                                    <input type="text" value={item.login}  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5" readOnly/>
                                    <svg className="absolute flex right-10 bottom-[8.55rem] w-8 h-8 hover:bg-gray-400 rounded-full p-1 cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M7.5 3.375c0-1.036.84-1.875 1.875-1.875h.375a3.75 3.75 0 013.75 3.75v1.875C13.5 8.161 14.34 9 15.375 9h1.875A3.75 3.75 0 0121 12.75v3.375C21 17.16 20.16 18 19.125 18h-9.75A1.875 1.875 0 017.5 16.125V3.375z" />
                                        <path d="M15 5.25a5.23 5.23 0 00-1.279-3.434 9.768 9.768 0 016.963 6.963A5.23 5.23 0 0017.25 7.5h-1.875A.375.375 0 0115 7.125V5.25zM4.875 6H6v10.125A3.375 3.375 0 009.375 19.5H16.5v1.125c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 013 20.625V7.875C3 6.839 3.84 6 4.875 6z" />
                                    </svg>
                                </div>
                            </div>
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 ">Senha</label>
                                <div>
                                    <input type={showPassword ? 'password' : 'text'} value={item.senha}  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5" readOnly/>
                                    {showPassword ? (
                                        <>
                                            <svg onClick={() => setShowPassword(false)} className="absolute flex right-20 bottom-10 cursor-pointer w-8 h-8 hover:bg-gray-400 rounded-full p-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                                                <path fillRule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z" clipRule="evenodd" />
                                            </svg>

                                        </>
                                    ):
                                    (
                                        <>
                                            <svg onClick={() => setShowPassword(true)} className="absolute flex right-20 bottom-10 cursor-pointer w-8 h-8 hover:bg-gray-400 rounded-full p-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M3.53 2.47a.75.75 0 00-1.06 1.06l18 18a.75.75 0 101.06-1.06l-18-18zM22.676 12.553a11.249 11.249 0 01-2.631 4.31l-3.099-3.099a5.25 5.25 0 00-6.71-6.71L7.759 4.577a11.217 11.217 0 014.242-.827c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113z" />
                                                <path d="M15.75 12c0 .18-.013.357-.037.53l-4.244-4.243A3.75 3.75 0 0115.75 12zM12.53 15.713l-4.243-4.244a3.75 3.75 0 004.243 4.243z" />
                                                <path d="M6.75 12c0-.619.107-1.213.304-1.764l-3.1-3.1a11.25 11.25 0 00-2.63 4.31c-.12.362-.12.752 0 1.114 1.489 4.467 5.704 7.69 10.675 7.69 1.5 0 2.933-.294 4.242-.827l-2.477-2.477A5.25 5.25 0 016.75 12z" />
                                            </svg>
                                        </>
                                    )}
                                    <svg className="absolute flex right-10 bottom-10 cursor-pointer w-8 h-8 hover:bg-gray-400 rounded-full p-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M7.5 3.375c0-1.036.84-1.875 1.875-1.875h.375a3.75 3.75 0 013.75 3.75v1.875C13.5 8.161 14.34 9 15.375 9h1.875A3.75 3.75 0 0121 12.75v3.375C21 17.16 20.16 18 19.125 18h-9.75A1.875 1.875 0 017.5 16.125V3.375z" />
                                        <path d="M15 5.25a5.23 5.23 0 00-1.279-3.434 9.768 9.768 0 016.963 6.963A5.23 5.23 0 0017.25 7.5h-1.875A.375.375 0 0115 7.125V5.25zM4.875 6H6v10.125A3.375 3.375 0 009.375 19.5H16.5v1.125c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 013 20.625V7.875C3 6.839 3.84 6 4.875 6z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
}