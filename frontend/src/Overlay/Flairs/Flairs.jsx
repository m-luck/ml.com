import React from 'react';
import Button from '@material-ui/core/Button';

import './Flairs.css';
import * as constants from '../OverlayConstants';

class Flairs extends React.Component {

    getButton({color, noBorder, text}) {
        console.log(text, color);

        return (
            <span>
                <Button 
                    disabled
                    size="small"
                    style={
                        {
                            border: !noBorder && "1px solid",
                            borderColor: color,
                            color: color,
                            fontSize: "9px",
                            opacity: 0.8,
                            "margin": "3.5px",
                        }
                    }
                >
                    {text}
                </Button>
            </span>
        )

    }

    getFlair(flair) {
        if (flair) {
            return this.getButton(flair);
        }
    }

    render() {

        const builder = [];
        const flairs = this.props.flairsList;

        if (flairs && flairs.length) {
            flairs.forEach(flair => {
                builder.push(this.getFlair(flair))
            })
        }
        
        return(builder);
    }
}

export default Flairs;