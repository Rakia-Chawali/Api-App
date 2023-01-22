import React from 'react';
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { FcHome} from "react-icons/fc";
import { FcPortraitMode } from "react-icons/fc";
function NavBar() {
    return (
      <Navbar bg="light" expand="lg" className="fixed-top pt-1">
        <Container fluid>
          <img
            src="https://e7.pngegg.com/pngimages/181/873/png-clipart-consumer-product-customer-logo-consumer-research-logo-circle.png"
            alt="customers"
            className="img"
          />
          <Navbar.Brand href="#" className="title" style={{ color: "#1D93AB" }}>
            Client's App
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto ">
              <Nav.Link href="" className="title-2">
                <Link
                  className="List-Item-Name"
                  to="/"
                  style={{
                    all: "unset",
                    color: "#5A677C",
                    fontSize: "17px",
                    cursor: "pointer",
                  }}
                >
                  <span className="Fa-Solid Fa-Gear">
                    <FcHome />
                  </span>
                  Home
                </Link>
              </Nav.Link>
              <Nav.Link href="" className="title-2">
                <Link
                  className="List-Item-Name"
                  to="/users"
                  style={{
                    all: "unset",
                    color: "#5A677C",
                    fontSize: "17px",
                    cursor: "pointer",
                  }}
                >
                  <span className="Fa-Solid Fa-Gear">
                    <FcPortraitMode />
                  </span>
                  Users
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
    }

export default NavBar;
