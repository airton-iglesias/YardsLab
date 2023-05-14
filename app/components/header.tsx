"use client";
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

export default function Header() {
  return (
    <>
        <header>
            <nav className="fixed z-50 w-full bg-slate-800 border-gray-200 dark:bg-gray-900">
                <div className="flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="/" className="flex items-center">
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">YardsLab</span>
                    </a>

                    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="mobile-menu-2">
                        <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0  dark:border-gray-700">
                            <li>
                                <a href="/" className="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Início</a>
                            </li>
                            <li>
                                <a href="./sobre" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Sobre</a>
                            </li>
                            <li>
                                <a href="./comingsoon" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Projetos</a>
                            </li>
                        </ul>
                    </div>

                    <div className="flex items-center md:order-2">
                        <Menu as="div" className="relative ml-3 p-2 text-gray-500 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                            <div>
                                <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                    <img className="h-8 w-8 rounded-full bg-white" src="/images/user-icon.png" alt="" loading="lazy"/>
                                </Menu.Button>
                            </div>
                            <Transition  as={Fragment} enter="transition ease-out duration-100" enterFrom="transform opacity-0 scale-95" enterTo="transform opacity-100 scale-100" leave="transition ease-in duration-75" leaveFrom="transform opacity-100 scale-100" leaveTo="transform opacity-0 scale-95">
                                <Menu.Items className="absolute right-0 z-10 mt-2 text-center w-32 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                    <Menu.Item>
                                        {({ active }) => (
                                            <a href="./comingsoon" className={classNames(active ? 'bg-gray-200' : '', 'block px-4 py-2 rounded-md text-sm text-gray-700')}>Entrar</a>)}
                                    </Menu.Item>
                                </Menu.Items>
                            </Transition>
                        </Menu>
                        
                        <Disclosure as="nav" className="sm:hidden">
                            {({ open }) => (
                                <>
                                    <Disclosure.Button className="inline-flex z-10 items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                        {open ? (<XMarkIcon className="block h-6 w-6" aria-hidden="true" />) : (<Bars3Icon className="block h-6 w-6" aria-hidden="true" />)}
                                    </Disclosure.Button>
                                
                                    <Disclosure.Panel className="absolute left-0 mt-4 w-full rounded-md text-center bg-white text-gray-500">
                                        <ul>
                                            <li><Disclosure.Button className="w-full px-4 rounded-md py-4 text-sm hover:bg-gray-200 text-gray-700">Início</Disclosure.Button></li>
                                            <li><Disclosure.Button className="w-full px-4 rounded-md py-4 text-sm hover:bg-gray-200 text-gray-700">Sobre</Disclosure.Button></li>
                                            <li><Disclosure.Button className="w-full px-4 rounded-md py-4 text-sm hover:bg-gray-200 text-gray-700">Projetos</Disclosure.Button></li>
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
