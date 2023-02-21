import { Navbar as BoostrapNavbar, Container, Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <BoostrapNavbar className='shadow-sm mb-3'>
        <Container>
            <Nav>
                <Nav.Link to='/' as={NavLink}>
                    Overview
                </Nav.Link>
                <Nav.Link to='/repositories' as={NavLink}>
                    Repositories
                </Nav.Link>
                <Nav.Link to='/projects' as={NavLink}>
                    Projects
                </Nav.Link>
            </Nav>
        </Container>
    </BoostrapNavbar>
  )
}

export default Navbar