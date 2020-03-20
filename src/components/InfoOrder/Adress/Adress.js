import React from 'react';
import { Provider } from 'react-redux';
import './Adress.css';
import PickUpPoint from "./Delivery/PickupPoint/PickupPoint";
import Delivery from "./Delivery/Delivery";
import store from "./Delivery/store";
import showResults from "./Delivery/showResults";

class Adress extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ["ru", "uk", "kz"]};

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
                    <Provider store={store}>
                        <div>
                            <Delivery onSubmit={showResults}/>
                            {/*<Values form='delivery'/>*/}
                        </div>
                    </Provider>
                    <PickUpPoint/>
                </React.Fragment>
            </div>
        )}
}

export default Adress;