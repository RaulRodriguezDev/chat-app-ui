import { createContext, useContext, useEffect } from "react"
import propTypes from 'prop-types'
import AuthContext from "../auth/AuthContext"
import { useSocket } from "../hooks/useSocket"
import { ChatContext } from "./chat/ChatContext"
import { types } from "../types/types"
import { scrollToBottomSmooth } from "../helpers/scrollHelper"

const SocketContext = createContext()

const SocketProvider = ({ children }) => {
    const { auth } = useContext(AuthContext)
    const { dispatch } = useContext(ChatContext)
    const { socket, connectSocket, disconnectSocket } = useSocket('http://localhost:8080')

    useEffect(() => {

        if(auth.logged)
            connectSocket()
        
    },[auth, connectSocket])

    useEffect(() => {

        if(!auth.logged)
            disconnectSocket()

    },[auth, disconnectSocket])

    useEffect(() => {
        socket?.on('list-users', users => {
            dispatch({
                type: types.usersLoaded,
                payload: users
            })
        })
    },[socket, dispatch])

    useEffect(() => {
        socket?.on('personal-message', message => {
            dispatch({
                type: types.newMessage,
                payload: message
            })
            scrollToBottomSmooth('messages_history')
        })       
    },[socket, dispatch])

    return (
        <SocketContext.Provider value={{ socket }}>
            {children}
        </SocketContext.Provider>
    )
}

SocketProvider.propTypes = {
    children: propTypes.node
}

export { SocketProvider }
export default SocketContext