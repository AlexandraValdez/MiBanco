import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";
import appMock from "../assets/app-mockup-1.svg";
import QR from '../assets/QR.png';
import appMock2 from "../assets/app-mockup-2.png";

function BannerApp() {
  return (
    <>
      <Container className="border-down banner-all">
        <Row>
          <Col>
            <img src={appMock} className=" cel" alt="app-mockup" />
            <figure className="web-cel-container">
              <img src={appMock2} className="web-cel" alt="app-mockup" />
            </figure>
          </Col>
          <Col>
            <section className="celularBanner">
              <p className="mt-4">
                Realiza todas las operaciones desde tu celular{" "}
              </p>
              <Stack gap={3}>
                <Button
                  variant="dark"
                  style={{ borderRadius: "18.5px" }}
                  className="p-2"
                >
                  {" "}
                  <i className="bi bi-google-play pe-1"></i> Google play{" "}
                </Button>
                <Button
                  variant="dark"
                  style={{ borderRadius: "18.5px" }}
                  className="p-2 "
                >
                  <i className="bi bi-apple pe-2"></i>App Store{" "}
                </Button>
                <Button
                  variant="dark"
                  style={{ borderRadius: "18.5px" }}
                  className="p-2"
                >
                  <i className="bi bi-bag pe-2"></i>App Gallery
                </Button>
              </Stack>
            </section>
            <section className="web-banner">
              <p className="texto-banner">
                Descarga nuestra app y ahorra tiempo{" "}
              </p>
              <section className="texto2-banner d-flex flex-column align-items-start">
                <section className="">
                  <i className="bi bi-caret-right-fill" style={{ color: "green" }}></i>{" "}Paga la cuota de tu préstamo
                </section>
                <section className="">
                  <i className="bi bi-caret-right-fill" style={{ color: "green" }}></i>{" "}Transfiere gratis a otros bancos
                </section>
                <section className="">
                  <i className="bi bi-caret-right-fill" style={{ color: "green" }}></i>{" "}Dispón de efectivo al toque
                </section>
                <section className="">
                  <i className="bi bi-caret-right-fill" style={{ color: "green" }}></i>{" "}Apertura tu Depósito a plazo
                </section>
              </section>
              <img src={QR} alt="" />
            </section>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default BannerApp;
