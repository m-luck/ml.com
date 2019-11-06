import React from 'react';
import './FeaturedItem.css';

function FeaturedItem(props) {
    return (
        <div>
            <h2>Featured Item: {props.name}</h2>
        </div>
    );
}

export default FeaturedItem