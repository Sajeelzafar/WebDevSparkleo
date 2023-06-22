import React from "react";
import './stylesandImages/Navbar.css';
import headerlogo from './stylesandImages/Navbar_Icon.svg';

const NavBar = () => {

    return(
        
        <nav className="navbar display">
            <div className="leftSideNav display">
                <img className="navbarImage" alt="Image" src={headerlogo}></img>
                <span className="navbarLefttext">Sparkleo</span>
            </div>
            <div className="rightSideNav display">
                <span className="navbarRighttext">Employee Management</span>
            </div>
        </nav>
    )

}

export default NavBar;