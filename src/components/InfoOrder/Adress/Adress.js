import React from 'react';
import YandexMap from "./Delivery/Map/Map";
import './Adress.css';

class Adress extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: 'coconut'};

        this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    // handleSubmit(event) {
    //     alert('Выбранная страна: ' + this.state.value);
    //     event.preventDefault();
    // }

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
                </React.Fragment>
            </div>
        )}
}

export default Adress;