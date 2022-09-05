import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './CartWidget';
import foto from '../assets/logo.png'

function NavBar() {
    return (
        <>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home"><img src={foto} alt="logo" id='logo' /></Navbar.Brand>
                    <div>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="#home">Inicio</Nav.Link>
                                <Nav.Link href="#link">Productos</Nav.Link>
                                <NavDropdown title="Opciones" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Vinos Blancos</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">
                                        Vinos Tintos
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Otros</NavDropdown.Item>

                                </NavDropdown>
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