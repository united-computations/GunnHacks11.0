import type { Metadata } from 'next';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
    title: 'Schedule | GunnHacks'
}

export default function Schedule() {
    redirect("https://docs.google.com/document/d/1eJ0y7DYtzaWN9ICCv4c-Mf0VonRpU17meFKQ6TtV50c/edit?tab=t.0"");
}
