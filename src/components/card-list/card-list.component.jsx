import React from 'react';
import {Card} from '..card.component';

import './card-list.style.css';

export const CardList = props => {
    return <div className="card-list">
        <Card monster={props.monsters}/>
        {props.monsters.map(pic => <h1>{pic.name}</h1>)}
    </div>
}

