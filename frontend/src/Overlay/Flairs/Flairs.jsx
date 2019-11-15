import React from 'react';
import './Flairs.css';
import Button from '@material-ui/core/Button';
import red from '@material-ui/core/colors/red';


class Flairs extends React.Component {
    constructor(props) {
        super(props);
        const cred = red[500];
    }

    returnButton(text, color) {
        return (
            <span> <Button disabled size="small" style={{color: color, border:"1px solid", borderColor: color, opacity: 0.8, fontSize: "9px"}}>{text}</Button> </span>
        )
    }
    render() {
        var builder = [];
        let flairs = this.props.flairsList;
        if (flairs != null) {
            var flairray = flairs.split(",");

            if (flairray.includes("python")) {
                builder.push(this.returnButton("python 3", "yellow"));
            }
            
            if (flairray.includes("pytorch")) {
                builder.push(this.returnButton("pytorch", "orange"));
            }

            
            if (flairray.includes("cv")) {
                builder.push(this.returnButton("computer vision", "#2288FF"));
            }

            
            if (flairray.includes("nlp")) {
                builder.push(this.returnButton("NLP", "#11EE33"));
            }

            
            if (flairray.includes("stripe")) {
                builder.push(this.returnButton("stripe", "white"));
            }

            
            if (flairray.includes("ml")) {
                builder.push(this.returnButton("ml engineering", "red"));
            }

            
            if (flairray.includes("collaboration")) {
                builder.push(this.returnButton("collaboration", "purple"));
            }

            if (flairray.includes("react")) {
                builder.push(this.returnButton("react.js", "skyblue"));
            }

            if (flairray.includes("express")) {
                builder.push(this.returnButton("express.js", "#11AA00"));
            }
        }
        
        return(builder);
    }
}

export default Flairs;