import { Card } from 'react-bootstrap'

export default function Home(props) {

    return <div className="full-page">
        <div id='landing' className="d-flex justify-content-center align-items-center">
            <div id="landing-text">
                <h1 id="name">InsertName</h1>
                <p>entry-level programmer (and linguist)</p>
                <p>check out my <a>resume</a> or summary of what I'm interested in <a>below ↓</a></p>
            </div>
        </div>
        
        <div id='about'>
            <div id="about-text">
                <h1>About</h1>
                <p>I'm an entry-level programmer with experience in both front-end and back-end development.</p>
                <p>(Cards with programming languages)</p>
                <p>I have also done linguistics research (wording? “I am also a linguist”?). My specialties/interests/experience is morphology/sociolinguistics and “internet linguistics” ? (maybe can show/mention statistical programming experience w/ R)</p>
            </div>
        </div>

    </div>
}