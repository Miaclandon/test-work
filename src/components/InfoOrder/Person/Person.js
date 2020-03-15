import React from "react";
import './person.css';
class Person extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};

        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }
    render() {
        return (
            // <button onClick={this.handleClick}>
            //     {this.state.isToggleOn ? 'ON' : 'OFF'}
            // </button>
            <React.Fragment>
                <button onClick={this.handleClick}>Физическое лицо</button>
                <button onClick={this.handleClick}>Юридическое лицо  </button>
            </React.Fragment>

        );
    }
}
export default Person;
// import React from 'react';
// import './person.css';
//
//
// const Person = (props) => {
//     console.log(props.style);
//     return(
//         <button
//             style= {props.style}
//             className = {props.type=='primary'? 'btn btn-primary' : 'btn btn-secondary'}
//             onClick= {props.action} >
//             {props.title}
//         </button>)
// }
//
//
// export default Person;