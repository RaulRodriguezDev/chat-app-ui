import { Link } from "react-router-dom"
import { useContext, useState } from "react"
import AuthContext from "../auth/AuthContext"

const Register = () => {
    const { register } = useContext(AuthContext)
    const [form, setForm] = useState({
        name: '',
        email: '',
        password: ''
    })
    const [error, setError] = useState(false)
    const [errors, setErrors] = useState([])

    const handleOnChange = ({ target }) => {
        const { name, value } = target

        if(name != 'password')
            localStorage.setItem(name, value)

        setForm({...form, [name]: value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const { name, email, password } = form
        try{
            const response = await register(name, email, password)
            console.log(response)
            if(!response.ok){

                response.errors ? 
                    setErrors(Object.values(response.errors)) :
                    setErrors([{msg: response.message}])

                setError(!response.ok)
                return
            }

            setError(!response.ok)
            
        }catch(error){
            console.log(error)
            setError(true)
        }
    }

    return (
        <form className="login100-form validate-form flex-sb flex-w">
            <span className="login100-form-title mb-3">
                Register
            </span>
            <div className="wrap-input100 validate-input mb-3">
                <input className="input100" type="text" name="name" placeholder="Name" onChange={e => handleOnChange(e)}/>
                <span className="focus-input100"></span>
            </div>
            <div className="wrap-input100 validate-input mb-3">
                <input className="input100" type="email" name="email" placeholder="Email" onChange={e => handleOnChange(e)}/>
                <span className="focus-input100"></span>
            </div>
            <div className="wrap-input100 validate-input mb-3">
                <input className="input100" type="password" name="password" placeholder="Password" onChange={e => handleOnChange(e)}/>
                <span className="focus-input100"></span>
            </div>
            <div className="row mb-3">
                <div className="col text-right">
                    <Link to='auth/login' className="txt1">
                        Have an account?
                    </Link>
                </div>
            </div>
            <div className="col mb-3 ">
                {
                    error && 
                    <>
                        { errors.map((error, index) => {
                            return(
                                <div key={index} className="alert alert-danger" role="alert">
                                    {error.msg}
                                </div>
                            )
                        })}
                    </>
                }
            </div>
            <div className="container-login100-form-btn m-t-17">
                <button className="login100-form-btn" onClick={e => handleSubmit(e)}>
                    Create Account
                </button>
            </div>
        </form>
    )
}

export default Register