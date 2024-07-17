import { createContext, useReducer } from "react"
import propTypes from "prop-types"
import { chatReducer } from "./chatReducer"

const ChatContext = createContext()

const initialState = {
    uid: '',
    activeChat: null,
    users: [],
    messages: []
}

const ChatProvider = ({ children }) => {

    const [ chatState, dispatch ] = useReducer(chatReducer, initialState)

    return(
        <ChatContext.Provider
            value={{
                chatState,
                dispatch
            }}
        >
            { children }
        </ChatContext.Provider>
    )
}

ChatProvider.propTypes = {
    children: propTypes.node
}

export { ChatContext }
export default ChatProvider