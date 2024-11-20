import type { Metadata } from 'next';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
    title: 'Register | GunnHaXI'
}

export default function Register() {
    redirect("https://docs.google.com/forms/d/e/1FAIpQLScVPB66QN6VdTLCzdj91xYIkH0RGDLeJ_gAU7V6TYRIrG1dRw/viewform");
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
