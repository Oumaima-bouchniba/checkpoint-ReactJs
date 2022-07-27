import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Form, Navbar, Row, } from 'react-bootstrap';


function App() {
  return (
    <div className="App">
<Navbar bg="dark"  expand="lg">
  <Container>
    <Navbar.Brand  id='color' href="#home">Welcome</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    
    <Navbar.Collapse  className="justify-content-end"> 
          <Navbar.Text id="color">
            Signed in as: <a id="colored" href="#login">oumaima Bouchniba</a>
          </Navbar.Text>
        </Navbar.Collapse>
  </Container>
</Navbar>

<Form id="form">
<Col sm="6">
  <Form.Group  controlId="exampleForm.ControlInput1">
 
    <Form.Label>Email </Form.Label>
    <Form.Control type="email" placeholder="name@example.com" />
  </Form.Group>
  </Col>
  <Col sm="6">
  <Form.Group  controlId="exampleForm.ControlInput1">
 
    <Form.Label>Password</Form.Label>
    <Form.Control type="email" placeholder="********" />
  </Form.Group>
  </Col>
</Form>

    </div>


  );
}

export default App;
