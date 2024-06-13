import IncomingMessage from "./IncomingMessage"
import OutgoingMessage from "./OutgoingMessage"

const MessagesContainer = () => {
    return (
        <div className="msg_history">
            <IncomingMessage/>
            <OutgoingMessage/>
        </div>
    )
}

export default MessagesContainer