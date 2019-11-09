import React from 'react';
import MichaelLogo from './MichaelLogo/MichaelLogo';
import FeaturedItem from './FeaturedItem/FeaturedItem';
import './Overlay.css';

class Overlay extends React.Component {

    render() {
        return(
        <div className="overlay">
            <MichaelLogo/>
            <h2>MJ.L</h2>
            <h3>Featured Items</h3>
            <div className="featured scroll4">
                <FeaturedItem 
                    cId="th"
                    itemName="TimeHere" 
                    itemSub="For my mother."
                    itemDesc="A generated document to preserve life's values and stories. For those you wish to know more."
                    func="goTo"
                    funcArgs="[34.2, -118.6]"
                    />
                <FeaturedItem
                    cId="lipnet"
                    itemName="DeepLipReadng" 
                    itemSub="LipNet + GPT2 = ??"
                    itemDesc="Using predictive language modeling to assist lip reading vision networks."
                    func="goTo"
                    funcArgs="[40.6, -73.9]"
                />
                <FeaturedItem
                    cId="aoeai"
                    itemName="AlphaEmpires" 
                    itemSub="The grassroots Age of Empires AI."
                    itemDesc="Set of internally trained CNNs to recognize units to bootstrap a reinforcement learning agent to play AOE."
                    func="goTo"
                    funcArgs="[40.6, -73.9]"
                />

                <FeaturedItem
                    cId="aoeai"
                    itemName="AlphaEmpires" 
                    itemSub="The grassroots Age of Empires AI."
                    itemDesc="Set of internally trained CNNs to recognize units to bootstrap a reinforcement learning agent to play AOE."
                    func="goTo"
                    funcArgs="[40.6, -73.9]"
                />
            </div>
        </div>
        );
    }
}

export default Overlay;