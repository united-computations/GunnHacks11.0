import type { Metadata } from 'next';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
    title: 'Team Selection Form | GunnHaX'
}

export default function Guide() {
    redirect("https://forms.gle/MvuqryanBg1629UF7");
}
