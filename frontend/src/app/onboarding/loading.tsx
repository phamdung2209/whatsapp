import React from 'react'
import MainLayout from '~/components/shared/main-layout'
import { Skeleton } from '~/components/ui/skeleton'

const Loading = () => {
    return (
        <div className="xs:h-screen bg-colors-panel-header-background w-screen text-white flex flex-col items-center justify-center">
            <MainLayout />

            <h2 className="text-2xl">Create you profile</h2>

            <div className="text-2xl">
                <div className="flex mt-6">
                    <div className="flex flex-col-reverse xs:flex-row gap-6">
                        <form className="flex flex-col items-center justify-center gap-1">
                            <Skeleton className="w-20 h-3 rounded-lg mr-auto" />
                            <Skeleton className="w-60 h-10 rounded-lg" />

                            <Skeleton className="w-20 h-3 rounded-lg mr-auto mt-3" />
                            <Skeleton className="w-60 h-10 rounded-lg" />

                            <Skeleton className="w-1/2 h-10 rounded-lg mt-6" />
                        </form>

                        <div className="w-full xs:w-auto flex items-center justify-center">
                            <Skeleton className="h-48 w-48 rounded-full" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Loading
