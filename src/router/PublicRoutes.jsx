import { Route, Navigate } from "react-router-dom"
import propTypes from "prop-types"

const PublicRoutes = ({ isAuthenticated, component: Component, ...props}) => {
    console.log(props)
    return (
        <Component {...props}/>
    )
}

PublicRoutes.propTypes = {
    isAuthenticated: propTypes.bool,
    component: propTypes.node
}

export default PublicRoutes