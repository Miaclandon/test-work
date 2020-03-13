import React from 'react';
import './NavbarMenuLeft.css';

class ItemNavbarMedium extends React.Component {
    render() {
        const {name} = this.props.data
        return(
            <div className="navbar__menu__item">
                <ul>
                    <a href="#" className="item__navbar">{name}</a>
                </ul>
            </div>
        )
    }
}

class NavbarMediumMenuLeft extends React.Component {
    render() {
        const { data } = this.props
        let itemNavbarMenu

        if (data.length){
            itemNavbarMenu = data.map(function (item) {
                return <ItemNavbarMedium key= {item.id} data={item}/>
            }) }
        else {
            itemNavbarMenu = <p>Здесь ничего нет</p>
        }

        return (
            <div className="item__bottom__navbar">
                {itemNavbarMenu}
            </div>
        )
    }
}

export default NavbarMediumMenuLeft;
