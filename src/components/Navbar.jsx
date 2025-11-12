import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <Link to="/">Inicio</Link>
    <Link to="/category/laptops">Laptops</Link>
    <Link to="/category/phones">Teléfonos</Link>
  </nav>
);

export default Navbar;