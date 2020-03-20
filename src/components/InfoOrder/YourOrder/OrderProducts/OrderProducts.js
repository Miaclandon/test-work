import React from 'react';
import './OrderProducts.css';

class ItemOrder extends React.Component {
    render() {
        const {name} = this.props.data;
        const {price} = this.props.data;
        return(
            <div className="products_your_order">
               <p>{name}</p>
                <p>{price}</p>
            </div>
        )
    }
}

class OrderProducts extends React.Component {
    render() {
        const { data } = this.props
        let itemOrder

        if (data.length){
            itemOrder = data.map(function (item) {
                return <ItemOrder key= {item.id} data={item}/>
            }) }
        else {
            itemOrder = <p>Здесь ничего нет</p>
        }

        return (
            <div className="item__your_order">
                {itemOrder}
            </div>
        )
    }
}


export default OrderProducts;