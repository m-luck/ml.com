import React from 'react';
import './FeaturedItem.css';
import Flairs from '../Flairs/Flairs'
import Button from '@material-ui/core/Button';

class FeaturedItem extends React.Component {
    render() { 
        const { cId, buttonText, flairsList, itemInfo: { itemDesc, itemName, itemSub }} = this.props;
        return (
            <div className="featuredItem">
                <h2>{itemName}</h2>
                <h3>{itemSub}</h3>
                <p>{itemDesc}</p>
                <Button width="100px" id={cId} variant="contained" size="large" color="default">{buttonText}</Button>
                <p>
                <Flairs flairsList={flairsList}/></p>
            </div>
        );
    }

    componentDidMount() {
        let fun = this.props.func;
        let args = this.props.funcArgs;
        let infoHTML = this.props.infoHTML;
        if (this.props.cId != null) {
            document.getElementById(""+this.props.cId).onclick = function() {
                window[fun](...eval(args));
                document.getElementById("information").innerHTML = "" + infoHTML;
                document.getElementById("information").style.visibility = "visible";
                let mq = window.matchMedia( "(max-width: 1024px)" );
                if (mq.matches) {
                    document.getElementById("featured").style.left = "-1000px";
                    document.getElementById("close").style.visibility = "visible";
                }
            };
        }
    }
}

export default FeaturedItem;