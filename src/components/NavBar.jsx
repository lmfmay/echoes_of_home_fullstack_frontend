import { Link } from "react-router-dom";
import mockLogo from '../assets/mocklogo.png'

function NavBar () {
    return (
        <nav className="navBar">
            <img src= {mockLogo} alt="" id="webLogo"/>
            <h4 id="webName">Echos of Home</h4>
            <Link to={'/'}>
            <h4 className="navLinks">Find THE Voice</h4>
            </Link>
            <h4 className="navLinks">|</h4>
            <h4 className="navLinks">Share YOUR Voice</h4> 
            <button>Login</button>
            <button>Signup</button>
        </nav>
    )
}

export default NavBar

