import React, { useRef } from 'react';
import { Form, Button } from 'react-bootstrap';

function ContactoAlternativo() {
    const correoRef = useRef();
    const descripcionRef = useRef();

    const manejarEnvio = (e) => {
        e.preventDefault();
        
        console.log(correoRef.current.value, descripcionRef.current.value);
    };

    return (
        <section className="d-flex flex-column align-items-center py-5">
            <header>
                <h5>Cuéntanos, ¿en qué podemos ayudarte?</h5>
            </header>
            <Form onSubmit={manejarEnvio}>
                <Form.Group className="mb-3">
                    <Form.Label>Correo Electrónico</Form.Label>
                    <Form.Control ref={correoRef} type="email" placeholder="nombre@ejemplo.com" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Descripción</Form.Label>
                    <Form.Control ref={descripcionRef} type="text" placeholder="Descripción" />
                </Form.Group>
                <Button className="bottonColor" type="submit" variant="dark">
                    Enviar
                </Button>
            </Form>
        </section>
    );
}

export default ContactoAlternativo;
