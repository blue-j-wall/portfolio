import { Image, Card, Figure } from 'react-bootstrap'

export default function Ling(props) {

    return <div className="full-page non-home">
        <h1 id="ling">I have done sociolinguistics research on...</h1>
        
        <Card className="project">
            <Card.Body className="d-flex flex-row flex-md-nowrap flex-wrap justify-content-center align-items-center">

                <div id="emoji-group" className="d-flex flex-row flex-md-wrap flex-nowrap">
                    <Image src="https://em-content.zobj.net/source/apple/419/slightly-smiling-face_1f642.png"/>
                    <Image src="https://em-content.zobj.net/source/apple/419/smiling-face-with-smiling-eyes_1f60a.png"/>
                    <Image src="https://em-content.zobj.net/source/apple/419/grinning-face-with-smiling-eyes_1f604.png"/>
                </div>
                
                <div className="body-text">
                    <Card.Title>Emojis</Card.Title>
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
                    <Card.Title>Phonetics</Card.Title>
                    <Card.Text>In this pilot literature synthesis paper, I investigated <strong>differences in pronunciation between genders across the world’s languages.</strong></Card.Text>
                    <Card.Text>It was written for my capstone course in linguistics with Prof. Joe Salmons that covered laryngeal realism (LR), a phonological theory. The original goal was to find new evidence for the theory—specifically sociolinguistic evidence, as the subfield hadn’t been covered much in class.</Card.Text>
                    <Card.Text>I focused on voice onset time, a phonetic feature important in LR, as my cross-linguistic gendered variable. There was no existing research on this, so I started from scratch by <strong>collecting 26 papers on 19 languages</strong> which contained relevant raw data.</Card.Text>
                    <Card.Text>I then analyzed these language-specific results through the lens of LR to find consistent phonological or phonetic patterns. Though the findings didn’t support or contradict the theory since the pattern was completely phonetic, I did get novel results on where gendered pronunciation differences occur. They tended to arise at the longest possible voice onset times.</Card.Text>
                    <Card.Text><br/>The full paper is available here (link paper)</Card.Text>
                </div>
                
                <div id="larynx" className="d-flex justify-content-end">
                    <Figure>
                        <Figure.Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Larynx_external_en.svg/1920px-Larynx_external_en.svg.png"/>
                        <Figure.Caption><a href="https://en.wikipedia.org/wiki/Larynx" target="_blank">Fig 1. The Larynx</a></Figure.Caption>
                    </Figure>
                </div>
                
            </Card.Body>
        </Card>
    </div>
}

/*
<div className="project d-flex flex-row flex-xl-nowrap flex-wrap">

    <div>
        <h2>Emojis</h2>
        <p>This is an independent research project on ‘internet speech’. It covers how people use and perceive emojis/emoticons in texting and social media, and how that varies based on age.</p>
        <p>It began when I noticed people—including myself—get annoyed when messaging apps autocorrect emoticons :) to emojis 🙂, and that my peers described their parents’ unironic, positive usage of smiley emojis as “threatening, unsettling, passive aggressive,” though unintentionally so.</p>
        <p>This meant there must be an appreciable difference in perception, therefore: Do digital natives see smiley emojis as less positive and emoticons as more positive?</p> 
    </div>

    <div>
        <img height="200" src="https://64.media.tumblr.com/6fff788afe97c37ee652c4dd03c3a63c/22eb9d151146e43e-c9/s2048x3072/6d8dba2916c2e3f88d78d464eec4b6da3661769c.jpg"/>
        <p>I carried out research on this question with the help of my PI, Prof. Eric Raimy. I put together a literature review and designed a survey based on preexisting studies. Because of the limitations of Qualtrics, I had the opportunity to apply my skills as a programmer and write JavaScript code to ‘randomize’ the material correctly across respondents. The survey ended up getting over 200 responses.</p>
        <p>Using R to visualize and analyze the data, I found statistically significant results that reflected my hypothesis. The paper is currently a work-in-progress. </p>
    </div>

</div>


<div className="project d-flex flex-row flex-xl-nowrap flex-wrap">
    <div>
        <h2>Emojis</h2>
        <p>This is an independent research project on ‘internet speech’. It covers how people use and perceive emojis/emoticons in texting and social media, and how that varies based on age.</p>
        <p>It began when I noticed people—including myself—get annoyed when messaging apps autocorrect emoticons :) to emojis 🙂, and that my peers described their parents’ unironic, positive usage of smiley emojis as “threatening, unsettling, passive aggressive,” though unintentionally so.</p>
        <p>This meant there must be an appreciable difference in perception, therefore: Do digital natives see smiley emojis as less positive and emoticons as more positive?</p> 
        
    </div>
    <div>
        <p>I carried out research on this question with the help of my PI, Prof. Eric Raimy. I put together a literature review and designed a survey based on preexisting studies. Because of the limitations of Qualtrics, I had the opportunity to apply my skills as a programmer and write JavaScript code to ‘randomize’ the material correctly across respondents. The survey ended up getting over 200 responses.</p>
        <p>Using R to visualize and analyze the data, I found statistically significant results that reflected my hypothesis. The paper is currently a work-in-progress. </p>
    </div>

</div>
*/