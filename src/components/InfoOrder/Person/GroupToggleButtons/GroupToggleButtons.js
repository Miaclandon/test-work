import React from "react";
import ToggleButton from "./../ToggleButton/ToggleButton";

class GroupToogleButtons extends React.Component {
    render() {
        const { values, onButtonClick, selectedButton } = this.props;
        return (
            <div>
                <div className="btn-group" role="group">
                    {values.map((value, i) => {
                        return (
                            <ToggleButton
                                key={`button${i}`}
                                value={value}
                                selectedButton={selectedButton}
                                onButtonClick={onButtonClick}
                            >
                            </ToggleButton>
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default GroupToogleButtons;
