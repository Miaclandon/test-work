import React from 'react';
import './NavbarMenuRight.css';
import city from './images/city.png';
import user from './images/user.png';


function NavbarMenuRight() {
    return (
        <div className="navbar_menu navbar__menu__right">
            <div className="item__navbar__top__icon">
                       <img className="img_city"  src={city} alt="city" width={17} height={24} />
                       <div className="item__navbar__city">
                           <p>Город:  </p>
                           <a href="#" className="item__navbar__top">&nbsp;Москва</a>
                       </div>
                   </div>
            <div className="item__navbar__top__icon">
                    <img src={user} alt="user" width={17} height={24} />
                    <div className="item__navbar__city">
                       <a href="#" className="item__navbar__top">
                           Личный кабинет
                       </a>
                    </div>
            </div>
        </div>
    );
}


export default NavbarMenuRight;
