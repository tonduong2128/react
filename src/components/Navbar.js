import React, { useState } from 'react';

import {
  Link
} from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';


import { CardContext } from '../contexts/Card';
const NavbarHeader = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand className=""> 
          <Link to="/">Shop</Link>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink> 
                <Link to="/products">Sản phẩm</Link> 
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link to="/list">List</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link to="/counter">Counter</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <CardContext.Consumer>
                 {({cardItems})=><Link to="/myCard">Card ({cardItems.length})</Link>} 
                </CardContext.Consumer>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavbarHeader;