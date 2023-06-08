"use client";
import { Fragment, useContext, useEffect, useState } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import { GlobalContext } from '../context/GlobalContext';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const navegation = [
    { name: 'Início', href: '/',},
    { name: 'Sobre', href: '/sobre',},
    { name: 'Projetos', href: '/projetos', },
]
const navegationLogged = [
    { name: 'Início', href: '/', },
    { name: 'Sobre', href: '/sobre', },
    { name: 'Projetos', href: '/projetos', },
    { name: 'Dashboard', href: '/dashboard',},
]
const navegationWithYardPass = [
    { name: 'Início', href: '/',},
    { name: 'Sobre', href: '/sobre',},
    { name: 'Projetos', href: '/projetos',},
    { name: 'Dashboard', href: '/dashboard',},
    { name: 'YardPass', href: '/yardpass'},
]

export default function Header(pathname) {

    const [yardPassPath, setYardPassPathPath] = useState(false);
    const router = useRouter();
    const { isLogged, yardPassAccountExist,setIsLoggedTrue, setIsLoggedFalse} = useContext(GlobalContext);
    

    useEffect(() => {
        if(pathname.pathname === "/yardpass"){
            setYardPassPathPath(true)
        }
        else{
            setYardPassPathPath(false)
        }

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
            setIsLoggedFalse();
            router.replace("/");
            window.location.reload();
        }
        else if(data.message == "errorLogout"){    
            setIsLoggedTrue();
            toast.error("Falha ao fazer logout");
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
                            {isLogged && yardPassAccountExist ? (
                                <>
                                    {navegationWithYardPass.map((item) => (
                                        <li  key={item.name}>
                                            <Link href={item.href} className={classNames(item.href == pathname.pathname  ? "text-blue-500" : "lg:hover:text-blue-500 text-white")}  
                                            >{item.name}</Link>
                                        </li>
                                    ))}
                                </>
                            ): isLogged ? (
                                <>
                                    {navegationLogged.map((item) => (
                                        <li  key={item.name}>
                                            <Link href={item.href} className={classNames(item.href == pathname.pathname  ? "text-blue-500" : "lg:hover:text-blue-500 text-white")}  
                                            >{item.name}</Link>
                                        </li>
                                    ))}
                                </>
                            ):(
                                <>
                                    {navegation.map((item) => (
                                        <li  key={item.name}>
                                            <Link href={item.href} className={classNames(item.href == pathname.pathname  ? "text-blue-500" : "lg:hover:text-blue-500 text-white")}  
                                            >{item.name}</Link>
                                        </li>
                                    ))}
                                </>
                            )}
                        </ul>
                    </div>
                    
                    <div className="flex items-center lg:order-2">
                        {isLogged ? 
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
                                                <Link href="/comingsoon" className={classNames(active ? 'bg-blue-500' : '', 'block px-4 py-2 rounded-lg text-sm text-gray-700')}>Conta</Link>)}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                                <Link href="/comingsoon" className={classNames(active ? 'bg-blue-500' : '', 'block px-4 py-2 rounded-lg text-sm text-gray-700')}>Configurações</Link>)}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                                <Link href='#' onClick={cookiesLogout} className={classNames(active ? 'bg-blue-500' : '', 'block px-4 py-2 rounded-lg text-sm text-gray-700')}>Sair</Link>)}
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
                                                <Link href="/auth/login" className={classNames(active ? 'bg-blue-500' : '', 'block px-4 py-2 rounded-lg text-sm text-gray-700')}>Entrar</Link>)}
                                        </Menu.Item>
                                    </Menu.Items>
                                </Transition>
                            </Menu>
                        )   }
                        
                        {isLogged && yardPassAccountExist?
                            (
                                <>
                                    <Disclosure as="nav" className="lg:hidden">
                                        {({ open }) => (
                                            <>
                                                <Disclosure.Button className="inline-flex z-10 items-center justify-center rounded-lg p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                                    {open ? (<XMarkIcon className="block h-6 w-6" aria-hidden="true" />) : (<Bars3Icon className="block h-6 w-6" aria-hidden="true" />)}
                                                </Disclosure.Button>
                                            
                                                <Disclosure.Panel className="absolute left-0 mt-4 w-full h-screen rounded-lg text-center bg-white text-gray-500 ">
                                                    <ul>
                                                        {navegationWithYardPass.map((item) => (
                                                            <li  key={item.name}>
                                                                <Link href={item.href} className={"block w-full h-14 py-4 hover:bg-gray-700 hover:text-white"}  
                                                                >{item.name}</Link>
                                                            </li>))
                                                        }
                                                    </ul>
                                                </Disclosure.Panel>
                                            </>
                                        )}
                                    </Disclosure>
                                </>
                            ): 
                            isLogged? (
                                <>
                                    <Disclosure as="nav" className="lg:hidden">
                                        {({ open }) => (
                                            <>
                                                <Disclosure.Button className="inline-flex z-10 items-center justify-center rounded-lg p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                                    {open ? (<XMarkIcon className="block h-6 w-6" aria-hidden="true" />) : (<Bars3Icon className="block h-6 w-6" aria-hidden="true" />)}
                                                </Disclosure.Button>
                                            
                                                <Disclosure.Panel className="absolute left-0 mt-4 w-full h-screen rounded-lg text-center bg-white text-gray-500 ">
                                                    <ul>
                                                        {navegationLogged.map((item) => (
                                                            <li  key={item.name}>
                                                                <Link href={item.href} className={"block w-full h-14 py-4 hover:bg-gray-700 hover:text-white"}>{item.name}</Link>
                                                            </li>))
                                                        }
                                                    </ul>
                                                </Disclosure.Panel>
                                            </>
                                        )}
                                    </Disclosure>
                                </>
                            ):(
                                <>
                                    <Disclosure as="nav" className="lg:hidden">
                                        {({ open }) => (
                                            <>
                                                <Disclosure.Button className="inline-flex z-10 items-center justify-center rounded-lg p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                                    {open ? (<XMarkIcon className="block h-6 w-6" aria-hidden="true" />) : (<Bars3Icon className="block h-6 w-6" aria-hidden="true" />)}
                                                </Disclosure.Button>
                                            
                                                <Disclosure.Panel className="absolute left-0 mt-4 w-full h-screen rounded-lg text-center bg-white text-gray-500 ">
                                                    <ul>
                                                        {navegation.map((item) => (
                                                            <li  key={item.name}>
                                                                <Link href={item.href} className={"block w-full h-14 py-4 hover:bg-gray-700 hover:text-white"}>{item.name}</Link>
                                                            </li>))
                                                        }
                                                    </ul>
                                                </Disclosure.Panel>
                                            </>
                                        )}
                                    </Disclosure>
                                </>
                            ) 
                        }
                    </div>

                </div>
            </nav>
        </header>
    </>
  )
}
