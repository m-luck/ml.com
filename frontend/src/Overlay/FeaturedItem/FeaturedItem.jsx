import React from 'react';
import './FeaturedItem.css';

function FeaturedItem(props) {
    return (
        <div>
            <h2>{props.itemName}</h2>
            <h3>{props.itemSub}</h3>
            <p>{props.itemDesc}</p>
        </div>
    );
}

export default FeaturedItem