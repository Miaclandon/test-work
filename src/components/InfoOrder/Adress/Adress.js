import React from 'react';
import './Adress.css';
import Delivery from "./Delivery/Delivery";
import PickUpPoint from "./Delivery/PickupPoint/PickupPoint";

class Adress extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: 'coconut'};

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }
    render() {
        return (
            <div className="delivery__order">
                <React.Fragment>
                    <h2>Адрес и способ доставки</h2>
                    <div className="adress_order">
                        <div className="form-group-adress">
                                <label>Страна </label>
                                    <select value={this.state.value} onChange={this.handleChange}>
                                        <option value="ru">Россия</option>
                                        <option value="uk">Украина</option>
                                        <option value="kz">Казахстан</option>
                                    </select>
                        </div>
                        <div className="form-group-adress">
                            <label>Город</label>
                            <input type="text" name="city"/>
                        </div>
                    </div>
                    <Delivery/>
                    <PickUpPoint/>
                </React.Fragment>
            </div>
        )}
}

export default Adress;