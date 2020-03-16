import React from "react";
import "./Delivery.css";
import YandexMap from "./PickupPoint/Map/Map";

class Delivery extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            selectedOption: "option1"
        }
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
                                Option1
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
                                Option2
                            </label>
                        </div>
                        <div className="delivery__form-check-last">
                            <label>
                                <input
                                    type="radio"
                                    name="react-tips"
                                    value="option2"
                                    checked={this.state.selectedOption === "option2"}
                                    onChange={this.handleOptionChange}
                                    className="delivery__form-check-input"
                                />
                                Option2
                            </label>
                        </div>
                    </form>
                </React.Fragment>
            </div>
        )
    }
}

export default Delivery;