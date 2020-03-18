import React from 'react';
import Contacts from "./Contacts/Contacts";
import Adress from "./Adress/Adress";
import Person from "./Person/Person";
import './infoOrder.css';
import Comments from "./Comments/Comments";
import YourOrder from "./YourOrder/YourOrder";

function InfoOrder() {
    return (
        <div className="order">
            <React.Fragment>
                <h1 className="block_order_header">Оформление заказа</h1>
                <div className="block_order">
                    <div className="block_order_left_checkout">
                        <Person/>
                        <Contacts/>
                        <Adress/>
                        <Comments/>
                    </div>
                    <div className="block_order_right_your_order">
                        <YourOrder/>
                    </div>
                </div>
            </React.Fragment>
        </div>

    );
}


export default InfoOrder;
