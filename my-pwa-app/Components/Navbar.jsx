
import {Navbar, Nav, Container} from 'react-bootstrap';
import Settings from '../src/pages/Settings';


function NavbarSample(){
    return(
   <Navbar  fixed = "top" bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Shadow box</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-collapse" />
        <Navbar.Collapse id="navbar-collapse" className="justify-content-end">
         <Nav>
         <Nav.Link href='/'>Home</Nav.Link>
          <Nav.Link href="Settings">Settings</Nav.Link>
        </Nav>
        </Navbar.Collapse>
      
      </Container>
    </Navbar>
  );
}

export default NavbarSample;