import React from 'react';
import './FeaturedItem.css';
import Flairs from '../Flairs/Flairs'
import Button from '@material-ui/core/Button';

class FeaturedItem extends React.Component {

    componentDidMount() {

        const {  
            itemInfo: { 
                cId,
                func,
                funcArgs,
                infoHTML,
            }
        } = this.props;
        
        const styleCard = () => {
                
            window[func](...eval(funcArgs));

            document
                .getElementById("information")
                .innerHTML = "" + infoHTML
            document
                .getElementById("information")
                .style.visibility = "visible";

            const mq = window
                .matchMedia( "(max-width: 1024px)" );

            if (mq.matches) {
                document.getElementById("featured")
                    .style.left = "-1000px";
                document.getElementById("close")
                    .style.visibility = "visible";
            }

        }

        if (cId !== null) {
            document.getElementById(""+cId)
                .onclick = styleCard;
        }
    }

    render() { 

        const {  
            itemInfo: { 
                itemDesc,
                itemName,
                itemSub,
                cId,
                buttonText,
                flairsList,

            }
        } = this.props;

        return (
            <div className="featuredItem">

                <h2>{itemName}</h2>
                <h3>{itemSub}</h3>
                <p>{itemDesc}</p>

                <Button 
                    color="default"
                    id={cId}
                    size="large"
                    variant="contained"
                    width="100px"
                >
                    {buttonText}
                </Button>

                <p>
                    <Flairs flairsList={flairsList}/>
                </p>

            </div>
        );
    }

}

export default FeaturedItem;