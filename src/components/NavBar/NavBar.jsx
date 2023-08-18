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
        <NavLink to={"/"}>Hambur10</NavLink>
        <NavLink to={"/category/simples"}>Clasicas</NavLink>
        <NavLink to={"/category/especiales"}>Espaciales</NavLink>
        <NavLink to={"/category/veganas"}>Veganas</NavLink>
        <NavLink to={"/Cart"}> <CartWidget /> </NavLink>
        </Navbar.Collapse>
      </Container>  
    </Navbar>
  );
}

export default NavBar;