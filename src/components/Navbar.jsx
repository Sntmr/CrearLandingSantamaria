import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <Link to="/">Inicio</Link>
    <br />
    <Link to="/category/gaming">Perifericos Gamer</Link>
    <br />
    <Link to="/category/daily">Uso Diario</Link>
  </nav>
);

export default Navbar;