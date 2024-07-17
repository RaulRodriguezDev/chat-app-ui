import { useContext } from "react"
import IncomingMessage from "./IncomingMessage"
import OutgoingMessage from "./OutgoingMessage"
import { ChatContext } from "../context/chat/ChatContext"
import AuthContext from "../auth/AuthContext"

const MessagesContainer = () => {
    const { chatState } = useContext(ChatContext)
    const { auth } = useContext(AuthContext)
    const { messages } = chatState

    return (
        <div id="messages_history" className="msg_history">
            {console.log(chatState)}
            {
                messages.map(message => (
                    (message.from === auth.uid)
                        ? <OutgoingMessage key={message._id} message={message}/>
                        : <IncomingMessage key={message._id} message={message}/>
                ))
            }
        </div>
    )
}

export default MessagesContainer