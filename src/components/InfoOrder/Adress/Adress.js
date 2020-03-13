import React from 'react';
import YandexMap from "./Delivery/Map/Map";
import './Adress.css';

function Adress() {
    return (
        <div className="delivery__order">
            <React.Fragment>
                <h2>Адрес и способ доставки</h2>
                <div className="adress_order">
                    <div className="form-group-adress">
                        <label>Страна</label>
                        <select name="name" id="">
                            <option value="Россия">Россия</option>
                            <option value="Россия">Россия</option>
                            <option value="Россия">Россия</option>
                            <option value="Россия">Россия</option>
                            <option value="Россия">Россия</option>
                        </select>
                    </div>
                    <div className="form-group-adress">
                        <label>Город</label>
                        <input type="text" name="city"/>
                    </div>
                </div>
                <YandexMap/>
            </React.Fragment>
        </div>

    );
}

export default Adress;