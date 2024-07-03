import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import AuthContext from "../auth/AuthContext"

const Login = () => {
    const [form, setForm] = useState({
        email: '',
        password: '',
        rememberme: false
    })
    const [error, setError] = useState(false)

    const { login } = useContext(AuthContext)

    useEffect(() => {
        const email = localStorage.getItem('email')
        email && setForm( form => ({ ...form, email, rememberme: true }))
    }, [])

    const handleOnChange = ({ target }) => {
        const { name, value } = target
        setForm({...form, [name]: value})
    }

    const toggleCheckbox = () => setForm({...form, rememberme: !form.rememberme})
    const isFormEmpty = () => !form.email.length != 0 || !form.password.length != 0

    const handleSubmit = async (e) => {
        e.preventDefault()
        form.rememberme ? localStorage.setItem('email', form.email) : localStorage.removeItem('email')

        const { email, password } = form

        try{
            const response = await login(email, password)
            console.log(response)
            setError(!response.ok)
        }catch(error){
            console.log(error)
            setError(true)
        }
        
    }

    return (
        <form
            onSubmit={handleSubmit} 
            className="login100-form validate-form flex-sb flex-w"
        >
            <span className="login100-form-title mb-3">
                Login
            </span>
            <div className="wrap-input100 validate-input mb-3">
                <input 
                    className="input100" 
                    type="email" 
                    name="email" 
                    placeholder="Email"
                    onChange={handleOnChange}
                    value={form.email}
                />
                <span className="focus-input100"></span>
            </div>
            <div className="wrap-input100 validate-input mb-3">
                <input 
                className="input100" 
                type="password" 
                name="password" 
                placeholder="Password"
                onChange={handleOnChange}
                />
                <span className="focus-input100"></span>
            </div>
            <div className="row mb-3">
                <div 
                    onClick={toggleCheckbox}
                    className="col"
                >
                    <input 
                        className="input-checkbox100" 
                        id="ckb1" 
                        type="checkbox" 
                        name="rememberme" 
                        readOnly
                        checked = {form.rememberme}
                    />
                    <label className="label-checkbox100">
                        Remember Me
                    </label>
                </div>
                <div className="col text-right">
                    <Link to="/auth/register" className="txt1" >
                        Don&apos;t have an account?
                    </Link>
                </div>
            </div>
            <div>
                {
                    error && (
                        <div className="alert alert-danger" role="alert">
                            The email or password is incorrect
                        </div>
                    )
                }
            </div>
            <div className="container-login100-form-btn m-t-17">
                <button 
                    className="login100-form-btn"
                    type="submit"
                    disabled={isFormEmpty()}
                >
                    Login
                </button>
            </div>
        </form>
    )
}

export default Login