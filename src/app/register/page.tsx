import type { Metadata } from 'next';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
    title: 'Register | GunnHaX'
}

export default function Register() {
    redirect("https://docs.google.com/forms/d/e/1FAIpQLSdF_KFH0pH_ryAx3uYglID2ITeXvoTaHfTh2i9YMgnlwLC91A/viewform");
    // return (
    //     <div className="flex justify-center">
    //         <iframe
    //             src="https://docs.google.com/forms/d/e/1FAIpQLSdF_KFH0pH_ryAx3uYglID2ITeXvoTaHfTh2i9YMgnlwLC91A/viewform?usp=sf_link&embedded=true"
    //             className="absolute border-none w-full h-full inset-0 mx-auto"
    //         >
    //             Loading…
    //         </iframe>
    //     </div>
    // )
}
