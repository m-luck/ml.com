import React from 'react';
import './FeaturedItem.css';
import Button from '@material-ui/core/Button';

class FeaturedItem extends React.Component {
    constructor(props) {
        super(props);
    }
    render() { 
        return (
            <div>
                <h2>{this.props.itemName}</h2>
                <h3>{this.props.itemSub}</h3>
                <p>{this.props.itemDesc}</p>
                <Button id="{this.props.cId}" variant="contained" color="default">GO</Button>
            </div>
        );
    }

    componentDidMount() {
        let fun = this.props.clickFunc
        let args = this.props.clickArgs
        if (this.props.cId != null) {
            document.getElementById("{this.props.cId}").onclick = function() {
                window[fun](...eval(args));
            };
        }
    }
}

export default FeaturedItem;