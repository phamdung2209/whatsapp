import MainLayout from '~/components/shared/main-layout'

async function AuthLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <div className="flex justify-center items-center flex-col gap-7 mx-auto min-h-screen bg-colors-panel-header-background">
            <MainLayout />

            {children}
        </div>
    )
}

export default AuthLayout
