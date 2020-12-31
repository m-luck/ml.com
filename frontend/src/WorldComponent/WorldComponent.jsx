import React from 'react';
import './WorldComponent.css';

class WorldComponent extends React.Component   {

    render() { 
        return (
            <div className="WorldComponent">
                <script  src="./WorldScript.js"></script>
                <div className="world"> 
                    <div className="world-bg"></div>
                        <div className="world-globe">
                            <div className="world-globe-pole"></div>
                            <div className="world-globe-doms-container"></div>
                            <div className="world-globe-halo"></div>
                        </div>
                </div>
                {/* <div className="info">
                    <div className="info-links"><a href="https://twitter.com/edankwan" target="_blank">Thanks @edankwan</a></div>
                </div> */}
            </div>
        );
    }
    
    // "https://cdnjs.cloudflare.com/ajax/libs/dat-gui/0.5/dat.gui.min.js",
    // "https://cdnjs.cloudflare.com/ajax/libs/stats.js/r11/Stats.js",
    componentDidMount () {
        var js_resources = [
        "https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min.js",
        "https://cdnjs.cloudflare.com/ajax/libs/prefixfree/1.0.7/prefixfree.min.js",
        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/6043/css_globe_PerspectiveTransform.js",
        "https://cdnjs.cloudflare.com/ajax/libs/gsap/1.16.1/TweenMax.min.js",
        "./js/WorldScript.js"
        ];

        var script;
        var i;
        for (i = 0; i < js_resources.length; i++) {
            script = document.createElement("script");
            script.src = js_resources[i];
            script.async = true;
            document.body.appendChild(script);
        }
    }
}

export default WorldComponent;