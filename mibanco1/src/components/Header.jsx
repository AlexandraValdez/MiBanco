/* eslint-disable no-unused-vars */
import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import logotipo from '../assets/logotipo.png'
import banner from '../assets/banner.png'; 
import './Header.css'; 

const Header = () => {
  return (
    <div id='container' className="header-container" >
    <div><img src={banner} alt="Banner" className="header-banner" /></div>
    <div className='barra'><Navbar bg="#FFFFFF" variant="light" expand="lg">
      <Navbar.Brand href="#">
        <img alt="Logo"  src={logotipo} width="250" height="160" className="d-inline-block align-top" />
      </Navbar.Brand>
      <Nav className="ml-auto">
        <Button variant="primary" id='btn1' style={{ color: '#FFFFFF', width: '200px', height: '50px' }}>Banco</Button>
        <Button variant="primary" id='btn2' style={{ color: '#FAB500', width: '200px', height: '50px' }}>Ahorra</Button>
      </Nav>
      <Navbar.Toggle aria-controls="navbar-menu" />
      <Navbar.Collapse id="navbar-menu">
        <Nav>
          <Nav.Link href="#">Contactanos</Nav.Link>
          <Nav.Link href="#">Pide tu prestamo</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    </div>
  </div>
 
  );
}


export default Header;

/*const Header = () => {
  return (
   <div  className="header-container">
     <div><img src={banner} alt="Banner" className="header-banner" /></div>
      <Navbar bg="#fffff" variant="light" expand="lg">
        <Navbar.Brand href="#">
          <img alt="Logo" src={logotipo} width="150" height="80" className="d-inline-block align-top" />
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Button variant="outline-primary" className="btn1">Banco</Button>
          <Button variant="outline-primary" className='btn2'>Ahorra</Button>
        </Nav>
        <Navbar.Toggle aria-controls="navbar-menu" aria-expanded="true" />
        <Navbar.Collapse id="navbar-menu" className="navbar-menu">
          <Nav>
            <Nav.Link href="#">Contactanos</Nav.Link>
            <Nav.Link href="#">Pide tu prestamo</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>








    <div className="header-container">
      <div><img src={banner} alt="Banner" className="header-banner" /></div>
      <Navbar bg="light" variant="light" expand="lg">
        <Navbar.Brand href="#">
          <img alt="Logo" src={logotipo} width="150" height="80" className="d-inline-block align-top" />
        </Navbar.Brand>
        <Nav className="ml-auto">
          <Button variant="primary" style={{ color: 'white', width: '150px', height: '40px' }}>Banco</Button>
          <Button variant="primary" style={{ color: 'white', width: '150px', height: '40px' }}>Ahorra</Button>
        </Nav>
        <Navbar.Toggle aria-controls="navbar-menu" />
        <Navbar.Collapse id="navbar-menu">
          <Nav>
            <Nav.Link href="#">Contactanos</Nav.Link>
            <Nav.Link href="#">Pide tu prestamo</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}*/
