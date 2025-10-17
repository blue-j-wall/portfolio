import { useEffect, useState } from 'react'
import { Container, Nav, Navbar, ListGroup, Offcanvas, Image } from "react-bootstrap";

import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

import { FaGithub, FaEnvelope, FaLinkedin, FaSun, FaMoon } from "react-icons/fa6";

export default function SiteNavbar(props) {

    const [colorMode, setColorMode] = useState();
    const handleColorMode = () => {

        let element = document.getElementsByTagName("html")[0];

        if(colorMode == "dark") {
            element.classList.remove("dark-mode");
            setColorMode("light");
            localStorage.setItem('theme', "light");
        }
        else {
            element.classList.add("dark-mode");
            setColorMode("dark");
            localStorage.setItem('theme', "dark");
        } 
    }

    useEffect(() => { // retrieve color theme from storage
        let storedTheme = localStorage.getItem('theme');
        let element = document.getElementsByTagName("html")[0];
        
        if(!storedTheme) {
            localStorage.setItem('theme', "light");
            storedTheme = "light";
        }

        setColorMode(storedTheme);
        if(storedTheme == "light")
            element.classList.remove("dark-mode");
        else
            element.classList.add("dark-mode");
    }, []);

    const [showOffcanvas, setShowOffcanvas] = useState(false);
    const handleCloseOffcanvas = () => setShowOffcanvas(false);
    const handleShowOffcanvas = () => setShowOffcanvas(true);
    

    return <Navbar id="portfolio-navbar" fixed="top" expand="md" collapseOnSelect>
        <Container id="nav-container" >
            <Navbar.Brand smooth as={HashLink} to="/home#">
                <Image
                    rounded
                    alt="bluejay icon"
                    src="/assets/bluejay small.png"
                    width="33"
                    height="33"
                    className="d-inline-block align-top"
                />{' '}
            </Navbar.Brand>

            <Navbar.Toggle id="toggle" aria-controls="responsive-navbar-nav" className="ms-auto" onClick={handleShowOffcanvas} />

            <Navbar.Offcanvas id="offcanvas" placement="end" show={showOffcanvas} onHide={handleCloseOffcanvas}>
                <Offcanvas.Header closeButton> <Offcanvas.Title></Offcanvas.Title> </Offcanvas.Header>
                <Offcanvas.Body>
                
                    <Nav id="tabs" className="ms-auto justify-content-center">
                        <Nav.Link as={HashLink} smooth to='/home#about' style={{textDecoration:"none"}} onClick={handleCloseOffcanvas}>About</Nav.Link>
                        <Nav.Link as={Link} to="/projects" onClick={handleCloseOffcanvas}>Projects</Nav.Link>
                        <Nav.Link as={Link} to="/research" onClick={handleCloseOffcanvas}>Research</Nav.Link>
                    </Nav>

                    <Nav className="d-flex justify-content-end">
                        <ListGroup id="icons" className="d-flex justify-content-start" horizontal>
                            <ListGroup.Item aria-hidden="true">
                                <a href="https://www.linkedin.com/in/jamie-wall-02007b382" target="_blank" onClick={handleCloseOffcanvas}><FaLinkedin aria-label="linkedin"/></a>
                            </ListGroup.Item>
                            <ListGroup.Item aria-hidden="true">
                                <a href="https://github.com/blue-j-wall" target="_blank" onClick={handleCloseOffcanvas}><FaGithub aria-label="github"/></a>
                            </ListGroup.Item>
                            <ListGroup.Item aria-hidden="true">
                                <a href="mailto:jamiewall.dev@gmail.com" target="_blank" onClick={handleCloseOffcanvas}><FaEnvelope aria-label="email"/></a>
                            </ListGroup.Item>
                        </ListGroup>
                    </Nav>

                </Offcanvas.Body>
            </Navbar.Offcanvas>
            
            <Navbar.Text>
                <a onClick={handleColorMode} id="color-toggle" className="d-flex align-items-center" tabIndex="0">
                    {colorMode=="light" ? <FaSun aria-label="light mode"/> : <FaMoon aria-label="dark mode"/>}
                </a>
            </Navbar.Text>
            
        </Container>
    </Navbar>


}