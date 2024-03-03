import Image from 'next/image'
import CreateUser from '~/components/onboarding/create-user'
import MainLayout from '~/components/shared/main-layout'

const Onboarding = async () => {
    return (
        <div className="bg-colors-panel-header-background h-screen w-screen text-white flex flex-col items-center justify-center">
            <MainLayout />

            <h2 className="text-2xl">Create you profile</h2>

            <div className="text-2xl">
                <div className="flex gap-6 mt-6">
                    <CreateUser />
                </div>
            </div>
        </div>
    )
}

export default Onboarding
