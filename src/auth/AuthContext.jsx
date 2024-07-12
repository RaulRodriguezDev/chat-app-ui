import { createContext, useCallback, useState } from "react";
import propTypes from "prop-types";
import { fetchAuth, fetchNoAuth } from "../helpers/fetch";

const AuthContext = createContext()

const initialState = {
    uid: null,
    checking: true,
    logged: false,
    name: null,
    email: null
}

const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState(initialState)

    const login = async ( email, password ) => {
        const response = await fetchNoAuth('auth/login', { email, password }, 'POST')

        if(response.ok){
            localStorage.setItem('token', response.token)
            const { uid, name, email } = response.user
            setAuth({
                uid,
                checking: false,
                logged: true,
                name,
                email
            })
        }
        
        return response
    }

    const register = async ( name, email, password ) => {
        const response = await fetchNoAuth('auth/login/new', { name, email, password }, 'POST')

        if(response.ok){
            localStorage.setItem('token', response.token)
            const { uid, name, email } = response.user
            setAuth({
                uid,
                checking: false,
                logged: true,
                name,
                email
            })
        }

        return response
    }

    const checkToken = useCallback(async () => {
        const token = localStorage.getItem('token')

        if(!token){
            setAuth({
                uid: null,
                checking: false,
                logged: false,
                name: null,
                email: null
            })

            return false
        }

        const response = await fetchAuth('auth/token')

        if(response.ok){
            localStorage.setItem('token', response.token)
            const { uid, name, email } = response.user
            setAuth({
                uid,
                checking: false,
                logged: true,
                name,
                email
            })
            return true
        } else {
            setAuth({
                uid: null,
                checking: false,
                logged: false,
                name: null,
                email: null
            })

            return false
        }


    }, [])

    const logout = () => {
        localStorage.removeItem('token')
        setAuth({
            checking: false,
            logged: false,
        })
    }

    return(
        <AuthContext.Provider
            value={{
                auth,        
                login,
                register,
                checkToken,
                logout
            }}
        >
            { children }
        </AuthContext.Provider>
    )
}

AuthProvider.propTypes = {
    children: propTypes.node
}

export { AuthProvider }
export default AuthContext
