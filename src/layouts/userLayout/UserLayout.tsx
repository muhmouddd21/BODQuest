// UserLayout.jsx

// Make sure to install lucide-react: npm install lucide-react
import { Col, ListGroup, ListGroupItem, Row } from "react-bootstrap";
import { NavLink, Outlet } from "react-router-dom";
import { User, Settings, ShoppingBag, LogOut } from 'lucide-react'; 

// Import the new CSS file
import './styles.module.css';
import { DashboardNavbar } from "@components/common";

const UserLayout = () => {
  return (
    <>
    <DashboardNavbar />
     <Row style={{ minHeight: "calc(100vh - 50px)"  }}>
        <Col 
        md={3}
        className="d-flex flex-column p-3"
         style={{ backgroundColor: "#f8f9fa" }}
        >
        <nav className="sidebar-nav flex-grow-1">
          <ListGroup>
            <ListGroupItem as={NavLink} to="/user" end>
              <User size={20} /> Profile
            </ListGroupItem>
            <ListGroupItem as={NavLink} to="/user/orders">
              <ShoppingBag size={20} /> Orders
            </ListGroupItem>
            <ListGroupItem as={NavLink} to="/user/settings">
              <Settings size={20} /> Settings
            </ListGroupItem>
          </ListGroup>
        </nav>


        <div className="sidebar-footer mt-auto">
          <ListGroup>
            <ListGroupItem as={NavLink} to="/logout">
              <LogOut size={20} /> Logout
            </ListGroupItem>
          </ListGroup>
        </div>
   

        </Col>
        <Col>
            <main className="flex-grow-1 p-4" style={{ overflowY: 'auto' }}>
                <Outlet />
            </main>
        
        </Col>
    </Row>

    </>
   

  
  );
}

export default UserLayout;