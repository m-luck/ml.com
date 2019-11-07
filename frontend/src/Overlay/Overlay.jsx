import React from 'react';
import MichaelLogo from './MichaelLogo/MichaelLogo';
import FeaturedItem from './FeaturedItem/FeaturedItem';
import './Overlay.css';

class Overlay extends React.Component {
    render() {
        return(
        <div className="overlay">
            <MichaelLogo/>
            <FeaturedItem 
                cId="th"
                itemName="TimeHere" 
                itemSub="A generated document to preserve life's values and stories. For those you wish to know more."
                itemDesc="Lorem ispum" 
                clickFunc="goTo"
                clickArgs="[22.0, 22.0]"
                />
            <FeaturedItem/>
            <FeaturedItem/>
        </div>
        );
    }
}

export default Overlay;