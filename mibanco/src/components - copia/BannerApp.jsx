import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from 'react-bootstrap/Button';
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
            <p className="mt-4">Realiza todas las operaciones desde tu celular </p>
            <Stack gap={3}>
              <Button variant="dark" style={{ borderRadius: '18.5px' }} className="p-2" > <i className="bi bi-google-play pe-1"></i> Google play </Button>
              <Button variant="dark" style={{ borderRadius: '18.5px' }} className="p-2 " ><i className="bi bi-apple pe-2"></i>App Store </Button>
              <Button variant="dark" style={{ borderRadius: '18.5px' }} className="p-2" ><i className="bi bi-bag pe-2"></i>App Gallery</Button>
            </Stack>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default BannerApp;
