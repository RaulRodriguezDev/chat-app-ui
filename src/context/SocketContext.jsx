import { createContext, useContext, useEffect } from "react"
import propTypes from 'prop-types'
import AuthContext from "../auth/AuthContext"
import { useSocket } from "../hooks/useSocket"

const SocketContext = createContext()

const SocketProvider = ({ children }) => {
    const { auth } = useContext(AuthContext)
    const { socket, online, connectSocket, disconnectSocket } = useSocket('http://localhost:8080')

    useEffect(() => {

        if(auth.logged)
            connectSocket()
        
    },[auth, connectSocket])

    useEffect(() => {

        if(!auth.logged)
            disconnectSocket()

    },[auth, disconnectSocket])

    return (
        <SocketContext.Provider value={{}}>
            {children}
        </SocketContext.Provider>
    )
}

SocketProvider.propTypes = {
    children: propTypes.node
}

export { SocketProvider }
export default SocketContext