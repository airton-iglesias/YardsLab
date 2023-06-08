"use client";
import React, { useState } from "react";
import { toast } from "react-hot-toast";

export default function PasswordEdit({setShowEditPopUp, item}){
    const [submitButton, setSubmitButton] = useState(true);
    const [inputWebsite, setInputWebsite] = useState(item.name);
    const [inputLogin, setInputLogin] = useState(item.login);
    const [inputSenha, setInputSenha] = useState(item.senha);
    const [showPassword, setShowPassword] = useState(true);

    const addPassword = async (e) =>{
        e.preventDefault();
        setSubmitButton(false);

        try{
            const res = await fetch('/api/controllers/services/yardpass/passwords/editPassword', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    itemID: item.id,
                    website: inputWebsite,
                    login: inputLogin,
                    password: inputSenha,
                })
            });
            
            const data = await res.json();

            if (data.message == "sucess"){
                setSubmitButton(false);
                setShowEditPopUp();
                window.location.reload();
            }
            else{
                toast.error("Algo deu errado!");
            }

        }
        catch(err){
            console.log(err);
            setSubmitButton(true);
        }
    }
    
    return(
        <>
            <section className="fixed w-full top-0 left-0 h-full bg-gray-500/50 z-30">
                <div className="flex flex-col items-center mt-40 px-6 mx-auto lg:py-0">
                    <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 ">
                        <div className="p-8 space-y-6 relative">
                            <div className="flex items-center justify-center mb-6 text-2xl font-semibold text-gray-900 ">
                                Adicionar
                            </div>
                            <button onClick={() => setShowEditPopUp(false)} className="absolute top-[-20px] mr-[4px] right-0 w-7 h-7 text-white hover:bg-slate-300 rounded-lg">
                                <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </button>
                            <form className="space-y-6" onSubmit={addPassword}>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 ">Digite o nome do website</label>
                                    <input type="text" onChange={(e) => setInputWebsite(e.target.value)} value={inputWebsite} className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5"/>
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 ">Digite o seu login/email</label>
                                    <input type="text" onChange={(e) => setInputLogin(e.target.value)} value={inputLogin} className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5"/>
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 ">Digite a sua senha</label>
                                    <input type={showPassword ? 'password' : 'text'} onChange={(e) => setInputSenha(e.target.value)} value={inputSenha} className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5"/>
                                    {showPassword ? (
                                        <>
                                            <svg onClick={() => setShowPassword(false)} className="absolute flex right-10 bottom-28 cursor-pointer w-8 h-8 hover:bg-gray-400 rounded-full p-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                                                <path fillRule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z" clipRule="evenodd" />
                                            </svg>

                                        </>
                                    ):
                                    (
                                        <>
                                            <svg onClick={() => setShowPassword(true)} className="absolute flex right-10 bottom-28 cursor-pointer w-8 h-8 hover:bg-gray-400 rounded-full p-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M3.53 2.47a.75.75 0 00-1.06 1.06l18 18a.75.75 0 101.06-1.06l-18-18zM22.676 12.553a11.249 11.249 0 01-2.631 4.31l-3.099-3.099a5.25 5.25 0 00-6.71-6.71L7.759 4.577a11.217 11.217 0 014.242-.827c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113z" />
                                                <path d="M15.75 12c0 .18-.013.357-.037.53l-4.244-4.243A3.75 3.75 0 0115.75 12zM12.53 15.713l-4.243-4.244a3.75 3.75 0 004.243 4.243z" />
                                                <path d="M6.75 12c0-.619.107-1.213.304-1.764l-3.1-3.1a11.25 11.25 0 00-2.63 4.31c-.12.362-.12.752 0 1.114 1.489 4.467 5.704 7.69 10.675 7.69 1.5 0 2.933-.294 4.242-.827l-2.477-2.477A5.25 5.25 0 016.75 12z" />
                                            </svg>
                                        </>
                                    )}
                                </div>
                                <div className="w-full text-center">
                                    {submitButton ? (
                                            <>
                                                <button type="submit" className="w-32 mx-3 text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center h-12">Editar</button>
                                                <button onClick={() => setShowEditPopUp(false)} type="submit" className="w-32 mx-3 text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center h-12">Cancelar</button>
                                            </>    
                                        ):(
                                            <>
                                                <button type="submit" className="w-36 mx-3 text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center h-12" disabled>
                                                    <svg aria-hidden="true" role="status" className="inline mb-[2px] h-5 w-5 mr-2 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
                                                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
                                                    </svg>
                                                    <span>Editando...</span>
                                                </button>
                                            </>
                                    )}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}