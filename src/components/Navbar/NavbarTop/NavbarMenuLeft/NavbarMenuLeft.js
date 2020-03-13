import React from 'react';
import './NavbarMenuLeft.css';

class ItemNavbar extends React.Component {
    render() {
        const {name} = this.props.data
        return(
            <div className="navbar__menu__top__left">
                    <ul>
                        <li><a href="#" className="item__navbar__top">{name}</a></li>
                    </ul>
            </div>
        )
    }
}

class NavbarMenuLeft extends React.Component {
    render() {
        const { data } = this.props
        let itemNavbarMenu

        if (data.length){
            itemNavbarMenu = data.map(function (item) {
                return <ItemNavbar key= {item.id} data={item}/>
            }) }
                else {
                itemNavbarMenu = <p>Здесь ничего нет</p>
            }

            return (
                <div className="item__navbar__top">
                    {itemNavbarMenu}
                </div>
            )
        }
    }

export default NavbarMenuLeft;
