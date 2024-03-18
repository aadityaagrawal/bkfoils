import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './nav_bar.css'
import text from '../../Utilities/Constants/text_constants';

function NavigationBar() {
  const customStyle = {
    backgroundColor: "#008080" 
  };
    
  return (
    
    <Navbar expand="lg" className='p-0' style={customStyle}>
      <div className='container-fluid m-0 d-flex align-items-bottom'>
        <Navbar.Brand href="#home" className='brandName fs-3'>{text.brand}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link href="#product" className='linkElement fs-5'>Products</Nav.Link>
            <Nav.Link href="#categories" className='linkElement fs-5'>Categories</Nav.Link>
            <Nav.Link href="#about" className='linkElement fs-5'>About-Us</Nav.Link>
            <Nav.Link href="#contact" className='linkElement fs-5'>Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default NavigationBar;