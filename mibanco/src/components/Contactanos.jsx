import Button from "react-bootstrap/Button";
import Stack from 'react-bootstrap/Stack';

function Contactanos() {
  return (
    <>
      
      <Stack gap={3} className=""> 
        <h1 className="contact"> Contáctanos</h1>
        <Button variant="light" className="btn-outline-secondary p-2 btn-container"> <i className="bi bi-whatsapp"></i> Chatea por WhatsApp</Button>
        <Button variant="light" className="btn-outline-secondary p-2"> <i className="bi bi-telephone"></i> Llamar 01 3199999</Button>
      </Stack>
    </>
  )
}

export default Contactanos
