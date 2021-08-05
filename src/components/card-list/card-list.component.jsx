import React from 'react';

export const CardList = props => {
    <div>
        {
            props.posts.map(pic=>(
                return (<h1>{pic.title}</h1>);
            ))
        }
    </div>
}