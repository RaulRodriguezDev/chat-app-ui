import propTypes from 'prop-types'
import { useContext } from 'react'
import { ChatContext } from '../context/chat/ChatContext'
import { types } from '../types/types'
import { fetchAuth } from '../helpers/fetch'
import { scrollToBottom } from '../helpers/scrollHelper'

const SidebarChatItem = ({ user }) => {
    const { name, online } = user
    const { chatState, dispatch } = useContext(ChatContext)

    const handleClick = async () => {
        dispatch({
            type: types.activateChat,
            payload: user.uid
        })

        const resp = await fetchAuth(`messages/${user.uid}`)

        dispatch({
            type: types.loadChat,
            payload: resp.messages
        })

        scrollToBottom('messages_history')
    }

    return (
        <div className={`chat_list ${chatState.activeChat === user.uid && 'active_chat'}`} onClick={handleClick}>
            <div className="chat_people">
                <div className="chat_img"> 
                    <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil" />
                </div>
                <div className="chat_ib">
                    <h5>{name}</h5>
                    {
                        online ? <span className="text-success">Online</span>
                        :   <span className="text-danger">Offline</span>
                    }                    
                </div>
            </div>
        </div>
    )
}

SidebarChatItem.propTypes = {
    user: propTypes.object.isRequired
}

export default SidebarChatItem