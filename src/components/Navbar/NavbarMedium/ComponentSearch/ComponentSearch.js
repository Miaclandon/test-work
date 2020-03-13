import React from 'react';
import './search.css';

function ComponentSearch() {
    return (
        <div className="Search">
            <input type="text" className='search' placeholder="Найди что-нибудь"/>
            <img src="./images/search.svg" height={12} width={14} className="icon__search"/>
        </div>
    );
}

export default ComponentSearch;
