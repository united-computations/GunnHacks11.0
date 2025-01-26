import type { Metadata } from 'next';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
    title: 'Code of Conduct | GunnHacks'
}

export default function Register() {
    redirect("https://docs.google.com/document/d/e/2PACX-1vRV7AHc6eftjfLNjDAVeSo33rkgmD9E37tj9sFDsEAnKrLxFzX-KFZY6ajFEZxbQZmO_l_3KNaR0Wm3/pub");
    // return (
    //    <div className="flex justify-center mt-12 text-white text-5xl">
    //         Coming soon...
    //     </div>
    // )
}
