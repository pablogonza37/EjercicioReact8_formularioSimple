import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Formulario = () => {
    return (
        <Form >
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label className='text-white'>Nombre:</Form.Label>
        <Form.Control type="text" placeholder="Ej: Lionel" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label className='text-white'>Apellido:</Form.Label>
        <Form.Control type="text" placeholder="Ej: Messi" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label className='text-white'>DNI:</Form.Label>
        <Form.Control type="number" placeholder="Ej: 33576890" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label className='text-white'>Email:</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <div className='text-center'>
      <Button variant="warning" className='w-25 mt-3' type='submit'>Enviar</Button>
      </div>
    </Form>
    );
};

export default Formulario;