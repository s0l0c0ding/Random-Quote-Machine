import Qutoe from './components/Quote'
import './App.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

function App() {
  return (
    <div className=" d-flex align-items-center min-vh-100">
    <Container>
      <Row className="justify-content-center align-middle">
          <Qutoe />
      </Row>
    </Container>
    </div>
  );
}

export default App;
