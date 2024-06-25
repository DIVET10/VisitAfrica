import Destination from "@/components/Destination"

export const metadata = {
    title: 'Destination | VisitAfrica',
    description: 'Destination | VisitAfrica',
    openGraph: {
        title: 'Destination | VisitAfrica',
        description: 'Page Destination ',
        images: ['./logo3.webp']
    }
}
export default function Page(){
    return <>
        <Destination/>
    </>
}