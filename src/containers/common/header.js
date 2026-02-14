import React, { useState } from "react";
import Nav from "./nav";
import { Container, Row, Col } from "reactstrap";

const Header = (props) => {
  const [sidebar, setSidebar] = useState(false);

  const clickSidebar = () => {
    setSidebar(!sidebar);
    document.querySelector(".navbar").classList.add("openSidebar");
  };

  return (
    <header className={`${props.className || "dark"} loding-header nav-abs custom-scroll`}>
      <Container>
        <Row>
          <Col>
            <nav>
              <a className="m-r-auto" href="/">
                <span className="font-primary" style={{ fontSize: "18px", fontWeight: 600, color: "#fff" }}>
                  JBC
                </span>
              </a>
              <div className="responsive-btn">
                <a className="toggle-nav" onClick={clickSidebar}>
                  <i aria-hidden="true" className="fa fa-bars text-white"></i>
                </a>
              </div>
              <Nav />
            </nav>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
