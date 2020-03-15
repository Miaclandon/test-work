import React from 'react';
import Contacts from "./Contacts/Contacts";
import Adress from "./Adress/Adress";
import Person from "./Person/Person";
import './infoOrder.css';

function InfoOrder() {
    return (
        <div className="block_order">
            <React.Fragment>
                <div className="block_order_left_checkout">
                    <h2 className="block_order_header">Оформление заказа</h2>
                    <Person/>
                    <Contacts/>
                    <Adress/>
                </div>
                <div className="block_order_right_your_order">
                        <h2>Ваш заказ</h2>
                </div>
            </React.Fragment>
        </div>

    );
}


export default InfoOrder;
