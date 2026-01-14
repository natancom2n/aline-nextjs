'use client'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '../../../public/logo.png'
import { CatIcon, InstagramLogoIcon, FacebookLogoIcon, YoutubeLogoIcon, TiktokLogoIcon, PlusIcon } from "@phosphor-icons/react/dist/ssr"
import { useState } from 'react'

export function Menu(){

    const [ menuOpen, setMenuOpen ] = useState(false)
    const handleNav =() =>{
        setMenuOpen(!menuOpen);
    }
    return (
        <nav className="fixed top-0 left-0 w-full h-24 z-50 bg-white shadow-xl">
            <div className="flex justify-between items-center h-full w-full px-4 2xl:px-16">
                <Link href='/'>
                    {/* Logo Aline Vicenti */}
                    <Image
                        src={Logo}
                        alt="Aline Vicenti logo"
                        width={240}
                        className="cursor-pointer -ml-6 sm:ml-0 md:ml-0"
                    />
                    {/* <Image
                        src={Logo}
                        alt='Aline Vicenti logo'
                        width={300}
                        // height={75}
                        className='cursor-pointer'
                    /> */}
                </Link>
                <div className='hidden sm:flex'>
                    <ul className='hidden sm:flex'>
                        <Link href="/">
                            <li className='ml-10 uppercase houver:border-b text-xl'>Home</li>
                        </Link>
                        <Link href="#">
                            <li className='ml-10 uppercase houver:border-b text-xl'>Sobre</li>
                        </Link>
                        <Link href="#">
                            <li className='ml-10 uppercase houver:border-b text-xl'>Decantar Kids</li>
                        </Link>
                        {/* <Link href="#">
                            <li className='ml-10 uppercase houver:border-b text-xl'>Jogos</li>
                        </Link> */}
                        <Link href="#">
                            <li className='ml-10 uppercase houver:border-b text-xl'>Youtube</li>
                        </Link>
                        <Link href="#">
                            <li className='ml-10 uppercase houver:border-b text-xl'>Contato</li>
                        </Link>
                    </ul>
                </div>
                {/* Dark blur of right site */}
                <div
                    onClick={handleNav}
                    className={`fixed inset-0 bg-black/40 transition-opacity duration-300
                    ${menuOpen ? "opacity-100 visible" : "opacity-0 invisible"} sm:hidden`}

                />

                {/* Cat menu hamburger */}
                <div onClick={handleNav} className='sm:hidden cursor-pointer pl-24'>
                    <CatIcon
                        size={48}
                        weight="regular"
                    />
                </div>
            </div>
            <div   className={`fixed top-0 left-0 w-[65%] h-screen bg-[#ecf0f3] p-5
                transform transition-transform duration-300 ease-in-out
                ${menuOpen ? "translate-x-0" : "-translate-x-full"} sm:hidden`}
            >
                <div className='flex w-full items-center justify-end'>
                    <div onClick={handleNav} className={
                        menuOpen
                        ? "block"
                        : "hidden"
                    }>
                        <PlusIcon
                            size={35}
                            className='rotate-45'
                        />
                    </div>
                </div>
                <div className='flex-col py-4'>
                    <ul className={
                        menuOpen
                        ? "block"
                        : "hidden"
                    }>
                        <Link href="/">
                            <li
                                onClick={() => setMenuOpen(false)}
                                className='py-4 cursor-pointer'
                            >
                                Home
                            </li>
                        </Link>
                        <Link href="#">
                            <li
                                onClick={() => setMenuOpen(false)}
                                className='py-4 cursor-pointer'
                            >
                                Sobre
                            </li>
                        </Link>
                        <Link href="#">
                            <li
                                onClick={() => setMenuOpen(false)}
                                className='py-4 cursor-pointer'
                            >
                                Decantar Kids
                            </li>
                        </Link>
                        {/* <Link href="#">
                            <li
                                onClick={() => setMenuOpen(false)}
                                className='py-4 cursor-pointer'
                            >
                                Jogos
                            </li>
                        </Link> */}
                        <Link href="#">
                            <li
                                onClick={() => setMenuOpen(false)}
                                className='py-4 cursor-pointer'
                            >
                                Youtube
                            </li>
                        </Link>
                        <Link href="#">
                            <li
                                onClick={() => setMenuOpen(false)}
                                className='py-4 cursor-pointer'
                            >
                                Contato
                            </li>
                        </Link>
                    </ul>
                    <div className={
                        menuOpen
                        ? "block flex flex-row justify-around pt-10 items-center"
                        : "hidden"
                    }>

                        <Link href="https://instagram.com">
                            <InstagramLogoIcon
                            size={30}
                            weight="bold"
                            className='cursor-pointer'
                            />
                        </Link>
                        <Link href="https://facebook.com">
                            <FacebookLogoIcon
                            size={30}
                            weight="bold"
                            className='cursor-pointer'
                            />
                        </Link>
                        <Link href="https://youtube.com">
                            <YoutubeLogoIcon
                            size={30}
                            weight="bold"
                            className='cursor-pointer'
                            />
                        </Link>
                        <Link href="https://tiktok.com">
                            <TiktokLogoIcon
                            size={30}
                            weight="bold"
                            className='cursor-pointer'
                            />
                        </Link>

                    </div>
                </div>
            </div>
        </nav>

    )
}


