import Button from "react-bootstrap/Button";
import Stack from 'react-bootstrap/Stack';
// import Container from 'react-bootstrap/Container';

function Contactanos() {
  return (
    <>
    <article className="contactanos-container">
       <section className="llamanos">
       <h1 className="contact">Llámanos </h1>
       <p className="contactanos-texto">Habla con un asesor, te atendemos de lunes a sábado de 8am a 7pm</p>
       <button className="btn-contact"> <i className="bi bi-telephone"></i>{""} Llamar 01 3199999</button>
       </section>
      <section className="contactanos"> 
        <h1 className="contact"> Contáctanos</h1>
        {/* <Button variant="light" style={{ borderRadius: '14px' }} className="btn-outline-secondary p-2 cel"> <i className="bi bi-whatsapp"></i> Chatea por WhatsApp</Button> */}
        <p className="contactanos-texto">Realiza tus consultas en nuestro canal de atención al cliente </p>
        <button className="btn-contact"> <i className="bi bi-whatsapp"></i>{""} Chatea por WhatsApp</button>
        <button className="btn-contact cel"> <i className="bi bi-telephone"></i>{""} Llamar 01 3199999</button>
      </section>
      <div className="social-media ">
      <h1 className="contact">Síguenos</h1>
      <p className="contactanos-texto">Mantente al día de las  promociones exclusivas para clientes</p>
      <section className="d-flex justify-content-center">
        <Stack direction="horizontal" gap={3} className="social-icons">
        <div className="icons-container"><i className="bi bi-facebook"></i></div>
        <div className="icons-container"><i className="bi bi-youtube"></i></div>
        <div className="icons-container"><i className="bi bi-instagram"></i></div>
        <div className="icons-container"><i className="bi bi-linkedin"></i></div>
        </Stack>
      </section> 
       </div>
    </article>
      
    </>
  )
}

export default Contactanos
