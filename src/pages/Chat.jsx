import { useContext } from "react"
import MessageBodyContainer from "../components/MessageBodyContainer"
import MessagesContainer from "../components/MessagesContainer"
import SidebarContent from "../components/SidebarContent"
import SidebarHeader from "../components/SidebarHeader"
import { ChatContext } from "../context/chat/ChatContext"
import StartConversation from "./StartConversation"

const Chat = () => {
    const { chatState } = useContext(ChatContext)

    return (
        <div className="messaging">
            <div className="inbox_msg">
                <aside className="inbox_people">
                    <SidebarHeader/>
                    <SidebarContent/>                    
                        <div className="extra_space"></div>
                </aside>
                    {
                        chatState.activeChat ? (
                            <main className="mesgs">
                                <MessagesContainer/>
                                <MessageBodyContainer/>
                            </main>
                        ):
                        <StartConversation/>
                    }
                    
            </div>
        </div>
    )
}

export default Chat