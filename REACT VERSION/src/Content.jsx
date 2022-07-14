import React from "react";

const Content = () => {
    return(
        <div class="skill">
            <div class="skills-content s1">
                <img className="im1" src={require("./images/code-logo.jpg")} alt="Skills" />
                <h1>Code and Development</h1>
                <p class="code">I turn coffee into code. Required an app or site or just help in your coding assignment feel free to contact me. However help is not free at all. Although I know web development and python but can learn anything if required.</p>
            </div>


            <div class="skills-content s2">
                <img className="im2" src={require("./images/chillies.png")} alt="Chillies" />
                <h1>Design As Hot as chillies</h1>
                <p class="code2">Got Stuck!!!!. Don't have idea how to design your app or website. Go through some of my design through my github profile. Even then contact me for some great looking design who can attract your client in just 3 sec....</p>
            </div>
    </div>
    )
}

export default Content;