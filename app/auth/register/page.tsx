"use client";
import Footer from '../../components/footer';
import React, { useState } from 'react';
import CheckCookies from "../../components/checkCookies";
import Link from 'next/link';

export default function Page() {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');

    return (
        <>
            <section>
                <div className="flex flex-col items-center mt-20 mb-5 px-6 mx-auto lg:py-0">
                    <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 ">
                        <div className="absolute flex justify-center top-2 mt-3">
                            <Link href="/" className="hover:bg-blue-700 p-3 text-white bg-blue-600 rounded-lg">← Página Inicial</Link>
                        </div>
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <Link href="#" className="flex items-center justify-center mb-6 text-2xl font-semibold text-gray-900 ">
                                <img className="w-8 h-8 mr-2" src="/icons/favicon.png" alt="logo"/>
                                YardsLab  
                            </Link>
                            <form className="space-y-4 md:space-y-6">
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

                                <button type="submit" className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Registrar</button>
                                <p className="text-sm font-light text-gray-500 ">
                                    Já tem conta? <Link href="/auth/login" className="font-medium text-blue-600 hover:underline ">Logar</Link>
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