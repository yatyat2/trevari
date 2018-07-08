import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render() {
    return (
      <div id="menubar">
        <Navbar color="faded" light>
          <NavbarBrand id="TREVARI" href="/" className="mr-auto">TREVARI</NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink href="/">독서모임</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="./events">이벤트</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="./apply">멤버십 신청</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="./login">로그인</NavLink>
              </NavItem>
              
            </Nav>
          </Collapse>
        </Navbar>
        <style jsx>
        {`
        div#menubar {
            position:fixed;
            background-color:white;
            width:100%;
            z-index:1;
            border-bottom:1px solid gray;
        }
        #menubar > nav > a {
          color:orange;
          font-weight:bold;
        }
        
        `}
        </style>
      </div>
    );
  }
}