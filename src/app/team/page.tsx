import type { Metadata } from 'next';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
    title: 'Team Selection Form | GunnHaX'
}

export default function Guide() {
    redirect("https://docs.google.com/forms/d/e/1FAIpQLSdcrbFGzyozJNdJai8ufFFnXby0Jgi8kv41dfFhCmQertyUog/viewform?usp=sf_link");
}