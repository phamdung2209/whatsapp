import Image from 'next/image'

async function MainLayout() {
    return (
        <>
            <div className="flex items-center justify-center md:flex-row flex-col-reverse">
                <Image
                    priority
                    unoptimized
                    src="/images/whatsapp.gif"
                    alt="Whatsapp Logo"
                    width={300}
                    height={300}
                />
                <h1 className="text-7xl text-white">Whatsapp</h1>
            </div>
        </>
    )
}

export default MainLayout
