import React from "react";
import "./Delivery.css";
import PickUpPoint from "./PickupPoint/PickupPoint";

class Delivery extends React.Component{
    constructor(props) {
        super(props);
        this.state = "option1";
    }

    handleOptionChange = changeEvent => {
        this.setState({
            selectedOption: changeEvent.target.value
        })
    }

    handleFormSubmit = formSubmitEvent => {
        formSubmitEvent.preventDefault();

        console.log("You have submitted:", this.state.selectedOption)
    }
    render() {
        return(
            <div className="delivery__order">
                <h2>Способ доставки</h2>
                <React.Fragment>
                    <form onSubmit={this.handleFormSubmit}>
                        <div className="delivery__form-check">
                            <label>
                                <input
                                    type="radio"
                                    name="react-tips"
                                    value="option1"
                                    checked={this.state.selectedOption === "option1"}
                                    onChange={this.handleOptionChange}
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
                                    name="react-tips"
                                    value="option2"
                                    checked={this.state.selectedOption === "option2"}
                                    onChange={this.handleOptionChange}
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
                                    name="react-tips"
                                    value="option3"
                                    checked={this.state.selectedOption === "option3"}
                                    onChange={this.handleOptionChange}
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