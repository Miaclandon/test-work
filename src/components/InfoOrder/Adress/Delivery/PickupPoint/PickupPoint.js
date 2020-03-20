import React from 'react';
import './PickupPoint.css';
import YandexMap from "./Map/Map";

class PickUpPoint extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: 'Кузнецкий мост'};

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }
    render() {
        return (
            <div className="delivery__order">
                <React.Fragment>
                    <h2>Пункт самовывоза</h2>
                    <div className="adress_order">
                        <div className="form-group-adress">
                            <label>Страна </label>
                            <select value={this.state.value} onChange={this.handleChange}>
                                <option value="ru">Кузнецкий мост</option>
                            </select>
                        </div>
                    </div>
                    {/*<YandexMap/>*/}
                </React.Fragment>
            </div>
        )}
}

export default PickUpPoint;