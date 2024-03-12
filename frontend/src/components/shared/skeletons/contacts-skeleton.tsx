import React from 'react'
import { Skeleton } from '~/components/ui/skeleton'

const ContactsSkeleton = () => {
    return Array.from({ length: 5 }).map((_, i) => (
        <div key={i} className="flex items-center gap-3 pl-5 py-3 [overflow-y:overlay] h-auto relative">
            <Skeleton className="w-12 h-12 rounded-full bg-[#d3d3d3]" />
            <div className="flex flex-col items-start gap-2">
                <Skeleton className="w-28 xs:w-48 h-6 bg-[#d3d3d3]" />
                <Skeleton className="w-28 xs:w-48 h-6 bg-[#d3d3d3]" />
            </div>
        </div>
    ))
}

export default ContactsSkeleton
