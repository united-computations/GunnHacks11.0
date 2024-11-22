"use client";
import { Overpass } from '@next/font/google';
import { RiInstagramFill, RiDiscordFill } from 'react-icons/ri';
import { FaEnvelope } from 'react-icons/fa';
import { useEffect, useRef, useState } from 'react';

const overpass = Overpass({
    subsets: ['latin']
});

const msToTime = (time: number) => {
    const ms = time % 1000;
    time = Math.floor(time / 1000); // Convert to seconds
    const sec = time % 60;
    time = Math.floor(time / 60); // Convert to minutes
    const min = time % 60;
    time = Math.floor(time / 60); // Convert to hours
    const hours = time % 24;
    const days = Math.floor(time / 24); // Convert to days

    const parts = [];
    if (days > 0) parts.push(`${days} day${days > 1 ? 's' : ''}`);
    if (hours > 0) parts.push(`${hours} hour${hours > 1 ? 's' : ''}`);
    if (min > 0) parts.push(`${min} minute${min > 1 ? 's' : ''}`);
    if (sec >= 0) parts.push(`${sec} second${sec > 1 ? 's' : ''}`);

    return parts.join(', ');
};

export default function Heading() {
    const [time, setTime] = useState<null | number>(null);
    const START = new Date('2025-01-25T15:00:00').getTime();
    const END = new Date('2025-01-26T15:00:00').getTime();

    // Reference for the typewriter effect
    const typedRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://cdn.jsdelivr.net/npm/typed.js@2.0.12";
        script.async = true;

        script.onload = () => {
            if (typedRef.current && typeof window.Typed !== "undefined") {
                const typed = new (window as any).Typed(typedRef.current, {
                    strings: [
                        "Make, Build, Create & Learn.",
                        "It’s GunnHacks 11.0.",
                        "Gunn’s 24-hour high school hackathon!",
                    ],
                    typeSpeed: 50,
                    backSpeed: 25,
                    backDelay: 1500,
                    loop: true,
                });

                // Cleanup Typed instance on component unmount
                return () => typed.destroy();
            }
        };

        document.body.appendChild(script);

        return () => {
            // Clean up script
            document.body.removeChild(script);
        };
    }, []);

    useEffect(() => {
        setTime(new Date().getTime());
        const interval = setInterval(() => {
            setTime(new Date().getTime());
        }, 100);
        return () => clearInterval(interval);
    }, []);

    return (
        <section id="heading" className="text-white text-center h-screen relative flex flex-col items-center justify-center p-5 pb-[20vh]">
            <div className={`mb-2 relative flex flex-col items-center md:block ${overpass.className}`}>
                <span className="pt-2 text-6xl md:text-9xl tracking-wider">GunnHa<span className="invisible">XI</span></span>
                <img className="absolute w-32 md:w-64 left-[15rem] top-[-1.6rem] md:left-[calc(26rem)] md:top-[-2.9rem]" src="/X.svg" alt="X Logo" />
                <div className="ml-3 md:mt-[-.5rem] flex flex-col items-center md:block">
                    <p className="mb-2 w-96 text-base mt-16 md:mt-0 md:text-left gradient-text">
                        <span ref={typedRef}></span>
                        <br />
                        January 25-26, 2025 | <a target="_blank" rel="noopener noreferrer" href="https://maps.app.goo.gl/rjAXwNZZnwSzQrLW8">Gunn High School Library</a>
                        <br />
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
                {time !== null
                    ? time < START
                        ? `The hacking period will start in ${msToTime(START - time)}.`
                        : time < END
                        ? `The hacking period has started and will end in ${msToTime(END - time)}.`
                        : `The hacking period has ended.`
                    : `Loading...`}
            </div>
            <div className="text-2xl mt-3 flex gap-2 items-center">
                <span className="text-[#F47722] text-5xl">[</span>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLScVPB66QN6VdTLCzdj91xYIkH0RGDLeJ_gAU7V6TYRIrG1dRw/viewform" rel="noopener noreferrer" target="_blank">Register Here</a>
                <span className="text-[#F47722] text-5xl">]</span>
            </div>
        </section>
    );
}
