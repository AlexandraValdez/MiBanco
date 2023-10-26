import Button from "react-bootstrap/Button";
import Stack from 'react-bootstrap/Stack';
import Container from 'react-bootstrap/Container';

function Contactanos() {
  return (
    <>
      <Container> 
        <Stack gap={3} className="mt-4"> 
        <h1 className="contact"> Contáctanos</h1>
        <Button variant="light" style={{ borderRadius: '14px' }} className="btn-outline-secondary p-2"> <i className="bi bi-whatsapp"></i> Chatea por WhatsApp</Button>
        <Button variant="light" style={{ borderRadius: '14px' }} className="btn-outline-secondary p-2"> <i className="bi bi-telephone"></i> Llamar 01 3199999</Button>
      </Stack>
      </Container>
      
    </>
  )
}

export default Contactanos
