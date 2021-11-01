import React from 'react'
import logo from '../../../logo-color-full.svg'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Header() {
  return (
    <>

    <Navbar collapseOnSelect expand="lg">
  <Container fluid style={{paddingLeft:'70px'}}>
  <Navbar.Brand href="#home"><img src={logo} alt='logo' width='70%' /></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto" style={{marginLeft:'50px'}}>
      <Nav.Link href="#features" style={{margin:'20px',fontSize:'17px',color:'black',fontWeight:'500'}}>Features</Nav.Link>
      <Nav.Link href="#developer" style={{margin:'20px',fontSize:'17px',color:'black',fontWeight:'500'}}>Developers</Nav.Link>
      <Nav.Link href="#team" style={{margin:'20px',fontSize:'17px',color:'black',fontWeight:'500'}}>Team</Nav.Link>
      <Nav.Link href="#news" style={{margin:'20px',fontSize:'17px',color:'black',fontWeight:'500'}}>News</Nav.Link>
      <Nav.Link href="#resources" style={{margin:'20px',fontSize:'17px',color:'black',fontWeight:'500'}}>Resources</Nav.Link>
      <Nav.Link href="#buysys" style={{margin:'20px',backgroundColor:'#ECE7F7',fontSize:'17px',color:'black',fontWeight:'500'}}>Buy SYS</Nav.Link>
      <Nav.Link href="#explorer" style={{margin:'20px',backgroundColor:'#ECE7F7',fontSize:'17px',color:'black',fontWeight:'500'}}>Explorer</Nav.Link>
    </Nav>
    
  </Navbar.Collapse>
  </Container>
</Navbar>
    </>
  )
}