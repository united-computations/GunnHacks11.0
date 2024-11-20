"use client";
import { Overpass } from '@next/font/google';
import { RiInstagramFill, RiDiscordFill } from 'react-icons/ri';
import { FaEnvelope } from 'react-icons/fa';
import { useEffect, useState } from 'react';

const overpass = Overpass({
    subsets: ['latin']
});

const msToTime = (time: number) => {
    let ms = String(time % 1000).padStart(3, '0');
    time = Math.floor(time / 1000);
    let sec = String(time % 60).padStart(2, '0');
    time = Math.floor(time / 60);
    let min = String(time % 60).padStart(2, '0');
    time = Math.floor(time / 60);
    let hours = String(time).padStart(2, '0');
    return `${hours / 24} days ${hours % 24} hours ${min} minutes and ${sec} seconds`;
};

export default function Heading() {
    const [time, setTime] = useState<null | number>(null);
    const END = new Date('2025-01-25T15:00:00').getTime();

    useEffect(() => {
        setTime(new Date().getTime());
        const inv = setInterval(() => {
            setTime(new Date().getTime());
        }, 100);
        return () => clearInterval(inv);
    }, []);

    return (
        <section id="heading" className="text-white text-center h-screen relative flex flex-col items-center justify-center p-5 pb-[20vh]">
            <div className={`mb-2 relative flex flex-col items-center md:block ${overpass.className}`}>
                <span className="pt-2 text-6xl md:text-9xl tracking-wider">GunnHa<span className="invisible">XI</span></span>
                <img className="absolute w-32 md:w-64 left-[15rem] top-[-1.6rem] md:left-[calc(26rem)] md:top-[-2.9rem]" src="/X.svg" alt="X Logo" />
                <div className="ml-3 md:mt-[-.5rem] flex flex-col items-center md:block">
                    <p className="mb-2 w-96 text-base mt-16 md:mt-0 md:text-left">
                        Make, Build, Create & Learn. It’s GunnHacks 11.0, Gunn’s 24‑hour high school hackathon!<br />
                        January 25-26, 2025 | Gunn High School.<br />
                    </p>
                    <div className="flex gap-4 text-2xl">
                        <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/gunn.hacks/" aria-label="Instagram">
                            <RiInstagramFill />
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href="https://discord.gg/pyJmTpRWZJ" aria-label="Discord">
                            <RiDiscordFill />
                        </a>
                        <a href="mailto:ghshacks@gmail.com" aria-label="Email">
                            <FaEnvelope />
                        </a>
                    </div>
                </div>
            </div>
            <div className="mt-10 px-16 py-4 text-2xl font-bold">
                {time && (time < END ? `The hacking period will start in ${msToTime(END - time)}.` : `The hacking period has started.`)}
            </div>
            <div className="text-2xl mt-3 flex gap-2 items-center">
                <span className="text-[#F47722] text-5xl">[</span>
                <a href="https://forms.gle/5JebCYpeFf2eErzY8" rel="noopener noreferrer" target="_blank">Register Here</a>
                <span className="text-[#F47722] text-5xl">]</span>
            </div>
            
        </section>
    );
}
