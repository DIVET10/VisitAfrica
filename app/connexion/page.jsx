import Connexion from "@/components/Connexion"

export const metadata = {
    title: 'Connexion| VisitAfrica',
    description: 'Connexion | VisitAfrica',
    openGraph: {
        title: 'Connexion | VisitAfrica',
        description: 'Page Connexion ',
        images: ['./logo3.webp']
    }
}

export default function Page(){
    return <>
        <Connexion/>
    </>
}