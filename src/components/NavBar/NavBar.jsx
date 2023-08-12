import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget';
import { NavLink } from 'react-router-dom';
import Faq from '../Faq/Faq';



function NavBar() {
  return (
    <Navbar expand="lg" className="mi-nav">
      <Container>
        <Navbar.Collapse id="basic-navbar-nav" className="me-auto nav-item__container">
            <li className='nav-tittle'><NavLink to={"/"}>Hambur10</NavLink></li>
            <li className='nav-item'><NavLink to={"/category/simples"}>Clasicas</NavLink></li>
            <li className='nav-item'><NavLink to={"/category/especiales"}>Espaciales</NavLink></li>
            <li className='nav-item'><NavLink to={"/category/veganas"}>Veganas</NavLink></li>
            <li className='nav-item'><NavLink > <Faq /> </NavLink></li>
            <li className='nav-item'><NavLink href="#carrito"> <CartWidget /> </NavLink></li>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;