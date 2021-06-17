import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';


const navigation = [
    { name: 'About', href: '#' },
    { name: 'Sponsors', href: '#' },
    { name: 'Creators', href: '#' },
    { name: 'Contact Us', href: '#' },
  ]

const Navbar = () => {
    return (
        <div className="relative bg-white overflow-hidden">
            <div className="hidden lg:block lg:absolute lg:inset-0" aria-hidden="true">
            <svg
                className="absolute top-0 left-1/2 transform translate-x-64 -translate-y-8"
                width={640}
                height={784}
                fill="none"
                viewBox="0 0 640 784"
            >
                <defs>
                    <div className="heropatterns">
                    <p>ha</p>
                    </div>
                <pattern
                    id="9ebea6f4-a1f5-4d96-8c4e-4c2abf658047"
                    x={118}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                >
                    <rect x={0} y={0} width={4} height={4} className="text-red-600" fill="currentColor" />
                </pattern>
                </defs>
                <rect y={72} width={640} height={640} className="text-red-50" fill="currentColor" />
                <rect x={118} width={404} height={784} fill="url(#9ebea6f4-a1f5-4d96-8c4e-4c2abf658047)" />
            </svg>
            </div>
            <div className="relative pt-6 pb-16 sm:pb-24 lg:pb-32">
            <Popover>
            {({ open }) => (
                <>
                <nav
                    className="relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6"
                    aria-label="Global"
                >
                    <div className="flex items-center flex-1">
                    <div className="flex items-center justify-between w-full md:w-auto">
                        <a href="https://www.me.com">
                        <span className="sr-only">Workflow</span>
                        <svg className="logosvg h-20 w-20 text-red-500"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" /></svg>
                        <p className="logo">Dome</p>
                        </a>
                        <div className="-mr-2 flex items-center md:hidden">
                        <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                            <span className="sr-only">Open main menu</span>
                            <MenuIcon className="h-6 w-6" aria-hidden="true" />
                        </Popover.Button>
                        </div>
                    </div>
                    <div className="hidden md:block md:ml-10 md:space-x-10">
                        {navigation.map((item) => (
                        <a key={item.name} href={item.url} className="font-medium text-gray-500 hover:text-gray-900">
                            {item.name}
                        </a>
                        ))}
                    </div>
                    </div>
                    <div className="hidden md:block text-right">
                    <span className="inline-flex rounded-md shadow-md ring-1 ring-black ring-opacity-5">
                        <a
                        href="/auth/google"
                        className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-red-600 bg-white hover:bg-gray-50"
                        >
                        Log in
                        </a>
                    </span>
                    </div>
                </nav>

                <Transition
                    show={open}
                    as={Fragment}
                    enter="duration-150 ease-out"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="duration-100 ease-in"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    <Popover.Panel
                    focus
                    static
                    className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
                    >
                    <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                        <div className="px-5 pt-4 flex items-center justify-between">
                        <div>
                        <svg className="logosvg h-20 w-20 text-red-500"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" /></svg>
                        <p className="logo">Dome</p>
                        </div>
                        <div className="-mr-2">
                            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                            <span className="sr-only">Close main menu</span>
                            <XIcon className="h-6 w-6" aria-hidden="true" />
                            </Popover.Button>
                        </div>
                        </div>
                        <div className="px-2 pt-2 pb-3 space-y-1">
                        {navigation.map((item) => (
                            <a
                            key={item.name}
                            href={item.href}
                            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                            >
                            {item.name}
                            </a>
                        ))}
                        </div>
                        <a
                        href="www.me.com"
                        className="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100"
                        >
                        Log in
                        </a>
                    </div>
                    </Popover.Panel>
                </Transition>
                </>
            )}
            </Popover>
        </div>
        </div>

        

    )
}

export default Navbar
