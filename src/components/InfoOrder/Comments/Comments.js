import React from 'react';
import './Comments.css';

class Comments extends React.Component {
    render() {
        return (
            <div className="comments_to_order">
                <React.Fragment>
                    <h2>Комментарий к заказу</h2>
                    <input className="comment" name="text"/>
                    <button type="submit"></button>
                </React.Fragment>
            </div>

        );
    }
}

export default Comments;