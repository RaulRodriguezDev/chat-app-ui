import Chat from "../pages/Chat"
import { Navigate } from "react-router-dom"

const privateRoutes = (auth) => {
    return auth.logged ? {
        element: <Chat/>,
        path: '/'
    }:
    {
        element: <Navigate to="/auth/login"/>,
        path: '*'
    }
}

export {privateRoutes}