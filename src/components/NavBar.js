import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';



function BasicExample({children}) {
  return (
    <Navbar expand="lg" className="mi-nav">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="me-auto nav-item__container">
            <li className='nav-tittle'><Nav.Link href="#home">Hambur10</Nav.Link></li>
            <li className='nav-item'><Nav.Link href="#ofertas">Ofertas</Nav.Link></li>
            <li className='nav-item'><Nav.Link href="#categorias">Categorias</Nav.Link></li>
            <li className='nav-item'><Nav.Link href="#sucursales">Sucursales</Nav.Link></li>
            <li className='nav-item'><Nav.Link href="#crear-hamburguesa">Crea tu hamburguesa</Nav.Link></li>
            <li className='nav-item'><Nav.Link href="#faq">FAQ</Nav.Link></li>
            <li className='nav-item'><Nav.Link href="#carrito">{children}</Nav.Link></li>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;