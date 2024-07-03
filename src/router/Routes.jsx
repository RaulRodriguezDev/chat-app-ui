import { createBrowserRouter, Navigate } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Chat from "../pages/Chat";
import AuthLayout from "../layout/AuthLayout";


const router = createBrowserRouter([
    {
        element: <Chat/>,
        path: '/'
    },
    {
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
])

const test = () => console.log('test')

test
export default router