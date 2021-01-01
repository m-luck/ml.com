import React from 'react';

import Button from '@material-ui/core/Button'
import FeaturedItem from './FeaturedItem/FeaturedItem';
import MichaelLogo from './MichaelLogo/MichaelLogo';

import './Overlay.css';
import * as constants from './OverlayConstants';

class Overlay extends React.Component {

    componentDidMount() {
        document.getElementById("close")
            .onclick = function() { 
                document.getElementById("information")
                    .style.visibility = "hidden";
                document.getElementById("featured")
                    .style.left = "90px";
                document.getElementById("close")
                    .style.visibility = "hidden";
            }
    }

    renderFeatureList() { 
        return (
            <div id="featured" className="scroll4">
                {
                    constants.items.map(item =>
                        (
                            <FeaturedItem
                                itemInfo={item}
                            />
                        )
                    )
                }
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

                <div
                    className="scroll4"
                    id="information"
                />

                <MichaelLogo/>

                <h3>Featured<br></br>Items</h3>

                {this.renderFeatureList()}

            </div>
        );
    }
}

export default Overlay;