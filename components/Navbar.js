import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink, } from 'reactstrap';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div id="menubar">
        <Navbar id="asdasd"color="faded" light expand="md">
          <NavbarBrand id="logo"href="/">TREVARI</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
            <NavItem>
                 <NavLink href="/">독서모임</NavLink>
               </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        <style jsx global>
        {`
        
        #menubar {
            position:fixed;
            background-color:white;
            width:100%;
            z-index:1;
            border-bottom:1px solid gray;
        }

        

        #logo {
          color:orange;
          font-weight:bold;
        }
        
        #asdasd {
        }

        @media (min-width:1024px){
          #asdasd {
            width:90%;
            margin:0px auto;
          }
          
              
        }
     
        `}
        </style>
      </div>
    );
  }
}