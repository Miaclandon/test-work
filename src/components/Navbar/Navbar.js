import React from 'react';
import './navbar.css'
import NavbarTop from "./NavbarTop/NavbarTop";
import NavbarMedium from "./NavbarMedium/NavbarMedium";
import NavbarBottom from "./NavbarBottom/NavbarBottom";
import NavbarForPhone from "./NavbarForPhone/NavbarForPhone";
import NavbarMenuTopLeft from "./NavbarTop/NavbarMenuTopLeft/NavbarMenuTopLeft";

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
    {
        id:5,
        name: 'МЕЛЬНИЦЫ'
    },
    {
        id:6,
        name: 'ТЕХНИКА'
    },
    {
        id:7,
        name: 'ДЛЯ ВЫПЕЧКИ'
    },
    {
        id:8,
        name: 'ПОСУДА'
    },
    {
        id:9,
        name: 'ПРОРАЩИВАТЕЛИ'
    },
    {
        id:10,
        name: 'ДЕТЯМ'
    },
    {
        id:11,
        name: 'ЧАЙ ИЗ НЕПАЛА'
    },
];
function Navbar() {
    return (
            <div className="navbar_menu ">
                <React.Fragment>
                    <div className="navbar__for__phone">
                        <NavbarForPhone title="Меню">
                            <NavbarMenuTopLeft data={itemNavigationMenu}/>
                        </NavbarForPhone>
                    </div>
                   <NavbarTop/>
                   <NavbarMedium/>
                   <NavbarBottom/>
                </React.Fragment>
            </div>
    );
}

export default Navbar;
