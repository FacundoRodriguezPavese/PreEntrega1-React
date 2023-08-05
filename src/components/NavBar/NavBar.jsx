import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget';
import { NavLink } from 'react-router-dom';



function NavBar() {
  return (
    <Navbar expand="lg" className="mi-nav">
      <Container>
        <Navbar.Collapse id="basic-navbar-nav" className="me-auto nav-item__container">
            <li className='nav-tittle'><NavLink to={"/"}>Hambur10</NavLink></li>
            <li className='nav-item'><NavLink to={"/categoria/simples"}>Clasicas</NavLink></li>
            <li className='nav-item'><NavLink to={"/categoria/especiales"}>Espaciales</NavLink></li>
            <li className='nav-item'><NavLink to={"/categoria/veganas"}>Veganas</NavLink></li>
            <li className='nav-item'><NavLink href="#crear-hamburguesa">Crea tu hamburguesa</NavLink></li>
            <li className='nav-item'><NavLink href="#faq">FAQ</NavLink></li>
            <li className='nav-item'><NavLink href="#carrito"> <CartWidget /> </NavLink></li>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;