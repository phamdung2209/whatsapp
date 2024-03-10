import Message from './message'
import SendMessages from './send-messages'
import { ScrollArea } from '../ui/scroll-area'
import { IUserDocument } from '~/types'
import MessageHeader from './message-header'
import { Session } from 'next-auth'

const Messages = ({
    selectedConversation,
    setSelectedConversation,
    session,
}: {
    selectedConversation: IUserDocument
    setSelectedConversation: (selectedConversation: IUserDocument | null) => void | null
    session: Session | null
}) => {
    const isOnline = true
    return (
        <div className="chats-messages w-screen xs:w-full flex flex-col justify-between max-[310px]:overflow-auto">
            <MessageHeader
                selectedConversation={selectedConversation}
                setSelectedConversation={setSelectedConversation}
                isOnline={isOnline}
            />

            <ScrollArea className="text-colors-primary py-2 px-3 [overflow-y:overlay] h-screen">
                {/* Message container */}
                <div className="flex flex-col">
                    <Message session={session} />
                </div>
            </ScrollArea>

            <SendMessages selectedConversation={selectedConversation} />
        </div>
    )
}

export default Messages
