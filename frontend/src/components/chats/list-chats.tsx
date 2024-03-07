import React from 'react'

const ListChats = () => {
    const data: boolean = false

    if (!data) {
        return (
            <div className="text-colors-secondary font-normal text-sm flex items-center justify-center mx-auto h-full">
                No chats
            </div>
        )
    }

    return <div>ListChats</div>
}

export default ListChats
