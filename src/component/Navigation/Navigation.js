import React from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'

import './Navigation.css'

const Navigation = () => (
  <Navbar fluid collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to='/'>
          CruftBusters
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav pullRight>
        <LinkContainer to='/#software'>
          <NavItem eventKey={1}>
            Software
          </NavItem>
        </LinkContainer>
        <LinkContainer to='/#networking'>
          <NavItem eventKey={2}>
            Networking
          </NavItem>
        </LinkContainer>
        <LinkContainer to='/#gis'>
          <NavItem eventKey={3} href="/#gis">
            GIS
          </NavItem>
        </LinkContainer>
        <LinkContainer to='/#cartography'>
          <NavItem eventKey={4} href="/#cartography">
            Cartography
          </NavItem>
        </LinkContainer>
        <LinkContainer to='/contact'>
          <NavItem eventKey={5} href="/contact">
            Contact
          </NavItem>
        </LinkContainer>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default Navigation
