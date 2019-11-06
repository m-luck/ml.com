import React from 'react';
import MichaelLogo from './MichaelLogo/MichaelLogo';
import FeaturedItem from './FeaturedItem/FeaturedItem';
import './Overlay.css';

class Overlay extends React.Component {
    render() {
        return(
        <div className="overlay">
            <MichaelLogo/>
            <FeaturedItem name="TimeHere"/>
            <FeaturedItem/>
            <FeaturedItem/>
        </div>
        );
    }
}

export default Overlay;