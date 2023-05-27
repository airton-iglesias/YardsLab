"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import toast, { Toaster } from 'react-hot-toast';


import Footer from '../../components/footer';
import CheckCookies from "../../components/checkCookies";


export default function Page() {
    const router = useRouter();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberme, setRememberMe] = useState('');
    const [submitButton, setSubmitButton] = useState(true);
    

    const handleSubmitForm = async (e) => {
        e.preventDefault();
        setSubmitButton(false);

        try{
            const res = await fetch('/api/controllers/auth/getUser', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: email, 
                    password: password, 
                    rememberme: rememberme})
            });
            
            const data = await res.json();

            if(data.message == "sucess"){
                console.log("entrou em sucess")
                router.push("/dashboard")
                setInterval(() => setSubmitButton(true), 3000)
            }
            else if(data.message == "passwordError"){
                toast.error("senha invalida")
                console.log("entrou em senha invalida")
                setSubmitButton(true);
            }
            else if (data.message == "userNotExist"){
                console.log("entrou em user n existe")
                toast.error("usuario nao existe")
                setSubmitButton(true);
            }
            else if(data.message == "InternalError"){
                console.log("entrou em operacao erro")
                toast.error("Falha na operação")
                setSubmitButton(true);
            }
        }
        catch(err){
            console.log(err);
            setSubmitButton(true);
        }
    }

    return (
        <>  
            <Toaster containerStyle={{ position: 'absolute' }}/>

            <section>
                <div className="flex flex-col items-center mt-40 px-6 mx-auto lg:py-0">
                    <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 ">
                        <div className="absolute flex justify-center top-20 mt-4">
                            <Link href="/" className="hover:bg-blue-700 p-3 text-white bg-blue-600 rounded-lg">← Página Inicial</Link>
                        </div>
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            
                            <Link href="#" className="flex items-center justify-center mb-6 text-2xl font-semibold text-gray-900 ">
                                <img className="w-10 h-10 mr-2" src="/icons/favicon.png" alt="logo"/>
                                YardsLab  
                            </Link>
                            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmitForm}>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 ">Seu Email</label>
                                    <input type="email" onChange={(e)=>setEmail(e.target.value)} name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 " placeholder="email@exemplo.com" required/>
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 ">Senha</label>
                                    <input type="password" onChange={(e)=>setPassword(e.target.value)} name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 " required/>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-start">
                                        <div className="flex items-center h-5">
                                            <input id="remember" aria-describedby="remember" type="checkbox" onChange={(e) => setRememberMe(e.target.value)} className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300"/>
                                        </div>
                                        <div className="ml-3 text-sm">
                                            <label className="text-gray-500 ">Lembrar de mim</label>
                                        </div>
                                    </div>
                                    <Link href="/comingsoon" className="text-sm font-medium text-blue-600 hover:underline">Esqueceu a senha?</Link>
                                </div>
                                {submitButton ? 
                                     <button type="submit" className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center h-12">Entrar</button>
                                     :
                                    <button disabled type="button" className="w-full text-white bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 h-12">
                                        <svg aria-hidden="true" role="status" className="inline mb-[2px] h-5 w-5 mr-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
                                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
                                        </svg>
                                        <span>Entrando...</span>
                                    </button>
                                }
                                
                                <p className="text-sm font-light text-gray-500 ">
                                    Ainda não tem conta? <Link href="/auth/register" className="font-medium text-blue-600 hover:underline ">Registrar</Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <CheckCookies/>
            <div className="absolute inset-x-0 bottom-0">
                <Footer/>
            </div>
        </>
    );
  }