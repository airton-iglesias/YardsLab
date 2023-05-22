import React from 'react';
import Footer from '../../components/footer';
export const metadata = {
    title: 'YardsLab - Login',
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
            <section>
                <div className="flex flex-col items-center mt-40 px-6 mx-auto lg:py-0">
                    <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 ">
                        <div className="absolute flex justify-center top-20 mt-4">
                            <a href="/" className="hover:bg-blue-700 p-3 text-white bg-blue-600 rounded-lg">← Página Inicial</a>
                        </div>
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            
                            <a href="#" className="flex items-center justify-center mb-6 text-2xl font-semibold text-gray-900 ">
                                <img className="w-8 h-8 mr-2" src="/icons/favicon.png" alt="logo"/>
                                YardsLab  
                            </a>
                            <form className="space-y-4 md:space-y-6" action="#">
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 ">Seu Email</label>
                                    <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 " placeholder="email@exemplo.com" required/>
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 ">Senha</label>
                                    <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 " required/>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-start">
                                        <div className="flex items-center h-5">
                                            <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 " required/>
                                        </div>
                                        <div className="ml-3 text-sm">
                                            <label className="text-gray-500 ">Lembrar de mim</label>
                                        </div>
                                    </div>
                                    <a href="/comingsoon" className="text-sm font-medium text-blue-600 hover:underline">Esqueceu a senha?</a>
                                </div>
                                <button type="submit" className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Entrar</button>
                                <p className="text-sm font-light text-gray-500 ">
                                    Ainda não tem conta? <a href="/auth/register" className="font-medium text-blue-600 hover:underline ">Registrar</a>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <div className="absolute inset-x-0 bottom-0">
                <Footer/>
            </div>
        </>
    );
  }