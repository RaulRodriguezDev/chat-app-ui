import { RouterProvider } from "react-router-dom"
import router from "./router/Routes"
import './app.css'

const App = () => {
    return (
        <div>
            <RouterProvider router={ router}/>
        </div>
    )
}

export default App