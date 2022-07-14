import React from "react";
import HeroPage from "./HeroPage";
import AboutPage from "./AboutPage";
import Content from "./Content";
import Footer from "./Footer";

function App(){
    return(
        <div className="app">
            <HeroPage />
            <AboutPage />
            <Content />
            <Footer />
        </div>
    );
}

export default App;