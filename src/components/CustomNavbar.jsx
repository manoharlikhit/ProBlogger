import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap';

import { Form, FormGroup, Label, Input } from 'reactstrap';


const SearchBar = ({ onChange }) => {

  return (

     <Form inline className="ml-auto mt-2" style={{ width: '50%' }}>

     <FormGroup className="d-flex">

       <Label for="search" className="mr-2">Search:</Label>

       <Input type="text" name="search" id="search" placeholder="Search..." onChange={onChange} />

     </FormGroup>

   </Form>

  );

};

function Example(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {

    setSearchTerm(event.target.value);

  };

  return (
    <div>
      <Navbar {...args} color='dark' dark expand= "md" >
        <NavbarBrand href="/">ProBlogger.</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto"  navbar>
            <NavItem >
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">
                GitHub
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Option 1</DropdownItem>
                <DropdownItem>Option 2</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Reset</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
        <SearchBar onChange={handleSearch} />
      </Navbar>
    </div>
  );
}

export default Example;
