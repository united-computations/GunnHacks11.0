"use client"
import { useState } from 'react';
import Section from '../../components/Section';


export default function About() {
    const [status,setStatus] = useState('B');

    return (
        <Section title="About" id="about">

            <div className="text-xl">I am a hackathon
                <div className="flex gap-5 my-3">
                    <div 
                        className={"flex-1 p-3 rounded-lg cursor-pointer border-2 " + (status === 'B' ? 'border-transparent bg-slate-200' : 'border-solid border-slate-200')}
                        onClick={() => setStatus('B')}
                    >
                        I'm a Beginner Coder
                    </div>
                    <div 
                        className={"flex-1 p-3 rounded-lg cursor-pointer border-2 " + (status === 'V' ? 'border-transparent bg-slate-200' : 'border-solid border-slate-200')}
                        onClick={() => setStatus('V')}
                    >
                        I'm a Veteran Coder
                    </div>
                </div>
            </div>

            { status==='B' ? <Beginner /> : <Veteran /> }
            {/*
            <p>
                Before you participate, please refer to the MLH Code of Conduct <a href="docs/mlh-code-of-conduct.pdf" target="_blank" rel="noopener noreferrer">here</a>
                and our hacker guide <a href="https://docs.google.com/document/d/1TPr6b7RYaQ9f5ruTVCpPF0TaenZ0EHUv00PDlF_rgUI/" target="_blank" rel="noopener noreferrer">here</a>.
            </p> */}

        </Section>
    )
}

const Beginner = () => {
    return <div className='text-lg'>
        <p className="mb-4">Make, Build, Create & Learn. Join GunnHaXI, the eleventh iteration of Gunn’s annual hackathon!</p>

        <p className="mb-4">
            In a hackathon, participants compete in teams to create a programming project within a given time limit. At the end, projects are then
            rated by a panel of judges, and the winners get cool swags and prizes! At GunnHaXI, the project can literally be anything, from games to data visualization,
            from Discord bots to AI-powered assistants. GunnHacks welcomes all beginner coders with varying coding experiences (or even none!)&#8212;there will be several coding workshops, from basic programming to
            web development and AI, to help you get started. Our experienced staff will also be available to offer technical help and advice.
            All you need to get started is an idea, and what you can do is just limited by your imagination!
        </p>

        <p className="mb-4">
            GunnHaXI is a 24-hour event, which means participants are given a 24-hour time frame to complete your project. (Of course, most participants 
            sleep a little.) At the end, participants will give a quick presentation and their project will be rated in 4 categories: technical difficulty,
            practicality, creativity, and user experience. The best projects in each category, as well as overall, will win prizes. A special prize is also reserved
            for he best beginner teams!
        </p>

        <p className="mb-4">
            GunnHaXI is a great opportunity for beginners to learn and become acquainted with coding. It’s a lot of fun, too, with a host of mini-events
            throughout the night. So whether you’re a programming veteran or someone who has never touched a line of code before, we invite you to join!
            The registration link is <a href="/register">here</a>. (Only PAUSD students are allowed to participate at this time.)
        </p>
        
        <p className="mb-4">
            GunnHaXI is dedicated to an inclusive experience for all. All hackers are expected to follow the <a href="/conduct" target="_blank" rel="noopener noreferrer">GunnHacks Code of Conduct</a>.
        </p>

    </div>
}

const Veteran = () => {
    return <div className='text-lg'>
        <p className="mb-4">Make, Build, Create & Learn. It’s GunnHacks 11.0, the tenth iteration of Gunn’s annual hackathon!</p>

        <p className="mb-4">
            GunnHacks is a 24-hour high school hackathon hosted by the United Computations club at Gunn High School.
            Throughout the years, we have continued this valued tradition to encourage students of all skill levels
            and backgrounds to make cool projects and share what they can do. Join us in-person this year in teams of
            up to four to create something amazing!
        </p>
        <p className="mb-4">
            Registration is open for PAUSD students! Register for GunnHacks <a href="/register">here</a>.
            All hackers are also expected to follow the <a href="/conduct" target="_blank" rel="noopener noreferrer">GunnHacks Code of Conduct</a>.
        </p>
    </div>
}
