import React, { useState } from 'react';
import { Container, Form, Nav, Navbar, Row } from 'react-bootstrap';

const NavBar = ({ filterBySearch }) => {
  const [searchValue, setSearchValue] = useState('');

  const onSearch = (e) => {
    e.preventDefault(); // Prevent default form submission (No Reloadd)
    filterBySearch(searchValue);
    setSearchValue('')
  };

  return (
    <Row>
      <Navbar bg="dark" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand href="#">
            <div className="brand-color">New Restaurant</div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll />
            <Form className="d-flex" onSubmit={onSearch}>
              <Form.Control
                type="text"
                placeholder="Search"
                className="mx-2"
                aria-label="Search"
                onChange={(e) => setSearchValue(e.target.value)}
                value={searchValue}
              />
              <button type="submit" className="btn-search">
                Search
              </button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Row>
  );
};

export default NavBar;
