import React from 'react';
import './YourOrder.css';
import OrderProducts from "./OrderProducts/OrderProducts";
const itemOrder = [
    {
        id:0,
        name: 'О магазине',
        price: '544'
    },
    {
        id:1,
        name: 'Доставка и самовывоз',
        price: '454'
    },
];


function YourOrder() {
    return (
        <div className="block_your_order">
            <h2>Ваш заказ</h2>
            <OrderProducts data={itemOrder}/>
        </div>

    );
}


export default YourOrder;
