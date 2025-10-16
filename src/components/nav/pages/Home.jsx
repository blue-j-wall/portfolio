import { Card } from 'react-bootstrap'

import { FaJava, FaPython, FaCss3Alt, FaReact, FaDatabase } from "react-icons/fa6";
import { FaArrowAltCircleDown } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";

import SplitText from '../../SplitText';
import ScrollFloat from '../../ScrollFloat';

export default function Home(props) {

    const handleAboutClick = () => {
        let aboutButton = document.getElementById("tabs").children[0];
        aboutButton.click();
    }

    let cardIcons = [
        [<FaJava aria-hidden="true"/>, <p>Java</p>], 
        [<FaPython aria-hidden="true"/>, <p>Python</p>], 
        [<FaDatabase aria-hidden="true"/>, <p>SQL</p>], 
        [<FaCss3Alt aria-hidden="true"/>, <p>CSS</p>], 
        [<IoLogoJavascript aria-hidden="true"/>, <p>JavaScript</p>], 
        [<FaReact aria-hidden="true"/>, <p>React</p>]];
    let cards = [];
    for (let icon of cardIcons) { 
        cards.push(<Card className="lang" key={icon[0].type.name}>
            <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                {icon[0]}
                {icon[1]}
            </Card.Body>
        </Card>)
    }

    return <div className="full-page">
        <div id="landing" className="d-flex flex-column justify-content-center align-items-center">
            <SplitText text="Jamie Wall" tag="h1"/>
            <h2>entry-level programmer (and linguist)</h2>
            <p>check out my <a href="https://docspace-9fcc69.onlyoffice.com/s/w_h2YsRcsr94GYd" target="_blank">resume</a> or summary of what 
                I'm interested in <a onClick={handleAboutClick} tabIndex="0">below <FaArrowAltCircleDown aria-label="down arrow"/></a></p>
        </div>
        
        <div id="about">
            <ScrollFloat aria-label="About Me">About Me</ScrollFloat>
            <p className="cs">I'm an entry-level programmer with experience in both front-end and back-end development. The software stack I am familiar with is React for the frontend, 
                JavaScript/Express for the backend, and SQLite for the database.<br/><br/> 
                For things like data structures and algorithms, my preferred programming language is Java. I prioritize general problem-solving ability as one my strengths for both
                computer science and linguistics as it lends flexibility to learning new material.
            </p>
            <div className="d-flex flex-wrap justify-content-center">{cards}</div>
            <p className="ling">When it comes to the study of language, my interests lie mostly in morphology and sociolinguistics. I've written papers on both and 
                done research on the latter (with and without human subjects), which provided me experience doing literature reviews, experimental design, data collection, and statistical analysis with R.
                I'm also more casually interested in tense theory, and I'm writing a paper based on reading that I've done in my free time.
                <br/><br/>
                Combining my fields of study, I hope to pursue a career in computational linguistics. I've focused on developing the broad skills it requires,
                including programming AI models in Python and using its NLTK library for NLP projects.
            </p>
        </div>

    </div>
}