import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from '../node_modules/reactstrap';



export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  render() {
    return (
      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret>
          <img src="/static/category.png"/>
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem>Header</DropdownItem>
          <DropdownItem>Action</DropdownItem>
          <DropdownItem>Another Action</DropdownItem>
          <DropdownItem>Another Action</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }
}