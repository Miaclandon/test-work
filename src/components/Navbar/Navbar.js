import React from 'react';
import './navbar.css'
import NavbarTop from "./NavbarTop/NavbarTop";
import NavbarMedium from "./NavbarMedium/NavbarMedium";
import NavbarBottom from "./NavbarBottom/NavbarBottom";

function Navbar() {
    return (
        <div className="fon1 fon2">
            <div className="navbar_menu ">
                <React.Fragment>
                   <NavbarTop/>
                   <NavbarMedium/>
                   <NavbarBottom/>
                </React.Fragment>
            </div>
        </div>

    );
}

export default Navbar;
