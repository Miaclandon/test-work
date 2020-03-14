import React from 'react';
import './NavbarTop.css'
import NavbarMenuTopLeft from "./NavbarMenuTopLeft/NavbarMenuTopLeft";
import NavbarMenuRight from "./NavbarMenuRight/NavbarMenuRight";

const itemNavigationMenu = [
    {
        id:0,
        name: 'О магазине'
    },
    {
        id:1,
        name: 'Доставка и самовывоз'
    },
    {
        id:2,
        name: 'Оплата'
    },
    {
        id:3,
        name: 'Контакты'
    },
    {
        id:4,
        name: 'Блог'
    },
];

function NavbarTop() {
    return (
        <div className="navbar__top">
            <React.Fragment>
                <NavbarMenuTopLeft data={itemNavigationMenu}/>
                <NavbarMenuRight/>
        </React.Fragment>
        </div>

    );
}

export default NavbarTop;
