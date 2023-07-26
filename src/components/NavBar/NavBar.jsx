import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget';



function NavBar() {
  return (
    <Navbar expand="lg" className="mi-nav">
      <Container>
        <Navbar.Collapse id="basic-navbar-nav" className="me-auto nav-item__container">
            <li className='nav-tittle'><Nav.Link href="#home">Hambur10</Nav.Link></li>
            <li className='nav-item'><Nav.Link href="#ofertas">Clasicas</Nav.Link></li>
            <li className='nav-item'><Nav.Link href="#categorias">Espaciales</Nav.Link></li>
            <li className='nav-item'><Nav.Link href="#sucursales">Veganas</Nav.Link></li>
            <li className='nav-item'><Nav.Link href="#crear-hamburguesa">Crea tu hamburguesa</Nav.Link></li>
            <li className='nav-item'><Nav.Link href="#faq">FAQ</Nav.Link></li>
            <li className='nav-item'><Nav.Link href="#carrito"> <CartWidget /> </Nav.Link></li>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;