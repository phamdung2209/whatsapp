import Image from 'next/image'

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <h1 className="text-4xl font-bold text-center">
                Welcome to <span className="text-green-500">Whatsapp</span>
            </h1>
            <Image src="/images/whatsapp.gif" alt="Whatsapp Logo" width={200} height={200} />
        </main>
    )
}
