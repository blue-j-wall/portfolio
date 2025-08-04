import { useEffect, useState, useContext } from 'react'
import { Container, Nav, Navbar, Form, Button, DropdownButton, Dropdown, ButtonGroup, ToggleButton, Image } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { FaGithub, FaEnvelope, FaLinkedin } from "react-icons/fa6";
import { GiTreeBranch } from "react-icons/gi";
import { HashLink } from 'react-router-hash-link';

export default function SiteNavbar(props) {

    return <Navbar id="portfolio-navbar" bg="dark" variant="dark" fixed="top" expand="sm" collapseOnSelect>
        <Container>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            
            <Navbar.Brand smooth as={HashLink} to="/#intro">
                <img
                    alt="crow emoji"
                    src="https://em-content.zobj.net/source/microsoft/407/black-bird_1f426-200d-2b1b.png"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />{' '}
            </Navbar.Brand>
            
            <Navbar.Collapse id="responsive-navbar-nav" className="me-auto">
                <HashLink smooth to='/#about' >About</HashLink>
                <Nav>
                    <Nav.Link as={Link} to="/programming">Projects</Nav.Link>
                    <Nav.Link as={Link} to="/linguistics">Linguistics Research</Nav.Link>
                </Nav>
            </Navbar.Collapse>

            <ButtonGroup>
                <Button variant="link"><FaLinkedin/></Button>
                <Button variant="link" href="https://github.com/G-Wall" target="_blank"><FaGithub/></Button>
                <Button variant="link" href="mailto:jamiewall247@gmail.com" target="_blank"><FaEnvelope/></Button>
            </ButtonGroup>
            
        </Container>
    </Navbar>


}