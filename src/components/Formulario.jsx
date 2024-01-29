import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import React, { useState } from "react";

const Formulario = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [dni, setDni] = useState("");
  const [email, setEmail] = useState("");
  const [errores, setErrores] = useState({});

  const validarFormulario = () => {
    let errores = {};

    if (!nombre.trim() || /\d/.test(nombre)) {
      errores.nombre =
        "El nombre no puede estar vacío y no puede contener números";
    }

    if (!apellido.trim() || /\d/.test(apellido)) {
      errores.apellido =
        "El apellido no puede estar vacío y no puede contener números";
    }

    if (!dni.trim() || isNaN(dni)) {
      errores.dni = "El DNI debe ser un número";
    }

    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) {
      errores.email = "El correo electrónico es inválido";
    }

    setErrores(errores);
    return Object.keys(errores).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validarFormulario()) {
      alert("Formulario válido. datos enviados");
      limpiarFormulario();
    } else {
      alert("Formulario inválido. Por favor, Completar todos los datos.");
    }
  };

  const limpiarFormulario = () => {
    setNombre("");
    setApellido("");
    setDni("");
    setErrores("");
  };

  return (
    <Form onSubmit={handleSubmit} className="formulario">
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label className="text-white">Nombre:</Form.Label>
        <Form.Control
          type="text"
          placeholder="Ej: Lionel"
          minLength={3}
          maxLength={30}
          required
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        {errores.nombre && <span>{errores.nombre}</span>}
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
        <Form.Label className="text-white">Apellido:</Form.Label>
        <Form.Control
          type="text"
          placeholder="Ej: Messi"
          minLength={3}
          maxLength={30}
          required
          value={apellido}
          onChange={(e) => setApellido(e.target.value)}
        />
        {errores.apellido && <span>{errores.apellido}</span>}
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
        <Form.Label className="text-white">DNI:</Form.Label>
        <Form.Control
          type="text"
          placeholder="Ej: 33576890"
          minLength={7}
          maxLength={9}
          required
          value={dni}
          onChange={(e) => setDni(e.target.value)}
        />
        {errores.dni && <span>{errores.dni}</span>}
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
        <Form.Label className="text-white">Email:</Form.Label>
        <Form.Control
          type="email"
          placeholder="name@example.com"
          minLength={3}
          maxLength={50}
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errores.email && <span>{errores.email}</span>}
      </Form.Group>
      <div className="text-center">
        <Button variant="warning" className="w-25 mt-3" type="submit">
          Enviar
        </Button>
      </div>
    </Form>
  );
};

export default Formulario;
