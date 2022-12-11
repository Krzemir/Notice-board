
import { NavLink} from "react-router-dom";
import { Navbar, Container, Nav } from 'react-bootstrap';

const NavBar = () => {
     return (
        <>
            <Navbar bg="light" variant="light" className="rounded mt-4 mb-4">
                <Container>
                    <Navbar.Brand as={NavLink} to="/">Notice Board</Navbar.Brand>
                    <div className="justify-content-end">
                        <Nav className="me-auto">
                            <Nav.Link as={NavLink} to="/">Home</Nav.Link>
                            <Nav.Link as={NavLink} to="/Login">Login</Nav.Link>
                            <Nav.Link as={NavLink} to="/Search">Search</Nav.Link>
                        </Nav>
                    </div>
                </Container>
            </Navbar>
        </>
     );
}

export default NavBar;