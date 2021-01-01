import React from 'react';
import Button from '@material-ui/core/Button';

import './Flairs.css';
import * as constants from '../OverlayConstants';

class Flairs extends React.Component {

    getButton(text, color) {

        return (
            <span>
                <Button 
                    disabled
                    size="small"
                    style={
                        {
                            border:"1px solid",
                            borderColor: color,
                            color: color,
                            fontSize: "9px",
                            opacity: 0.8,
                        }
                    }
                >
                    {text}
                </Button>
            </span>
        )

    }

    getFlair(flair) {

        switch (flair) {
            case constants.ANSIBLE:
                return (this.getButton("ansible", "purplse"));
            case constants.BIOLOGY:
                return (this.getButton("biology", "green"));
            case constants.COLLABORATION:
                return (this.getButton("collaboration", "purple"));
            case constants.COMPUTER_VISION:
                return (this.getButton("computer vision", "#2288FF"));
            case constants.DEVOPS:
                return (this.getButton("DEVOPS", "orange"));
            case constants.EXPRESS:
                return (this.getButton("express.js", "#11AA00"));
            case constants.EMBEDDED_SYSTEMS:
                return (this.getButton("embedded systems", "#11AA00"));
            case constants.KUBERNETES:
                return (this.getButton("KUBERNETES", "#2288FF"));
            case constants.MACHINE_LEARNING:
                return (this.getButton("machine learning", "red"));
            case constants.MECHANICS:
                return (this.getButton("mechanics", "red"));
            case constants.NATURAL_LANGUAGE_PROCESSING:
                return (this.getButton("natural language processing", "#11EE33"));
            case constants.NETWORKING:
                return (this.getButton("networking", "green"));
            case constants.PYTHON:
                return (this.getButton("python", "yellow"));
            case constants.PYTORCH:
                return (this.getButton("pytorch", "orange"));
            case constants.REACT:
                return (this.getButton("react.js", "skyblue"));
            case constants.STRIPE:
                return (this.getButton("stripe.js", "white"));
            case constants.THREED_PRINTING:
                return (this.getButton("3D PRINTING", "yellow"));
            default:
                return undefined
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