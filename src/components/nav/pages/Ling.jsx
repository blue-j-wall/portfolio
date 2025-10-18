import { Image, Card, Figure } from 'react-bootstrap'

import emoji1 from "/assets/projects-media/slight smiley.png";
import emoji2 from "/assets/projects-media/closed eyes smiley.png";
import emoji3 from "/assets/projects-media/grinning smiley.png";
import larynx from "/assets/projects-media/larynx wikipedia.png";

export default function Ling(props) {

    return <div className="full-page non-home">
        <h1 id="ling">I have done sociolinguistics research on...</h1>
        
        <Card className="project">
            <Card.Body className="d-flex flex-row flex-md-nowrap flex-wrap justify-content-center align-items-center">

                <div id="emoji-group" className="d-flex flex-row flex-md-wrap flex-nowrap">
                    <Image alt="slightly smiling face emoji" src={emoji1}/>
                    <Image alt="smiling face with smiling eyes emoji" src={emoji2}/>
                    <Image alt="grinning face with smiling eyes emoji" src={emoji3}/>
                </div>
                
                <div className="body-text">
                    <h2><Card.Title>Emojis</Card.Title></h2>
                    <Card.Text>This is an independent research project on ‘internet speech’. It covers how people use and perceive <strong>emojis/emoticons in texting and social media</strong>, and how that varies based on age.</Card.Text>
                    <Card.Text>It began when I noticed people—including myself—get annoyed when messaging apps autocorrect emoticons :) to emojis 🙂, and that my peers described their parents’ unironic, positive usage of smiley emojis as “threatening, unsettling, passive aggressive,” though unintentionally so.</Card.Text>
                    <Card.Text>This meant there must be an appreciable difference in perception, therefore:<br/><strong>Do digital natives see smiley emojis as less positive and emoticons as more positive?</strong></Card.Text>
                    <Card.Text>I carried out research on this question with the help of my PI, Prof. Eric Raimy. I put together a literature review and <strong>designed a survey</strong> based on preexisting studies. Because of the limitations of Qualtrics, I had the opportunity to apply my skills as a programmer and write JavaScript code to ‘randomize’ the material correctly across respondents. The survey ended up getting over 200 responses.</Card.Text>
                    <Card.Text>Using R to visualize and analyze the data, I found statistically significant results that reflected my hypothesis. The paper is currently a work-in-progress.</Card.Text>
                </div>
            
            </Card.Body>
        </Card>
        
        <Card className="project">
            <Card.Body className="d-flex flex-row flex-xl-nowrap flex-wrap justify-content-center align-items-center">
                <div className="body-text">
                    <h2><Card.Title>Phonetics</Card.Title></h2>
                    <Card.Text>In this pilot literature synthesis paper, I investigated <strong>differences in pronunciation between genders across the world’s languages.</strong></Card.Text>
                    <Card.Text>It was written for my capstone course in linguistics with Prof. Joe Salmons that covered laryngeal realism (LR), a phonological theory. The original goal was to find new evidence for the theory—specifically sociolinguistic evidence, as the subfield hadn’t been covered much in class.</Card.Text>
                    <Card.Text>I focused on voice onset time, a phonetic feature important in LR, as my cross-linguistic gendered variable. There was no existing research on this, so I started from scratch by <strong>collecting 26 papers on 19 languages</strong> which contained relevant raw data.</Card.Text>
                    <Card.Text>I then analyzed these language-specific results through the lens of LR to find consistent phonological or phonetic patterns. Though the findings didn’t support or contradict the theory since the pattern was completely phonetic, I did get novel results on where gendered pronunciation differences occur: they tended to arise at the longest possible voice onset times.</Card.Text>
                    <Card.Text>The full paper is available <a href="https://docspace-9fcc69.onlyoffice.com/s/Kr2bLcPv95tBCDR" target="_blank">here</a>.</Card.Text>
                </div>
                
                <div id="larynx" className="d-flex justify-content-end">
                    <Figure>
                        <Figure.Image alt="larynx diagram" src={larynx}/>
                        <Figure.Caption><a href="https://en.wikipedia.org/wiki/Larynx" target="_blank">Fig 1. The Larynx</a></Figure.Caption>
                    </Figure>
                </div>
                
            </Card.Body>
        </Card>
    </div>
}