import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget';
import { NavLink } from 'react-router-dom';



function NavBar() {
  return (
    <Navbar expand="lg" className="mi-nav">
      <Container>
        <Navbar.Collapse id="basic-navbar-nav" className="me-auto nav-item__container">
        <NavLink to={"/"} className={"nav-item-home"}>Hambur10</NavLink>
        <NavLink to={"/category/simples"} className={"nav-item"}>Clasicas</NavLink>
        <NavLink to={"/category/especiales"} className={"nav-item"}>Espaciales</NavLink>
        <NavLink to={"/category/veganas"} className={"nav-item"}>Veganas</NavLink>
        <NavLink to={"/Cart"}> <CartWidget /> </NavLink>
        </Navbar.Collapse>
      </Container>  
    </Navbar>
  );
}

export default NavBar;