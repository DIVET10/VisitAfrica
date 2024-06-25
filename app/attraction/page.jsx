import Attraction from "@/components/Attraction"

export const metadata = {
    title: 'Attraction | VisitAfrica',
    description: 'Attraction | VisitAfrica',
    openGraph: {
        title: 'Attraction | VisitAfrica',
        description: 'Page Attraction ',
        images: ['./logo3.webp']
    }
}

export default function Page(){
    return <>
        <Attraction/>
    </>
}