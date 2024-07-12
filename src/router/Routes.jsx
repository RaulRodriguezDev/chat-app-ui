import { useRoutes } from "react-router-dom";
import { useContext, useEffect } from "react";
import AuthContext from "../auth/AuthContext";
import { publicRoutes } from "./PublicRoutes";
import { privateRoutes } from "./PrivateRoutes";

const Routes = ( ) => {
    const { auth, checkToken } = useContext(AuthContext)

    const routes = useRoutes([
        privateRoutes(auth),
        publicRoutes(auth),
    ])

    useEffect(() => {

        checkToken()

    },[checkToken])

    return (
        <>
            {routes}
        </>
    )
}


export default Routes