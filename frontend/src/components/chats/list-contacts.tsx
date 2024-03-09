import React from 'react'
import { IUserDocument } from '~/types'
import { Avatar, AvatarImage } from '../ui/avatar'

const ListContacts = ({ contact }: { contact: IUserDocument }) => {
    return (
        <div className="flex items-center gap-3 hover:bg-[#f5f6f6] pl-5 py-3 [overflow-y:overlay] h-auto">
            <Avatar>
                <AvatarImage src={contact.avatar} alt="" />
            </Avatar>

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
