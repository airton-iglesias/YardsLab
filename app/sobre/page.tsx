import React from 'react';
import Header from "../components/header";
import Footer from "../components/footer";
import CheckCookies from "../components/checkCookies";
import Link from 'next/link';

export default function Page() {
    return (
        <>  
            <Header pathname="/sobre"/>

            <div className="bg-gradient-to-r from-slate-900 to-slate-700">
                <section>
                    <div className="mx-auto max-w-screen-lg px-3 py-6">
                        <div className="flex flex-col items-center md:flex-row md:justify-between md:gap-x-24">
                            <div className="mt-40">
                                <h1 className="text-3xl font-bold text-white">Sobre mim</h1>
                                <p className="mt-6 text-base font-semibold italic leading-9 text-white">
                                    Olá, me chamo Airton Iglesias. Sou um entusiasta da tecnologia e da informática. Desde jovem, sempre fui fascinado pela lógica e pela capacidade da tecnologia de transformar o mundo.
                                    Durante meu curso técnico, aprendi a desenvolver habilidades em programação, banco de dados e redes de computadores, entre outras.
                                    Fora do ambiente acadêmico, gosto de me manter atualizado sobre as últimas tendências em tecnologia.
                                    Espero que você goste do meu portfólio e que esteja interessado(a) em me dar a oportunidade de mostrar minhas habilidades. Se você tiver alguma dúvida ou desejar discutir projetos colaborativos, não hesite em entrar em contato comigo. Obrigada por visitar minha página!
                                </p>
                            </div>
                            <div className="shrink-0 mt-16 hover:scale-110">
                                <img className="mt-32 h-60 w-60 border-4 rounded-full" src="/images/me.png" loading="lazy"/>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="mx-auto max-w-screen-lg px-3 py-6 border-t border-gray-600 mt-20 mb-2"></div>
                <section>
                    <div className="mx-auto max-w-screen-lg px-3 py-6">
                        <div className="mb-6 text-2xl font-bold">
                            <div className="flex items-baseline justify-between text-white">
                                <div>Meus
                                    <span className="bg-gradient-to-br from-sky-500 to-cyan-400 bg-clip-text text-transparent"> contatos</span>
                                </div>
                                <div className="text-base"></div>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-5">
                            <Link href="https://wa.me/5592991920999" className="hover:scale-110">
                                <div className="overflow-hidden rounded-md bg-slate-800">
                                    <div className="aspect-w-3 aspect-h-2">
                                        <img className="h-full w-full object-cover object-center" src="/images/whatsapp-logo.png" alt="Image post 2" loading="lazy"/>
                                    </div>
                                    <div className="px-3 pt-4 pb-6 text-center">
                                        <h2 className="text-xl font-semibold text-white">Whatsapp</h2>
                                    </div>
                                </div>
                            </Link>
                            <Link href="https://www.instagram.com/airtonigls/" className="hover:scale-110">
                                <div className="overflow-hidden rounded-md bg-slate-800">
                                    <div className="aspect-w-3 aspect-h-2">
                                        <img className="h-full w-full object-cover object-center" src="/images/instagram-logo.png" alt="Image post 3" loading="lazy"/>
                                    </div>
                                    <div className="px-3 pt-4 pb-6 text-center">
                                        <h2 className="text-xl font-semibold text-white">Instagram</h2>
                                    </div>
                                </div>
                            </Link>
                            <Link href="https://linkedin.com/in/airton-iglesias-0102aa216" className="hover:scale-110">
                                <div className="overflow-hidden rounded-md bg-slate-800">
                                    <div className="aspect-w-3 aspect-h-2">
                                        <img className="h-full w-full object-cover object-center" src="/images/linkedin-logo.png" alt="Image post 3" loading="lazy"/>
                                    </div>
                                    <div className="px-3 pt-4 pb-6 text-center">
                                        <h2 className="text-xl font-semibold text-white">Linkedin</h2>
                                    </div>
                                </div>
                            </Link>
                            <Link href="https://github.com/airton-iglesias" className="hover:scale-110">
                                <div className="overflow-hidden rounded-md bg-slate-800">
                                    <div className="aspect-w-3 aspect-h-2">
                                        <img className="h-full w-full object-cover object-center" src="/images/github-logo.png" alt="Image post 3" loading="lazy"/>
                                    </div>
                                    <div className="px-3 pt-4 pb-6 text-center">
                                        <h2 className="text-xl font-semibold text-white">Github</h2>
                                    </div>
                                </div>
                            </Link>
                            <Link href="#" className="hover:scale-110">
                                <div className="overflow-hidden rounded-md bg-slate-800">
                                    <div className="aspect-w-3 aspect-h-2">
                                        <img className="h-full w-full object-cover object-center" src="/images/email-logo.png" alt="Image post 3" loading="lazy"/>
                                    </div>
                                    <div className="px-3 pt-4 pb-6 text-center">
                                        <h2 className="text-xl font-semibold text-white">Email</h2>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </section>
                <div className="mx-auto max-w-screen-lg px-3 py-6 border-t border-gray-600 mt-20 mb-5"></div>
                <section>
                    <div className="mx-auto max-w-screen-lg px-3 py-6">
                        <div className="mb-6 text-2xl font-bold">
                            <div className="flex items-baseline justify-between text-white">
                                <div>Ferramentas que tenho
                                    <span className="bg-gradient-to-br from-sky-500 to-cyan-400 bg-clip-text text-transparent"> domínio</span>
                                </div>
                                <div className="text-base"></div>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                            <div>
                                <div className="overflow-hidden rounded-md bg-slate-800">
                                    <div className="aspect-w-3 aspect-h-2">
                                        <img className="h-full w-full object-cover object-center" src="/images/react-logo.png" alt="Image post 2" loading="lazy"/>
                                    </div>
                                    <div className="px-3 pt-4 pb-6 text-center">
                                        <h2 className="text-xl font-semibold text-white">React</h2>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="overflow-hidden rounded-md bg-slate-800">
                                    <div className="aspect-w-3 aspect-h-2">
                                        <img className="h-full w-full object-cover object-center" src="/images/nextjs-logo.png" alt="Image post 2" loading="lazy"/>
                                    </div>
                                    <div className="px-3 pt-4 pb-6 text-center">
                                        <h2 className="text-xl font-semibold text-white">NextJS</h2>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="overflow-hidden rounded-md bg-slate-800">
                                    <div className="aspect-w-3 aspect-h-2">
                                        <img className="h-full w-full object-cover object-center" src="/images/node-logo.png" alt="Image post 3" loading="lazy"/>
                                    </div>
                                    <div className="px-3 pt-4 pb-6 text-center">
                                        <h2 className="text-xl font-semibold text-white">NodeJS</h2>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="overflow-hidden rounded-md bg-slate-800">
                                    <div className="aspect-w-3 aspect-h-2">
                                        <img className="h-full w-full object-cover object-center" src="/images/mysql-logo.png" alt="Image post 3" loading="lazy"/>
                                    </div>
                                    <div className="px-3 pt-4 pb-6 text-center">
                                        <h2 className="text-xl font-semibold text-white">MySQL</h2>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="overflow-hidden rounded-md bg-slate-800">
                                    <div className="aspect-w-3 aspect-h-2">
                                        <img className="h-full w-full object-cover object-center" src="/images/javascript-logo.png" alt="Image post 3" loading="lazy"/>
                                    </div>
                                    <div className="px-3 pt-4 pb-6 text-center">
                                        <h2 className="text-xl font-semibold text-white">Java Script</h2>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="overflow-hidden rounded-md bg-slate-800">
                                    <div className="aspect-w-3 aspect-h-2">
                                        <img className="h-full w-full object-cover object-center" src="/images/html-logo.png" alt="Image post 3" loading="lazy"/>
                                    </div>
                                    <div className="px-3 pt-4 pb-6 text-center">
                                        <h2 className="text-xl font-semibold text-white">HTML</h2>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="overflow-hidden rounded-md bg-slate-800">
                                    <div className="aspect-w-3 aspect-h-2">
                                        <img className="h-full w-full object-cover object-center" src="/images/css-logo.png" alt="Image post 3" loading="lazy"/>
                                    </div>
                                    <div className="px-3 pt-4 pb-6 text-center">
                                        <h2 className="text-xl font-semibold text-white">CSS</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="mx-auto max-w-screen-lg px-3 py-6 border-t border-gray-600 mt-20 mb-5"></div>
                <section>
                    <div className="mx-auto max-w-screen-lg px-3 py-6">
                        <div className="mb-6 text-2xl font-bold">
                            <div className="flex items-baseline justify-between text-white">
                                <div>Ferramentas que tenho
                                    <span className="bg-gradient-to-br from-sky-500 to-cyan-400 bg-clip-text text-transparent"> conhecimento</span>
                                </div>
                                <div className="text-base"></div>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                            <div>
                                <div className="overflow-hidden rounded-md bg-slate-800">
                                    <div className="aspect-w-3 aspect-h-2">
                                        <img className="h-full w-full object-cover object-center" src="/images/php-logo.png" alt="Image post 2" loading="lazy"/>
                                    </div>
                                    <div className="px-3 pt-4 pb-6 text-center">
                                        <h2 className="text-xl font-semibold text-white">PHP</h2>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="overflow-hidden rounded-md bg-slate-800">
                                    <div className="aspect-w-3 aspect-h-2">
                                        <img className="h-full w-full object-cover object-center" src="/images/java-logo.png" alt="Image post 3" loading="lazy"/>
                                    </div>
                                    <div className="px-3 pt-4 pb-6 text-center">
                                        <h2 className="text-xl font-semibold text-white">Java</h2>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="overflow-hidden rounded-md bg-slate-800">
                                    <div className="aspect-w-3 aspect-h-2">
                                        <img className="h-full w-full object-cover object-center" src="/images/python-logo.png" alt="Image post 3" loading="lazy"/>
                                    </div>
                                    <div className="px-3 pt-4 pb-6 text-center">
                                        <h2 className="text-xl font-semibold text-white">Python</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <CheckCookies/>
                <Footer/>     
            </div>
        </>
    );
  }