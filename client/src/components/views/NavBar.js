
import { NavLink} from "react-router-dom";
import { Navbar, Container, Nav } from 'react-bootstrap';



const NavBar = () => {
     return (
        <>
            <Navbar bg="light" variant="light" className="rounded mt-4 mb-4">
                <Container>
                    <Navbar.Brand as={NavLink} to="/">
                        < img src={`${process.env.PUBLIC_URL}/logo.png`} alt="logo-anchor" className='d-inline'/>
                        <h2 className='d-inline align-middle ms-2' style={{ color: '#111947' }}>Naval Notice Board</h2>
                    </Navbar.Brand>
                    <div className="justify-content-end">
                        <Nav className="me-auto">
                            <Nav.Link as={NavLink} to="/">Home</Nav.Link>
                            <Nav.Link as={NavLink} to="/new-ad">New notice</Nav.Link>
                            <Nav.Link as={NavLink} to="/Register">Sign up</Nav.Link>
                            <Nav.Link as={NavLink} to="/Search">Search</Nav.Link>
                        </Nav>
                    </div>
                </Container>
            </Navbar>
        </>
     );
}

export default NavBar;