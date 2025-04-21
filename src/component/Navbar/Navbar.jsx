import "./navbar.css"
import { FaBeer } from 'react-icons/fa';
import { HiAdjustments } from "react-icons/hi";

function Navbar(){
    return(
        <nav className="nav">
            <ul >
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Contact</li>
                <li><FaBeer /></li>
                <li><HiAdjustments /></li>
            </ul>
        </nav>
    )
}

export default Navbar