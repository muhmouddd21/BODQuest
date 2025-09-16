import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap"
import { UserCircle2 } from 'lucide-react';
import IconWrapper from "../iconWrapper/IconWrapper";

import styles from './styles.module.css'

const DashboardNavbar = () => {
  return (
    <Navbar bg="light" expand="lg" className="shadow-sm py-1" fixed="top">
      <Container fluid>
        <Navbar.Brand className="fw-bold">BOD</Navbar.Brand>

        <Nav className="d-flex align-items-center">
          <NavDropdown
            align="end"
            title={
              <span className="d-flex align-items-center">
                <IconWrapper>
                  <UserCircle2 size={28} className="me-2" />
                  <span className="d-none d-md-inline">Profile</span>
                </IconWrapper>
              </span>
            }
            id="profile-dropdown"
            className={styles.noCaret}
          >
            <NavDropdown.Item href="/">My Profile</NavDropdown.Item>
            <NavDropdown.Item href="/todos">Todos</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/logout">Logout</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default DashboardNavbar;
