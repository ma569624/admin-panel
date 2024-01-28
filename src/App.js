import { Col, Container, Row, } from "react-bootstrap";
import Router from "./routes/Router";
import { BrowserRouter } from "react-router-dom";
import SideNav from "./component/sidenav/SideNav";

function App() {
  return (
    <BrowserRouter>
      <Container className="g-0" fluid>
        <Row className="g-0">
        <Col xs='2'>
          <SideNav />
        </Col>
          <Col xs='10'>
            <Router />
          </Col>
        </Row>
      </Container>
    </BrowserRouter>
  );
}

export default App;
