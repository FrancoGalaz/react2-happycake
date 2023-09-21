import React from 'react';
import { Navbar as NavbarBootstrap, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <NavbarBootstrap variant="dark" className="d-flex justify-content-between">
      <Container className='d-flex gap-2 justify-content-start'>
        <Link to='/Rutas_React/' className='text-decoration-none text-light'>🏠 Home</Link>
        <Link to='/Contacto' className='text-decoration-none text-light'>📖 Contacto</Link>
      </Container>
      <Link to='/Rutas_React/' className='text-decoration-none text-light'>
        <NavbarBootstrap.Brand> Happy Cake 🍰</NavbarBootstrap.Brand>
      </Link>
    </NavbarBootstrap>
  );
}

export default Navbar;
