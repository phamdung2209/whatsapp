import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '../ui/sheet'
import { Session } from 'next-auth'
import { ArrowLeft } from 'lucide-react'

import useGetContacts from '~/hooks/useGetContacts'
import SearchBar from './search-bar'
import ListContacts from './list-contacts'
import { NEW_CONTACTS_DEFAULT } from '~/ultils/constants'
import { ScrollArea } from '../ui/scroll-area'
import useConversation from '~/zustand/useConversation'

const GetContacts = ({
    children,
    session,
}: {
    children: React.ReactNode
    session: Session | null
}) => {
    const { loading, contacts } = useGetContacts({ authId: session?.user?._id ?? '' })
    const { selectedConversation, setSelectedConversation } = useConversation()

    return (
        <Sheet>
            <SheetTrigger>{children}</SheetTrigger>
            <SheetContent side={'left'}>
                <SheetHeader className="h-28 bg-tea p-6 flex justify-end">
                    <SheetTitle className="flex items-center gap-5 text-white">
                        <SheetClose>
                            <ArrowLeft className="cursor-pointer" />
                        </SheetClose>
                        <span className="ml-3">New Chat</span>
                    </SheetTitle>
                </SheetHeader>

                <SearchBar />

                <ScrollArea className="overflow-auto h-[calc(100vh-7rem-3.5rem)]">
                    <div className="flex flex-col gap-6">
                        <div>
                            {NEW_CONTACTS_DEFAULT.map((contact) => (
                                <div
                                    key={Date.now() + contact.id}
                                    className="flex items-center gap-3 hover:bg-[#f5f6f6] pl-5 py-3 cursor-pointer"
                                >
                                    <div className="w-12 h-12 rounded-full bg-tea flex items-center justify-center text-white">
                                        {contact.icon}
                                    </div>

                                    <div className="">{contact.title}</div>
                                </div>
                            ))}
                        </div>

                        {Object.entries(contacts).map(([letter, contacts]) => (
                            <div key={Date.now() + letter}>
                                <SheetDescription className="text-sm text-tea pl-4">
                                    {letter}
                                </SheetDescription>

                                <div className="flex flex-col mt-1">
                                    {contacts.map((contact) => (
                                        <SheetClose
                                            key={contact._id}
                                            onClick={() => setSelectedConversation(contact)}
                                        >
                                            <ListContacts contact={contact} />
                                        </SheetClose>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </ScrollArea>
            </SheetContent>
        </Sheet>
    )
}

export default GetContacts
