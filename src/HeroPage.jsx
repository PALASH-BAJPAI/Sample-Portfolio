import React from "react";
import Model from "./Model";

const HeroPage = () => {
    return(
        <div className="hero-page">
            <img src={require("./images/cloud.png")} className="cloud1" alt="Cloud"/>
            <h1 class="p">I'm Palash Bajpai</h1>
            <h3 class="p2">A Programmer / Coder</h3>
            <img src={require("./images/cloud.png")} className="cloud2" alt="Cloud"/>
            <div className="model">
            <Model />
            </div>
            <img src={require("./images/mountain.png")} className="mountain" alt="Mountain"/>
        </div>
    );
}

export default HeroPage;
