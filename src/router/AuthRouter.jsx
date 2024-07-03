import { Navigate, Route } from "react-router-dom"
import AuthLayout from "../layout/AuthLayout"
import Login from "../pages/Login"
import Register from "../pages/Register"

const AuthRouter = () => {
    return (
        <Route path="/auth" element={<AuthLayout/>}>
            <Route path="login" element={<Login/>}/>
            <Route path="register" element={<Register/>}/>
            <Route path="*" element={<Navigate to={"/auth/login"}/>}/>
        </Route>
    )
}

export default AuthRouter