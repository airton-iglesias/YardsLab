"use client";
import React, { useState } from 'react';
import CheckCookies from "../../components/checkCookies";
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import toast from 'react-hot-toast';

export default function Page() {
    const router = useRouter();

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [submitButton, setSubmitButton] = useState(true);
        
    const handleSubmitForm = async (e) => {
        e.preventDefault();
        setSubmitButton(false);

        if (password !== passwordConfirm){
            return toast.error("As duas senhas não são iguais")
        }
    
        try{
            const res = await fetch('/api/controllers/auth/registerUser', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    nome: nome,
                    email: email, 
                    password: password, 
                })
            });
                
            const data = await res.json();
    
            if(data.message == "sucess"){
                setSubmitButton(true)
                toast.success("Cadastrado com sucesso!")
                setInterval(() => router.push("/auth/login"), 3000)
            }

            else if(data.message == "InternalError"){
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
            <section className=" flex-col">
                <div className="flex flex-col items-center mt-20 mb-5 px-6 mx-auto lg:py-0 flex-grow">
                    <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 ">
                        <div className="absolute flex justify-center top-2 mt-3">
                            <Link href="/" className="hover:bg-blue-700 p-3 text-white bg-blue-600 rounded-lg">← Página Inicial</Link>
                        </div>
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <Link href="/" className="flex items-center justify-center mb-6 text-2xl font-semibold text-gray-900 ">
                                <img className="w-8 h-8 mr-2" src="/icons/favicon.png" alt="logo"/>
                                YardsLab  
                            </Link>
                            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmitForm}>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 ">Digite seu nome</label>
                                    <input type="text" onChange={(e)=>setNome(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 " placeholder="Nome" required/>
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 ">Digite seu email</label>
                                    <input type="email" onChange={(e)=>setEmail(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 " placeholder="email@exemplo.com" required/>
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 ">Digite sua senha</label>
                                    <input type="password" onChange={(e)=>setPassword(e.target.value)} placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 " required/>
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 ">Digite sua senha novamente</label>
                                    <input type="password" onChange={(e)=>setPasswordConfirm(e.target.value)} placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 " required/>
                                </div>
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 " required/>
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label className="text-gray-500 ">Você concorda com os <Link href="/comingsoon" className="text-blue-600 hover:underline">Termos de Uso</Link>?</label>
                                    </div>
                                </div>

                                {submitButton ? 
                                     <button type="submit" className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center h-12">Cadastrar</button>
                                     :
                                    <button disabled type="button" className="w-full text-white bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 h-12">
                                        <svg aria-hidden="true" role="status" className="inline mb-[2px] h-5 w-5 mr-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
                                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
                                        </svg>
                                        <span>Cadastrando...</span>
                                    </button>
                                }
                                <p className="text-sm font-light text-gray-500 ">
                                    Já tem conta? <Link href="/auth/login" className="font-medium text-blue-600 hover:underline ">Logar</Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <CheckCookies/>
        </>
    );
}