import {Link} from "react-router-dom"
import { useContext} from "react"

import "./Navbar.css"

import { AuthContext } from "../../contexts/AuthContext";

const Navbar = () => {
    const {isAuthenticated} = useContext(AuthContext);

    return ( 
        <header>
            <nav>
                <div className="navbar">
                    {!isAuthenticated ? <Link to="/login">Login</Link> : <Link to="/painelControl">Painel</Link>}
                    <Link to="/">Home</Link>
                </div>
            </nav>
        </header>
     );
}

export default Navbar