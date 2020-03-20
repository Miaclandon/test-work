import React from "react";
import "./ToggleButton.css";

const ToggleButton = props => {
    const { value, onButtonClick, selectedButton } = props;
    const active = selectedButton.includes(value) ? "active" : "";
    const classes = `btn btn-primary ${active}`;

    return (
        <button
            onClick={() => onButtonClick(value)}
            className={classes}
            aria-label={value}
            type="button"
            value={value}
        >
            {value}
        </button>
    );
};

export default ToggleButton;
