import './login_register.css'
import './chat.css'
import { AuthProvider } from "./auth/AuthContext"
import Routes from "./router/Routes"
import { BrowserRouter } from 'react-router-dom'
import { SocketProvider } from './context/SocketContext'
import ChatProvider from './context/chat/ChatContext'

const App = () => {
    return (
        <ChatProvider>
            <AuthProvider>
                <SocketProvider>
                    <BrowserRouter>
                        <Routes/>
                    </BrowserRouter>
                </SocketProvider>
            </AuthProvider>
        </ChatProvider>
    )
}

export default App