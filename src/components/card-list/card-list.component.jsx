import React from 'react';

export const CardList = props => {
    <div className="card-list">
        {
            
         props.children.map(
             child => <h1>{child}</h1>
         )  
        }
    </div>
}

