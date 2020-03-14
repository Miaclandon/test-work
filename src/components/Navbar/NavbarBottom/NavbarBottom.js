import React from 'react';
import NavbarMediumMenuLeft from "./NavbarBottomLeft/NavbarMenuLeft";
import NavbarMenuBottomRight from "./NavbarBottomRight/NavbarMenuBottomRight";
import './NavbarBottom.css';

const itemNavbarMenu = [
    {
        id:0,
        name: 'МЕЛЬНИЦЫ'
    },
    {
        id:1,
        name: 'ТЕХНИКА'
    },
    {
        id:2,
        name: 'ДЛЯ ВЫПЕЧКИ'
    },
    {
        id:3,
        name: 'ПОСУДА'
    },
    {
        id:4,
        name: 'ПРОРАЩИВАТЕЛИ'
    },
    {
        id:5,
        name: 'ДЕТЯМ'
    },
    {
        id:6,
        name: 'ЧАЙ ИЗ НЕПАЛА'
    },
];

function NavbarBottom() {
    return (
        <div className="navbar_bottom">
            <React.Fragment>
                <NavbarMediumMenuLeft data={itemNavbarMenu}/>
                <NavbarMenuBottomRight/>
            </React.Fragment>
        </div>

    );
}

export default NavbarBottom;
