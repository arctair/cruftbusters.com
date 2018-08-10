import React from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import './Navigation.css'

const Navigation = () => (
  <Navbar fluid collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="/">Recolada Group</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav pullRight>
        <NavItem eventKey={1} href="#software">
          Software
        </NavItem>
        <NavItem eventKey={2} href="#gis">
          GIS
        </NavItem>
        <NavItem eventKey={2} href="#cartography">
          Cartography
        </NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default Navigation
