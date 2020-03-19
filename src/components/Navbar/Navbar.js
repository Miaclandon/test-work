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
        name: 'Город: Москва'
    },
    {
        id:1,
        name: 'Личный кабинет'
    },
    {
        id:2,
        name: 'О магазине'
    },
    {
        id:3,
        name: 'Доставка и самовывоз'
    },
    {
        id:4,
        name: 'Оплата'
    },
    {
        id:5,
        name: 'Контакты'
    },
    {
        id:6,
        name: 'Блог'
    },
    {
        id:7,
        name: 'МЕЛЬНИЦЫ'
    },
    {
        id:8,
        name: 'ТЕХНИКА'
    },
    {
        id:9,
        name: 'ДЛЯ ВЫПЕЧКИ'
    },
    {
        id:10,
        name: 'ПОСУДА'
    },
    {
        id:11,
        name: 'ПРОРАЩИВАТЕЛИ'
    },
    {
        id:12,
        name: 'ДЕТЯМ'
    },
    {
        id:13,
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
