import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom'
import CartWidget from './CartWidget';


function NavBar() {
    return (
        <>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="/"><img src='/assets/logo.png' alt="logo" id='logo' /></Navbar.Brand>
                    <div>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <NavLink className="navLink" to='/' >Inicio</NavLink>
                                <NavLink className="navLink" to='/category/blanco'>Vinos Blancos</NavLink>
                                <NavLink className="navLink" to='/category/tinto'>Vinos Tintos</NavLink>
                            </Nav>
                        </Navbar.Collapse>
                    </div>
                    <CartWidget />
                </Container>
            </Navbar>
        </>
    );
}

export default NavBar;