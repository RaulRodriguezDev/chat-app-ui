import { RouterProvider } from "react-router-dom"
import router from "./router/Routes"
import './login_register.css'
import './chat.css'
import { AuthProvider } from "./auth/AuthContext"

const App = () => {
    return (
        <AuthProvider>
            <RouterProvider router={ router}/>
        </AuthProvider>
    )
}

export default App