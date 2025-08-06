import { useEffect, useState, useContext } from 'react'
import { Container, Nav, Navbar, Form, Button, DropdownButton, Dropdown, ButtonGroup, ToggleButton, Image, ListGroup } from "react-bootstrap";
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

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" >

                <Nav id="tabs" className="ms-auto justify-content-center">
                    <Nav.Link as={HashLink} smooth to='/#about' style={{textDecoration:"none"}}>About</Nav.Link>
                    <Nav.Link as={Link} to="/programming">Projects</Nav.Link>
                    <Nav.Link as={Link} to="/linguistics">Research</Nav.Link>
                </Nav>

                <Nav className="d-flex justify-content-center" horizontal>
                    <Navbar.Text>
                        <ListGroup id="icons" className="d-flex justify-content-center" horizontal>
                            <ListGroup.Item ><a href="https://www.linkedin.com/" target="_blank"><FaLinkedin/></a></ListGroup.Item>
                            <ListGroup.Item ><a href="https://github.com/G-Wall" target="_blank"><FaGithub/></a></ListGroup.Item>
                            <ListGroup.Item ><a href="mailto:jamiewall247@gmail.com" target="_blank"><FaEnvelope/></a></ListGroup.Item>
                            <ListGroup.Item><a></a></ListGroup.Item>
                        </ListGroup>
                    </Navbar.Text>
                    <Navbar.Text >
                        <a onClick={handleColorMode} id="color-toggle">
                            {colorMode ? <FaSun/> : <FaMoon/>}
                        </a>
                    </Navbar.Text>

                </Nav>

                {/*<ListGroup id="icons" className="d-flex justify-content-center" horizontal>
                    
                    <ListGroup.Item ><a href="https://www.linkedin.com/" target="_blank"><FaLinkedin/></a></ListGroup.Item>
                    <ListGroup.Item ><a href="https://github.com/G-Wall" target="_blank"><FaGithub/></a></ListGroup.Item>
                    <ListGroup.Item ><a href="mailto:jamiewall247@gmail.com" target="_blank"><FaEnvelope/></a></ListGroup.Item>
                    <ListGroup.Item cstyle={{paddingLeft:".5rem", paddingRight:".5rem"}}><a></a></ListGroup.Item>  
                    <ListGroup.Item >
                        <a onClick={handleColorMode} id="color-toggle">
                            {colorMode ? <FaSun/> : <FaMoon/>}
                        </a>
                    </ListGroup.Item>

                </ListGroup>*/}

            </Navbar.Collapse>
            
        </Container>
    </Navbar>


}