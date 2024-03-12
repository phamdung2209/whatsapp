import React from 'react'
import { IUserDocument } from '~/types'
import { Avatar, AvatarImage } from '../ui/avatar'

const ListContacts = ({ contact, userOnline }: { contact: IUserDocument; userOnline: string[] }) => {
    const isOnline = userOnline.includes(contact._id)

    return (
        <div className="flex items-center gap-3 hover:bg-[#f5f6f6] pl-5 py-3 [overflow-y:overlay] h-auto relative">
            <Avatar>
                <AvatarImage src={contact.avatar} alt="" />
            </Avatar>
            {isOnline && (
                <span className="absolute flex h-3 w-3 top-3 left-[50px]">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                    <span className="absolute inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
                </span>
            )}
            <div className="flex flex-col items-start">
                <div className="text-colors-primary text-base truncate w-[119px] xs:w-fit text-left">
                    {contact.fullname ?? contact.username}
                </div>

                <div className="text-colors-secondary text-sm truncate w-[119px] xs:w-fit text-left">
                    {contact.username}
                </div>
            </div>
        </div>
    )
}

export default ListContacts
