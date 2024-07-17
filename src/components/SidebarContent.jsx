import { useContext } from "react"
import { ChatContext } from "../context/chat/ChatContext"
import SidebarChatItem from "./SidebarChatItem"
import AuthContext from "../auth/AuthContext"

const SidebarContent = () => {
    const { auth } = useContext(AuthContext)
    const { chatState } = useContext(ChatContext)
    const { users } = chatState
    return (
        <main className="inbox_chat">
            {
                users.filter(user => user.uid != auth.uid).map(user => (
                    <SidebarChatItem key={user.uid} user={user} />
                ))
            }
        </main>
    )
}

export default SidebarContent