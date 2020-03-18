import React, { Component } from "react";
import GroupToogleButtons from "./GroupToggleButtons/GroupToggleButtons";

class Person extends Component {
    constructor(props) {
        super(props);

        this.onButtonClick = this.onButtonClick.bind(this);
        this.state = {
            selectedButton: [],
            person: [
                "Физическое лицо",
                "Юридическое лицо"
            ]
        };
    }

    onButtonClick(selected) {
        const index = this.state.selectedButton.indexOf(selected);
        if (index < 0) {
            this.state.selectedButton.push(selected);
        } else {
            this.state.selectedButton.splice(index, 1);
        }
        this.setState({ selectedButton: [...this.state.selectedButton] });
    }
    render() {
        const { person, selectedButton } = this.state;

        return (
            <div className="container centered">
                <GroupToogleButtons
                    values={person}
                    selectedButton={selectedButton}
                    onButtonClick={this.onButtonClick}
                />
            </div>
        );
    }
}
export default Person;
