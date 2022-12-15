
import { NavLink} from "react-router-dom";
import { Navbar, Container, Nav } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { getUser } from '../../redux/usersRedux';
import { useState } from 'react';



const NavBar = () => {
    //const [user] = useState(useSelector(getUser));

    const user = useSelector(getUser);
    console.log(user)

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
                            {user && <Nav.Link as={NavLink} to="/new-ad">New notice</Nav.Link>}
                            {!user && <Nav.Link as={NavLink} to="/Login">New notice</Nav.Link>}
                            {user && <Nav.Link as={NavLink} to="/Logout">Log out</Nav.Link>}
                            {!user && <Nav.Link as={NavLink} to="/Register">Sign up</Nav.Link>}
                            {!user && <Nav.Link as={NavLink} to="/Login">Sign in</Nav.Link>}
                            <Nav.Link as={NavLink} to="/Search">Search</Nav.Link>
                        </Nav>
                    </div>
                </Container>
            </Navbar>
        </>
     );
}

export default NavBar;