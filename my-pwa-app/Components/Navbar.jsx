
import {Navbar, Nav, Container} from 'react-bootstrap';
import Settings from '../src/pages/Settings';


function NavbarSample(){
    return(
   <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Navbar with text</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-collapse" />
        <Navbar.Collapse id="navbar-collapse" className="justify-content-end">
         <Nav>
          <Nav.Link href="#settings">Settings</Nav.Link>
        </Nav>
        </Navbar.Collapse>
        
      </Container>
    </Navbar>
  );
}

export default NavbarSample;