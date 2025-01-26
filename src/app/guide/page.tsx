import type { Metadata } from 'next';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
    title: 'Hacker Guide | GunnHacks'
}

export default function Guide() {
    redirect("https://docs.google.com/document/d/1RHcsMJANFuJC4UyZ3ECxpfC0QOi8cvSeZquez7P1Ahg/edit#heading=h.3z80ixgigkx");
}
