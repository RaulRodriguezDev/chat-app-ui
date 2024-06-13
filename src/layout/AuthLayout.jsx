import { Outlet } from "react-router-dom"

const AuthLayout = () => {
    return(
        <div className="limiter">
            <div className="container-login100">
                <div className="wrap-login100 p-t-100 p-b-50">
                    <Outlet/>
                </div>
            </div>
        </div>
    )
}

export default AuthLayout