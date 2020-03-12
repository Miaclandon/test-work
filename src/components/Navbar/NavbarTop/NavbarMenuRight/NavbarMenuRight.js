import React from 'react';
import './NavbarMenuRight';
import user from './images/city.png';
import city from './images/user.jpg';


function NavbarMenuRight() {
    return (
        <div className="navbar_menu navbar__menu__right">
            <div className="item__navbar__top__icon">
                       <img src={city} alt="city" width={17} height={24} />
                       <div className="item__navbar__city">
                           <p>Город:  </p>
                           <a href="#" className="item__navbar__top">&nbsp;Москва</a>
                       </div>
                   </div>
            <div className="item__navbar__top__icon item__navbar__user">
                <img src={user} alt="user" width={17} height={24} />
                   <a href="#" className="item__navbar__top">
                       Личный кабинет
                   </a>
            </div>
        </div>
    );
}


export default NavbarMenuRight;
