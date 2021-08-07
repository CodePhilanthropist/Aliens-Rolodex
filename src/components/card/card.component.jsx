import React from 'react';
import './card.style.css';

export const Card = props => {
    return (
        <div className="card-container">
            <img alt={props.monster.id} src={`https://robohash.org/${props.monster.id}/?set=set2&size=150x150`}/>
            <h2>{props.monster.name}</h2>
            <p>{props.monster.email}</p>
        </div>
    );
}