import React from 'react';

export const Card = props => {
    return (
        <div className="card">
            <h1>{props.monster.name}</h1>
        </div>
    );
}