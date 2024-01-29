import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, Navbar, Container, Image } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { navs } from "../../config/config";
import {
  customNavBar,
  customNavLink,
  customNavbarContainer,
  navbarBrand,
  customLogo,
} from "./index";
function NavBar() {
  return (
    <Navbar style={customNavBar} expand="xl" data-bs-theme="dark">
      <Container style={customNavbarContainer}>
        <Navbar.Brand href="/apna-news-app" style={navbarBrand}>
          <Image
            src="/apna-news-app/apnaLogo.png"
            alt="image"
            style={customLogo}
          />
          <span> Apna News </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {navs.map((navItem) => (
              <LinkContainer to={navItem.page} style={customNavLink}>
                <Nav.Link >
                  {navItem.nav}
                </Nav.Link>
              </LinkContainer>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavBar;
