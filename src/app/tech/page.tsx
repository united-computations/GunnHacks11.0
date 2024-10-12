import type { Metadata } from 'next';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
    title: 'Team Selection Form | GunnHaX'
}

export default function Guide() {
    redirect("https://docs.google.com/forms/d/e/1FAIpQLSc8znmDGkh52-jePYpp0USV9SXhxdh4UjwXOdKvRqOOqImBcg/viewform?usp=sf_link");
}