import React from 'react';

import Button from '@material-ui/core/Button'
import FeaturedItem from './FeaturedItem/FeaturedItem';
import MichaelLogo from './MichaelLogo/MichaelLogo';

import './Overlay.css';
import * as constants from './OverlayConstants';

class Overlay extends React.Component {

    componentDidMount() {
        document.getElementById("close").onclick = function() { 
            document.getElementById("information").style.visibility = "hidden";
            document.getElementById("featured").style.left = "90px";
            document.getElementById("close").style.visibility = "hidden";
        }
    }

    renderFeatureList() { 
        return (
            <div id="featured" className="scroll4">
                <FeaturedItem
                    buttonText={constants.LEARN_MORE}
                    cId="lipnet"
                    flairsList="python,pytorch,datascience,ml,collaboration,cv,nlp"
                    func="goTo"
                    funcArgs={constants.NEW_YORK_COORDS}
                    itemInfo={constants.LIPNET_INFO}
                />
                <FeaturedItem 
                    buttonText={constants.PURCHASE}
                    cId="th"
                    flairsList="python,react,stripe,express"
                    func="goTo"
                    funcArgs={constants.CALI_COORDS}
                    itemInfo={constants.TIMEHERE_INFO}
                />
                <FeaturedItem
                    cId="aoeai"
                    buttonText={constants.LEARN_MORE}
                    func="goTo"
                    funcArgs={constants.NEW_YORK_COORDS}
                    itemInfo={constants.AOEAI_INFO}
                />
                <FeaturedItem
                    cId="nngpu"
                    func="goTo"
                    funcArgs={constants.NEW_YORK_COORDS}
                    itemInfo={constants.NNGPU_INFO}
                />
            </div>
        )
    }

    render() {
        return(
        <div className="overlay">
            <Button
                color="default"
                id="close"
                variant="contained"
            >
                HOME
            </Button>
            <div id="information" className="scroll4"></div>
            <MichaelLogo/>
            <h3>Featured<br></br>Items</h3>
            {this.renderFeatureList()}
        </div>
        );
    }
}

export default Overlay;