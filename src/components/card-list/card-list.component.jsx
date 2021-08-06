import React from 'react';

export const CardList = props => {
    <div className="card-list">
        {
            props.posts.map(pic=>{
                return (<h1>{pic.title}</h1>);
            })
        }
    </div>
}
asd asdasd