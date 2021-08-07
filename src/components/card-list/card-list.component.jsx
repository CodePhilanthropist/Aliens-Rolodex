import React from 'react';
import './card-list.style.css';

export const CardList = props => {
    return <div className="card-list">
        {props.monsters.map(pic => <h1>{pic.name}</h1>)}
    </div>
}

