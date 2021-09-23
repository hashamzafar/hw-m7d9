import { Navbar, Nav } from 'react-bootstrap'
import { Link, withRouter } from 'react-router-dom'
interface MyNavProps {
    title : string;
    
}

const MyNav = ({title}: MyNavProps) => (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Link to="/">
            <Navbar.Brand>{title}</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
                <Link to="/">
                    <div >Home</div>
                    {/* className={title.location.pathname === '/' ? 'nav-link active' : 'nav-link'} */}
                </Link>
                <Link to="/menu">
                    <div >Menu</div>
                    {/* className={title.location.pathname === '/menu' ? 'nav-link active' : 'nav-link'} */}
                </Link>
                <Link to="/reservations">
                    <div >Reservation</div>
                    {/* className={title.location.pathname === '/reservations' ? 'nav-link active' : 'nav-link'} */}
                </Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
)
export default MyNav
// export default withRouter(MyNav)