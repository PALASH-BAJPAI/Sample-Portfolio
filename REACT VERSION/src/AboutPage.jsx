import React from "react";

const AboutPage = () => {
    return(
        <div className="about">
            <h1>About Me</h1>
            <img src={require("./images/code.png")} alt="Code"/>


            <p>"Team player with a perfect leadership quality"</p>
            <p>"Always look to solve problems, not only point them"</p>
            <p>"No matter however I started, just want a win at last"</p>
            <p className="about-para">Born and raised in Indore, India. Undergraduate student at National Institute of Technology, Calicut, Kerala . Pursuing my degree in the field of Computer Science. My greatest qualities are my passion to win and quick learning ability which makes
                me a great asset to my team. With a keen interest in coding, I currently know python, C, HTML, CSS, javascript. Also with my good drawing skill and creative ideas combined with photoshop and illustrator, I can work in graphics designing. After
                I complete my education I will be working on some good projects helpful for people. I will completely devote my time to building and working on new ideas.</p>

        </div>
    )
}

export default AboutPage;