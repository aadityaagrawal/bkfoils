import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './nav_bar.css'
import text from '../../Utilities/Constants/text_constants';

function NavigationBar() {
    
  return (
    <Navbar expand="lg">
      <div className='container-fluid m-3 d-flex align-items-bottom'>
        <Navbar.Brand href="#home" className='brandName fs-3'>{text.brand}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link href="#product" className='linkElement fs-4'>Products |</Nav.Link>
            <Nav.Link href="#categories" className='linkElement fs-4'>Categories |</Nav.Link>
            <Nav.Link href="#about" className='linkElement fs-4'>About Us |</Nav.Link>
            <Nav.Link href="#contact" className='linkElement fs-4'>Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default NavigationBar;