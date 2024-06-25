import Contact from "@/components/Contact"

export const metadata = {
    title: 'Contact | VisitAfrica',
    description: 'Contact | VisitAfrica',
    openGraph: {
        title: 'Contact | VisitAfrica',
        description: 'Page Contact ',
        images: ['./logo3.webp']
    }
}
export default function Page(){
    return <>
        <Contact/>
    </>
}