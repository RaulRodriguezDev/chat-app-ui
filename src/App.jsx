import './login_register.css'
import './chat.css'
import { AuthProvider } from "./auth/AuthContext"
import Routes from "./router/Routes"
import { BrowserRouter } from 'react-router-dom'
import { SocketProvider } from './context/SocketContext'

const App = () => {
    return (
        <AuthProvider>
            <SocketProvider>
                <BrowserRouter>
                    <Routes/>
                </BrowserRouter>
            </SocketProvider>
        </AuthProvider>
    )
}

export default App