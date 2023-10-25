import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Stack from 'react-bootstrap/Stack';
import appMock from '../assets/app-mockup-1.svg';
function BannerApp() {
  return (
    <>
      <Container className="border-down">
        <Row>
          <Col>
          <img src={appMock} className="appmock" alt="app-mockup" />
          </Col>
          <Col>
            Realiza todas las operaciones desde tu celular
            <Stack gap={3}>
              <Button variant="dark" className="btn-radio p-2" > <i className="bi bi-google-play"></i> Google play </Button>
              <Button variant="dark" className="p-2 btn-radio" ><i className="bi bi-apple"></i>App Store</Button>
              <Button variant="dark" className="p-2 btn-radio" ><i className="bi bi-bag"></i>App Gallery</Button>
            </Stack>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default BannerApp;
