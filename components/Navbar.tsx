import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-900 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">Labora</div>
        <ul className="flex space-x-4">
          <li><a href="#" className="text-white hover:text-red-600">Inicio</a></li>
          <li><a href="#" className="text-white hover:text-red-600">Programas</a></li>
          <li><a href="#" className="text-white hover:text-red-600">Empresas</a></li>
          <li><a href="#" className="text-white hover:text-red-600">Contacto</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar; 