import type { Metadata } from 'next';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
    title: 'Devpost | GunnHacks'
}

export default function Guide() {
    redirect("https://gunnhacks11.devpost.com/");
}
