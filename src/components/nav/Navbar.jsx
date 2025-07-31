import { useEffect, useState, useContext } from 'react'
import { Container, Nav, Navbar, Form, Button, DropdownButton, Dropdown, ButtonGroup, ToggleButton, Image } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";


export default function PageNavbar(props) {

    return <Navbar id="library-navbar" bg="dark" variant="dark" fixed="top" expand="sm" collapseOnSelect>
        <Container>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            {
                <Navbar.Brand as={Link} to="/">
                    <img
                        alt="book stack emoji"
                        src="https://em-content.zobj.net/source/apple/419/books_1f4da.png"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    My Website
                </Navbar.Brand>
            }
            <Navbar.Collapse id="responsive-navbar-nav" className="me-auto">
                <Nav>
                    <Nav.Link as={Link} to="/programming">Programming</Nav.Link>
                    <Nav.Link as={Link} to="/linguistics">Linguistics</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            
        </Container>
    </Navbar>


}