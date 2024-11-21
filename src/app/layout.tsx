import { ReactNode } from 'react';
import { Abel } from '@next/font/google';

import '../styles/globals.css';


const abel = Abel({
  weight: ['400'],
  subsets: ['latin']
});

export default function Layout(props: { children: ReactNode }) {
  return (
    <html lang="en" className={"scroll-smooth " + abel.className}>
      <head>
        <title>GunnHaXI</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* <link rel="icon" type="image/png" href="/favicon.png" /> */}
      </head>
      <body className="after:fixed after:inset-x-0 after:top-0 after:h-screen after:bg-[url('/bg.svg')] after:bg-cover after:bg-center after:-z-10">
        {props.children}
      </body>
    </html>
  )
}
