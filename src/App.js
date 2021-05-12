import './App.css';
import { Container, Row, Col, Button, Alert, Breadcrumb, BreadcrumbItem, Card, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container>
        <Form className='mb-3'>
          <Row>
            <Col md>
            <Form.Group controlId='formEmail'>
            <Form.Label>Email Address</Form.Label>
            <Form.Control type='email' placeholder='Example@email.com' />
            <Form.Text className='text-muted'>
              We'll never share your email address, trust us!
            </Form.Text>
          </Form.Group>
          </Col>
          <Col md>
            <Form.Group controlId='formPassword'>
              <Form.Label>Password</Form.Label>
              <Form.Control type='password' placeholder='Password' />
            </Form.Group>
          </Col>
          </Row>
          <Button variant='secondary' type='submit'>Login</Button>
        </Form>

        <Card className='mb-3' style={{ color: '#000'}}>
          <Card.Img src='https://picsum.photos/200/80' />
          <Card.Body>
            <Card.Title>
              Card Example
            </Card.Title>
            <Card.Text>
              This is an example of react boostrap cards
            </Card.Text>
            <Button variant='primary'>Read More</Button>
          </Card.Body>
        </Card>
        <Breadcrumb>
          <BreadcrumbItem>Test</BreadcrumbItem>
          <BreadcrumbItem>Test 2</BreadcrumbItem>
          <BreadcrumbItem active>Test 3</BreadcrumbItem>
        </Breadcrumb>
        <Alert variant='success' >This a Button</Alert>
        <Button>Test Button</Button>
        </Container>
      </header>
    </div>
  );
}

export default App;
