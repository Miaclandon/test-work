import React from "react";
import "./Delivery.css";
import PickUpPoint from "./PickupPoint/PickupPoint";
import OrderProducts from "../../YourOrder/OrderProducts/OrderProducts";
import YourOrder from "../../YourOrder/YourOrder";

class Delivery extends React.Component{

    constructor() {
        super();

        this.state = {
            delivery: 'Доставка курьерской службой'
        };

        this.onRadioChange = this.onRadioChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this)
        }


    onRadioChange = (e) => {
        this.setState({
            delivery: e.target.value
        });
    }

    onSubmit = (e) => {
        e.preventDefault();
         console.log(this.state);
    }
 /*   handleOptionChange = changeEvent => {
        this.setState({
            selectedOption: changeEvent.target.value
        })
    }

    handleFormSubmit = formSubmitEvent => {
        formSubmitEvent.preventDefault();

        console.log("You have submitted:", this.state.selectedOption)
    }*/
    render() {
        return(
            <div className="delivery__order">
                <h2>Способ доставки</h2>
                <React.Fragment>
                    <form onSubmit={this.onSubmit}>
                        <div className="delivery__form-check">
                            <label>
                                <input
                                    type="radio"
                                    value="Доставка курьерской службой"
                                    checked={this.state.delivery === "Доставка курьерской службой"}
                                    onChange={this.onRadioChange}
                                    className="delivery__form-check-input"
                                />
                                &nbsp;&nbsp;Доставка курьерской службой - 710 ₽
                                <p>(Срок доставки - 1-3 дня)</p>
                            </label>
                        </div>
                        <div className="delivery__form-check">
                            <label>
                                <input
                                    type="radio"
                                    value="Доставка транспортной компанией"
                                    checked={this.state.delivery === "Доставка транспортной компанией"}
                                    onChange={this.onRadioChange}
                                    className="delivery__form-check-input"
                                />
                                &nbsp;&nbsp;Доставка транспортной компанией — 210 ₽
                                <p>(Данный вид доставки возможен при полной
                                    предоплате заказа. Срок доставки — 3–5 дней)
                                </p>
                            </label>
                        </div>
                        <div className="delivery__form-check-last">
                            <label>
                                <input
                                    type="radio"
                                    value="Самовывоз"
                                    checked={this.state.delivery === "Самовывоз"}
                                    onChange={this.onRadioChange}
                                    className="delivery__form-check-input"
                                />
                                &nbsp;&nbsp;Самовывоз — 180 ₽
                                <p>Доставка до пункта самовывоза займет 2–3 дня</p>
                            </label>
                        </div>
                    </form>
                </React.Fragment>
            </div>
        )
    }
}

export default Delivery;