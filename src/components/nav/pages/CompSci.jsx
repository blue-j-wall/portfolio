import { Image, Card } from 'react-bootstrap'

export default function CompSci(props) {

    return <div className="full-page non-home">
        <h1>My programming projects include...</h1>

        <Card className="project">
            <Card.Body>

                <div className="body-text">
                    <Card.Title>The Library</Card.Title>
                    <Card.Subtitle>media archive website | personal project (ongoing)</Card.Subtitle>
                </div>

                <div className="d-flex flex-row flex-md-nowrap flex-wrap justify-content-center align-items-start">
                    <div id="library-img-group" className="d-flex flex-column justify-content-center">
                        <Image rounded alt="home page" src="src\assets\projects-media\library home.png"/>
                        <Image rounded alt="movie entries in card layout" src="src\assets\projects-media\library movies.png"/>
                    </div>
                    <div className="body-text">
                        <Card.Text>This project was originally conceptualized as a <strong>GUI for my 'media spreadsheets'</strong>. 
                            They contain information on things I’ve read and watched, and they all go back years, making them quite annoying to search through. 
                            This website makes it easier to look through the data for myself, and perhaps others in the future as well.</Card.Text>
                        <Card.Text>I designed and developed a <strong>responsive React frontend</strong> that allows users to easily see information on the movies, shows, etc they have added.
                            The backend uses <strong>Express.js</strong> and provides users the ability to search, add, remove, and edit entries in a <strong>SQLite database</strong>.</Card.Text>
                        <Card.Text>I'm looking forward to using this project to experiment more in the future. For instance, I plan to add a feature that can automatically
                            generate entries based off a link (eg. from IMDb), so that I can learn about and practice web scraping.</Card.Text>
                        <Card.Text>A demo can be viewed <a href="https://youtu.be/9WWO99KPJAY" target="_blank">here</a>.</Card.Text>
                    </div>
                </div>
            </Card.Body>
        </Card>

        <Card className="project">
            <Card.Body className="d-flex flex-column ">
                <div className="body-text">
                    <Card.Title>Lingua</Card.Title>
                    <Card.Subtitle>study app | final project for android development class (Fall 2025)</Card.Subtitle>
                </div>

                <div className="body-text">
                    <Card.Text> Most low-level linguistics courses require memorization and understanding of complicated concepts such as syntax trees and the IPA chart. 
                        However, many students find difficult to practice on their own, which I knew from personal experience.</Card.Text>
                    <Card.Text> I participated in a <strong>team of four to develop an app</strong> that addresses this problem; it offers quizzes and interactive activites that help 
                        linguistics students master introductory material. </Card.Text>
                </div>

                <div id="lingua-img-group" className="d-flex flex-row flex-xl-nowrap flex-wrap justify-content-center align-items-center">
                    <Image rounded alt="login, syntax quiz, and settings pages" src="src\assets\projects-media\lingua screenshots.png"/>
                    <Image rounded alt="example from GUM treebank" src="src\assets\projects-media\gum treebank example.jpg"/>
                </div>

                <div className="body-text">
                    <Card.Text> My responsibilities were largely decided by my being the only team member with experience in linguistics.
                        I personally <strong>designed the prototype and tested the UX</strong> with target users, and during the implementation process I was in charge of the data.
                        After learning a lot about resources 
                        like <a href="https://universaldependencies.org/#english-treebanks" target="_blank">treebanks</a> (shown above) 
                        and <a href="https://github.com/CUNY-CL/wikipron/tree/master" target="_blank">WikiPron</a>
                        , I did the <strong>data wrangling and programming for the dataloader</strong>. I worked 
                        closely with my teammate tasked with the quizzes themselves to integrate our code.</Card.Text>
                    <Card.Text> Other features of the app include Firebase authentication, drag & drop actions, vibration feedback, and notifications.</Card.Text>
                    <Card.Text>A demo can be viewed <a href="https://youtu.be/PJXH08NXyqY" target="_blank">here</a>.</Card.Text>
                </div>
            </Card.Body>
        </Card>

    </div>
}