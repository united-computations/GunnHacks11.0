'use client';

import Link from 'next/link';
import { useScroll } from '../util/useScroll';


export default function Header() {
    const scroll = useScroll();

    return (
        <header className={'fixed text-white text-lg z-20 top-0 inset-x-0 hidden sm:flex gap-5 px-4 py-2 transition duration-200 backdrop-blur-sm ' + (scroll > 0 ? 'bg-black/40 shadow-md' : 'hover:bg-black/40 hover:shadow-md')}>
            <a href="#">
                <img className="w-8 h-8" src="/lambda.png" alt="lambda" />
            </a>
            <nav className="flex gap-6 items-center">
                <a href="#about" className="no-underline">About</a>
                {/* <a href="#schedule" className="no-underline">Schedule</a> */}
                {/* <a href="#prizes" className="no-underline">Prizes</a> */}
                <a href="#faq" className="no-underline">FAQ</a>
                {/* <a href="#sponsors" className="no-underline">Sponsors</a> */}
                {/* <Link href="/register" className="no-underline">Register</Link> */}
            </nav>
        </header>
    )
}
