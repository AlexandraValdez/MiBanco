import Stack from 'react-bootstrap/Stack';

const Siguenos = () => {
  return (
    <div className="social-media">
    <h1 className="contact">Síguenos</h1>
      <Stack direction="horizontal" gap={3} className="social-icons">
      <div className="icons-container"><i className="bi bi-facebook"></i></div>
      <div className="icons-container"><i className="bi bi-youtube"></i></div>
      <div className="icons-container"><i className="bi bi-instagram"></i></div>
      <div className="icons-container"><i className="bi bi-linkedin"></i></div>
    </Stack>
    </div>
  )
}

export default Siguenos
