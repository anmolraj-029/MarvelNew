import image from "../assets/logo.png";
import { NavLink } from "react-router-dom";
import classes from "./Navbar.module.css";

function Navbar(){
    return (
        <div className={classes.navbar}>
            <NavLink to = "/">Home</NavLink>
            <NavLink to = "/characters">Characters</NavLink>
            <NavLink to = "/"><img src = {image} alt = "logo"/></NavLink>
            <NavLink to = "/new">Add</NavLink>
            <NavLink to = "/auth">Login</NavLink>
        </div>
    );
}

export default Navbar;