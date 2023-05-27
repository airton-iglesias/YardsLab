"use client";
import { Fragment, useEffect, useState } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import toast, { Toaster } from 'react-hot-toast';

const navegation = [
    { name: 'Início', href: '/', current: true},
    { name: 'Sobre', href: '/sobre', current: false},
    { name: 'Projetos', href: '/projetos', current: false},
]


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Header(pathname) {

    const [dashboardPath, setDashboardPath] = useState(false);
    const [isLogged, setLogged] = useState(false);
    const router = useRouter();

    useEffect(() => {
        if(pathname.pathname === "/dashboard"){
            setDashboardPath(true)
        }
        else{
            setDashboardPath(false)
        }


        const reqData = async () =>  {

            const req = await fetch('/api/controllers/cookies/cookieExist', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            })

            const data = await req.json();

            if(data.message == "cookieExist"){
                setLogged(true)
            }
            else if(data.message == "NotExist"){    
                setLogged(false)
            }
        }
            
        reqData()

    }, []);

    const cookiesLogout = async () =>{
        const req = await fetch('/api/controllers/cookies/cookieLogout', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                
            },
        })

        const data = await req.json();

        if(data.message == "logoutSucessfull"){
            setLogged(false)
            router.push("/")
            
        }
        else if(data.message == "errorLogout"){    
            setLogged(true)
            toast.error("Falha ao fazer logout")
        }
    }


  return (
    <>
        <header>
            <nav className="fixed z-20 w-full bg-slate-800 border-gray-200 dark:bg-gray-900">
                <div className="flex flex-wrap items-center justify-between mx-auto p-4">
                    <Link href="/" className="flex items-center">
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">YardsLab</span>
                    </Link>

                    <div className="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                        <ul className="flex flex-col font-medium p-4 lg:p-0 mt-4 border border-gray-100 rounded-lg lg:flex-row lg:space-x-8 lg:mt-0 lg:border-0  dark:border-gray-700">
                            {navegation.map((item) => (
                                <li  key={item.name}>
                                    <Link href={item.href} className={classNames(item.href == pathname.pathname  ? "text-blue-500" : "lg:hover:text-blue-500 text-white")}  
                                    >{item.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="flex items-center lg:order-2">
                        {dashboardPath ? (
                            <Disclosure as="nav" className="lg:hidden">
                                {({ open }) => (
                                    <>
                                        <Disclosure.Button className="inline-flex z-10 items-center justify-center rounded-lg p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                            {open ? (<XMarkIcon className="block h-6 w-6" aria-hidden="true" />) : 
                                                (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                            )}
                                        </Disclosure.Button>
                                    
                                        <Disclosure.Panel className="absolute left-0 mt-4 w-full h-screen rounded-lg text-center bg-white text-gray-500">
                                            <ul>
                                                <li>
                                                    <Link href="/" className="block w-full h-14 py-4 hover:bg-gray-700 hover:text-white mb-2 mt-5" aria-current="page">Início</Link>
                                                </li>
                                                <li className="">
                                                    <Link href="./sobre" className="block w-full h-14 py-4 hover:bg-gray-700 hover:text-white mb-2">Sobre</Link>
                                                </li>
                                                <li>
                                                    <Link href="./projetos" className="block w-full h-14 py-4 hover:bg-gray-700 hover:text-white">Projetos</Link>
                                                </li>
                                            </ul>
                                        </Disclosure.Panel>
                                    </>
                                )}
                            </Disclosure>  
                        ):(<></>)}

                        {isLogged? 
                        (
                            <Menu as="div" className="relative p-2 text-gray-500 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                                <div>
                                    <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                        <img className="h-8 w-8 rounded-full bg-white" src="/images/user-icon.png" alt="" loading="lazy"/>
                                    </Menu.Button>
                                </div>
                                <Transition  as={Fragment} enter="transition ease-out duration-100" enterFrom="transform opacity-0 scale-95" enterTo="transform opacity-100 scale-100" leave="transition ease-in duration-75" leaveFrom="transform opacity-100 scale-100" leaveTo="transform opacity-0 scale-95">
                                    <Menu.Items className="absolute right-0 z-10 mt-2 text-center w-32 origin-top-right rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                        <Menu.Item>
                                            {({ active }) => (
                                                <Link href="/dashboard" className={classNames(active ? 'bg-blue-500' : '', 'block px-4 py-2 rounded-lg text-sm text-gray-700')}>Dashboard</Link>)}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                                <Link href="#" className={classNames(active ? 'bg-blue-500' : '', 'block px-4 py-2 rounded-lg text-sm text-gray-700')}>Conta</Link>)}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                                <Link href="#" className={classNames(active ? 'bg-blue-500' : '', 'block px-4 py-2 rounded-lg text-sm text-gray-700')}>Configurações</Link>)}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                                <Link href='' onClick={cookiesLogout} className={classNames(active ? 'bg-blue-500' : '', 'block px-4 py-2 rounded-lg text-sm text-gray-700')}>Sair</Link>)}
                                        </Menu.Item>
                                    </Menu.Items>
                                </Transition>
                            </Menu>                    
                        ):
                        (
                            <Menu as="div" className="relative p-2 text-gray-500 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                                <div>
                                    <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                        <img className="h-8 w-8 rounded-full bg-white" src="/images/user-icon.png" alt="" loading="lazy"/>
                                    </Menu.Button>
                                </div>
                                <Transition  as={Fragment} enter="transition ease-out duration-100" enterFrom="transform opacity-0 scale-95" enterTo="transform opacity-100 scale-100" leave="transition ease-in duration-75" leaveFrom="transform opacity-100 scale-100" leaveTo="transform opacity-0 scale-95">
                                    <Menu.Items className="absolute right-0 z-10 mt-2 text-center w-32 origin-top-right rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                        <Menu.Item>
                                            {({ active }) => (
                                                <Link href="./auth/login" className={classNames(active ? 'bg-blue-500' : '', 'block px-4 py-2 rounded-lg text-sm text-gray-700')}>Entrar</Link>)}
                                        </Menu.Item>
                                    </Menu.Items>
                                </Transition>
                            </Menu>
                        )   }
                        
                        <Disclosure as="nav" className="lg:hidden">
                            {({ open }) => (
                                <>
                                    <Disclosure.Button className="inline-flex z-10 items-center justify-center rounded-lg p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                        {open ? (<XMarkIcon className="block h-6 w-6" aria-hidden="true" />) : (<Bars3Icon className="block h-6 w-6" aria-hidden="true" />)}
                                    </Disclosure.Button>
                                
                                    <Disclosure.Panel className="absolute left-0 mt-4 w-full h-screen rounded-lg text-center bg-white text-gray-500 ">
                                        <ul>
                                            <li>
                                                <Link href="/" className="block w-full h-14 py-4 hover:bg-gray-700 hover:text-white mb-2 mt-5" aria-current="page">Início</Link>
                                            </li>
                                            <li className="">
                                                <Link href="./sobre" className="block w-full h-14 py-4 hover:bg-gray-700 hover:text-white mb-2">Sobre</Link>
                                            </li>
                                            <li>
                                                <Link href="./projetos" className="block w-full h-14 py-4 hover:bg-gray-700 hover:text-white">Projetos</Link>
                                            </li>
                                        </ul>
                                    </Disclosure.Panel>
                                </>
                            )}
                        </Disclosure>
                    </div>

                </div>
            </nav>
        </header>
    </>
  )
}
