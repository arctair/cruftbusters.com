import React from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import './Navigation.css'

const Navigation = () => (
  <Navbar fluid collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="/">Cruftbusters</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav pullRight>
        <NavItem eventKey={1} href="/#software">
          Software
        </NavItem>
        <NavItem eventKey={2} href="/#networking">
          Networking
        </NavItem>
        <NavItem eventKey={3} href="/#gis">
          GIS
        </NavItem>
        <NavItem eventKey={4} href="/#cartography">
          Cartography
        </NavItem>
        <NavItem eventKey={5} href="/contact">
          Contact
        </NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default Navigation
