import { Session } from 'next-auth'
import { auth } from '~/auth'
import CreateUser from '~/components/onboarding/create-user'
import MainLayout from '~/components/shared/main-layout'

const Onboarding = async () => {
    const session: Session | null = await auth()

    return (
        <div className="xs:h-screen bg-colors-panel-header-background w-screen text-white flex flex-col items-center justify-center">
            <MainLayout />

            <h2 className="text-2xl">Create you profile</h2>

            <div className="text-2xl">
                <div className="flex mt-6">
                    <CreateUser session={session} />
                </div>
            </div>
        </div>
    )
}

export default Onboarding
