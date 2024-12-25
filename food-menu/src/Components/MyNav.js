import React from 'react';
// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
const NavBar = () => {
  return (
    <Row>
      <Navbar bg="dark" expand="lg" variant='dark' >
        <Container >
          <Navbar.Brand href="#">
            <div className='brand-color'>New Restaurant</div>
            </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
             
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="text"
                placeholder="Search"
                className="mx-2"
                aria-label="Search"
              />
              <button className="btn-search">Search</button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Row>
  );
};

export default NavBar;
