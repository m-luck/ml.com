import React from 'react';
import './WorldComponent.css';

class WorldComponent extends React.Component   {

    constructor(props) {
        super(props);
    }

    render() { 
        return (
            <div className="WorldComponent">
                <script  src="./WorldScript.js"></script>
                <div class="world"> 
                    <div class="world-bg"></div>
                        <div class="world-globe">
                            <div class="world-globe-pole"></div>
                            <div class="world-globe-doms-container"></div>
                            <div class="world-globe-halo"></div>
                        </div>
                </div>
                <div class="info">
                    <div class="info-title">CSS Non-webgl realistic globe Demo</div>
                    <div class="info-desc">Example for my meetup talk. Use <a href="https://github.com/edankwan/PerspectiveTransform.js" target="_blank">PerspectiveTransform</a> and visual trick to create a CSS 3D globe.</div>
                    <div class="info-links"><a href="https://twitter.com/edankwan" target="_blank">@edankwan</a></div>
                </div>
            </div>
        );
    }
    
    componentDidMount () {
        var js_resources = [
        "https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min.js",
        "https://cdnjs.cloudflare.com/ajax/libs/prefixfree/1.0.7/prefixfree.min.js",
        "https://cdnjs.cloudflare.com/ajax/libs/dat-gui/0.5/dat.gui.min.js",
        "https://cdnjs.cloudflare.com/ajax/libs/stats.js/r11/Stats.js",
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