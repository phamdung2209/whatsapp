import { auth } from '~/auth'
import ChatContainer from '~/components/chats/chat-container'

const Home = async () => {
    const session = await auth()
    return <ChatContainer session={session} />
}

export default Home
