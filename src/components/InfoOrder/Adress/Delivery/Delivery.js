import React from 'react';
import {reduxForm} from "redux-form";
import './Delivery.css';
import RadioButton from "./RadioButton/RadioButton";

const Delivery = props => {
const { handleSubmit, pristine, reset, submitting } = props;
    return (
            <form onSubmit={handleSubmit}>
            <div>
            <label>Доставка</label>
                <div>
                    <RadioButton name="delivery" caption="Самовывоз" radioButtonValue="Самовывоз"/>
                    <RadioButton name="delivery" caption="Доставка почтой" radioButtonValue="Доставка почтой"/>
                    <RadioButton name="delivery" caption="Доставка курьерской службой" radioButtonValue="Доставка курьерской службой"/>
                </div>
            </div>
                <div>
                    <button type="submit" disabled={pristine || submitting}>Submit</button>
                    <button type="button" disabled={pristine || submitting} onClick={reset}>
                        Clear Values
                    </button>
                </div>
        </form>
    );
    };
export default reduxForm({
    form: 'delivery', // a unique identifier for this form
    initialValues: { mood:"Доставка почтой"}
})(Delivery);