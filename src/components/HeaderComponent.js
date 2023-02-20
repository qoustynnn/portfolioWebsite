import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {FaBars} from 'react-icons/fa';

function Header() {
  return (
<Navbar bg="light" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand className='brand-name' href="#home">Qoustyn Yang</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" > 
          <FaBars/>
        </Navbar.Toggle> 
        <Navbar.Collapse id="navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#about-me" className='text-black'>About Me</Nav.Link>
            <Nav.Link href="#portfolio" className='text-black'>Portfolio</Nav.Link>
            <Nav.Link href="&#109;&#97;&#105;&#108;&#116;&#111;&#58;%71%6F%75%73%74%79%6E%40%67%6D%61%69%6C%2E%63%6F%6D" className='text-black'>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;