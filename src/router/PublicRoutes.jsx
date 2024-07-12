import AuthLayout from "../layout/AuthLayout"
import Login from "../pages/Login"
import Register from "../pages/Register"
import { Navigate } from "react-router-dom"

const publicRoutes = (auth) => {
    return !auth.logged ? {
        element: <AuthLayout/>,
        path: '/auth',
        children:[
            {
                element: <Login/>,
                path:'login'
            },
            {
                element: <Register/>,
                path:'register',
            },
            {
                element: <Navigate to="/auth/login"/>,
                path:'*'
            }
        ],
        
    }
    : {
        path: '/auth',
        children:[
            {
                element: <Navigate to="/"/>,
                path:'*'
            }
        ]
    }
}

export {publicRoutes}