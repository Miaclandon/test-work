import React from 'react';
import './NavbarMenuBottomRight.css';
import icon from './images/icon.png';


function NavbarMenuBottomRight() {
    return (
        <div className="navbar__menu__bottom__right">
            <img src={icon} alt="" width={33} height={29}/>
                <p>13 990</p>
        </div>

    );
}


export default NavbarMenuBottomRight;
