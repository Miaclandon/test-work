import React, { Component } from 'react';


class NavbarForPhone extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpened: false,
        };
        this.toggleBox = this.toggleBox.bind(this);
    }

    toggleBox() {
        this.setState(oldState => ({ isOpened: !oldState.isOpened }));
    }

    render() {
        const { title, children } = this.props;
        const { isOpened } = this.state;
        return (
            <div className="box">
                <div className="boxTitle" onClick={this.toggleBox}>
                    {title}
                </div>
                {isOpened && children && (
                    <div className="boxContent">
                        {children}
                    </div>
                )}
            </div>
        );
    }
}
export default NavbarForPhone;
