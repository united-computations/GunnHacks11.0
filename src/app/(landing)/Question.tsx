'use client';

import {ReactNode, useState} from 'react';


export default function Question(props: {q: string, children: ReactNode}) {
    const {q, children} = props;
    const [open, setOpen] = useState(false);

    // TODO: use `@headlessui/react` `Disclosure`
    return (
        <div className="m-2">
            <div className="flex gap-4 cursor-pointer text-xl mb-3" onClick={() => setOpen(!open)}>
                <h3>{open ? '–' : '+'}</h3>
                <h3>{q}</h3>
            </div>
            {open && (
                <p>{children}</p>
            )}
        </div>
    )
}
