import { useEffect, useState, useContext } from 'react'
import { Container, Nav, Navbar, Button, ButtonGroup, Image, ListGroup, Offcanvas } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { FaGithub, FaEnvelope, FaLinkedin, FaSun, FaMoon } from "react-icons/fa6";
import { GiTreeBranch } from "react-icons/gi";
import { HashLink } from 'react-router-hash-link';

export default function SiteNavbar(props) {

    const [colorMode, setColorMode] = useState(1);
    const handleColorMode = () => {
        setColorMode(1 - colorMode);
        var element = document.getElementById("root");
        element.classList.toggle("dark-mode");
    }

    const [showOffcanvas, setShowOffcanvas] = useState(false);
    const handleCloseOffcanvas = () => setShowOffcanvas(false);
    const handleShowOffcanvas = () => setShowOffcanvas(true);
    

    return <Navbar id="portfolio-navbar" fixed="top" expand="md" collapseOnSelect>
        <Container id="nav-container" >
            <Navbar.Brand smooth as={HashLink} to="/#top">
                <img
                    alt="crow emoji"
                    src="https://em-content.zobj.net/source/microsoft/407/black-bird_1f426-200d-2b1b.png"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />{' '}
            </Navbar.Brand>

            <Navbar.Toggle id="toggle" aria-controls="responsive-navbar-nav" className="ms-auto" onClick={handleShowOffcanvas} />

            <Navbar.Offcanvas id="offcanvasNavbar" placement="end" show={showOffcanvas} onHide={handleCloseOffcanvas}>
                <Offcanvas.Header closeButton> <Offcanvas.Title></Offcanvas.Title> </Offcanvas.Header>
                <Offcanvas.Body>
                
                    <Nav id="tabs" className="ms-auto justify-content-center">
                        <Nav.Link as={HashLink} smooth to='/#about' style={{textDecoration:"none"}} onClick={handleCloseOffcanvas}>About</Nav.Link>
                        <Nav.Link as={Link} to="/programming" onClick={handleCloseOffcanvas}>Projects</Nav.Link>
                        <Nav.Link as={Link} to="/linguistics" onClick={handleCloseOffcanvas}>Research</Nav.Link>
                        {/*<Nav.Link as={Link} to="https://www.linkedin.com/" target="_blank"><FaLinkedin/></Nav.Link>
                        <Nav.Link as={Link} to="https://github.com/G-Wall" target="_blank"><FaGithub/></Nav.Link>
                        <Nav.Link as={Link} to="mailto:jamiewall247@gmail.com" target="_blank"><FaEnvelope/></Nav.Link>*/}
                    </Nav>

                    <Nav className="d-flex justify-content-end" horizontal>
                            <ListGroup id="icons" className="d-flex justify-content-start" horizontal>
                                <ListGroup.Item ><a href="https://www.linkedin.com/" target="_blank" onClick={handleCloseOffcanvas}><FaLinkedin/></a></ListGroup.Item>
                                <ListGroup.Item ><a href="https://github.com/G-Wall" target="_blank" onClick={handleCloseOffcanvas}><FaGithub/></a></ListGroup.Item>
                                <ListGroup.Item ><a href="mailto:jamiewall247@gmail.com" target="_blank" onClick={handleCloseOffcanvas}><FaEnvelope/></a></ListGroup.Item>
                            </ListGroup>
                    </Nav>

                </Offcanvas.Body>
            </Navbar.Offcanvas>
            
            <Navbar.Text>
                <a onClick={handleColorMode} id="color-toggle" className="d-flex align-items-center">
                    {colorMode ? <FaSun/> : <FaMoon/>}
                </a>
            </Navbar.Text>
            
        </Container>
    </Navbar>


}