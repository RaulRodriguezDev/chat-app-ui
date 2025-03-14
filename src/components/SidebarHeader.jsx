import { useContext } from "react"
import AuthContext from "../auth/AuthContext"

const SidebarHeader = () => {
    const { auth, logout } = useContext(AuthContext)

    return (
        <header className="headind_srch">
            <div className="recent_heading mt-2">
                <h4>{ auth.name }</h4>
            </div>
            <div className="srch_bar">
                <div className="stylish-input-group">
                    <button className="btn text-danger" onClick={ logout }>
                        Exit
                    </button>
                </div>
            </div>
        </header>
    )
}

export default SidebarHeader