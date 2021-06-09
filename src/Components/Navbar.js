import React from 'react';

const navigation = [
    { name: 'About', href: '#' },
    { name: 'Sponsors', href: '#' },
    { name: 'Creators', href: '#' },
    { name: 'Contact Us', href: '#' },
  ]

const Navbar = () => {
    return (
        <>
    <header className="bg-gray-900">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
            <div className="w-full py-6 flex items-center justify-between border-b border-indigo-500 lg:border-none">
            <div className="flex items-center">
                <a href="www.me.com">
                <span className="sr-only">Workflow</span>
                <svg class="logosvg h-20 w-20 text-red-500"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" /></svg>
                <p className="logo">Dome</p>
                </a>
                <div className="hidden ml-10 space-x-8 lg:block">
                {navigation.map((link) => (
                    <a key={link.name} href={link.href} className="text-base font-medium text-white hover:text-indigo-50">
                    {link.name}
                    </a>
                ))}
                </div>
            </div>
            <div className="ml-10 space-x-4">
                <a
                href="www.me.com"
                className="inline-block bg-white py-2 px-4 border border-transparent rounded-md text-base font-medium text-indigo-600 hover:bg-indigo-50"
                >
                Sign up
                </a>
            </div>
            </div>
            <div className="py-4 flex flex-wrap justify-center space-x-6 lg:hidden">
            {navigation.map((link) => (
                <a key={link.name} href={link.href} className="text-base font-medium text-white hover:text-indigo-50">
                {link.name}
                </a>
            ))}
            </div>
        </nav>
    </header>
        </>
    )
}

export default Navbar
