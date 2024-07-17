import { useContext, useState } from 'react'
import SocketContext from '../context/SocketContext'
import AuthContext from '../auth/AuthContext'
import { ChatContext } from '../context/chat/ChatContext'

const MessageBodyContainer = () => {
    const [message, setMessage] = useState('')
    const { socket } = useContext(SocketContext)
    const { auth } = useContext(AuthContext)
    const { chatState } = useContext(ChatContext)

    const onSubmit = (event) => {
        event.preventDefault()

        if(message.length === 0) {return}
        setMessage('')

        socket.emit('personal-message', {
            from: auth.uid,
            to: chatState.activeChat,
            content: message
        })
    }

    return(
        <form onSubmit={e => onSubmit(e)}>
        <div className="type_msg row">
            <div className="input_msg_write col-sm-9">
                <input 
                    type="text" 
                    className="write_msg" 
                    placeholder="Type here..." 
                    value={message}
                    onChange={({target}) => setMessage(target.value)}
                />
            </div>
            <div className="col-sm-3 text-center">
                <button className="msg_send_btn mt-3" type="button">
                    Send
                </button>
            </div>
        </div>
        </form>
    )
}

export default MessageBodyContainer