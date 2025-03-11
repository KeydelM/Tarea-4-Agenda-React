import React, { useState } from 'react';

function AddContactForm({ onAddContact }) {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [telefono, setTelefono] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nombre.trim() === '' || apellido.trim() === '' || telefono.trim() === '') {
      alert("Por favor, rellene todos los campos.");
      return;
    }
    onAddContact({ nombre, apellido, telefono });
    setNombre('');
    setApellido('');
    setTelefono('');
  };

  return (
    <form onSubmit={handleSubmit} className="form-inline justify-content-center mb-4">
      <input
        type="text"
        className="form-control mb-2 mr-sm-2"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        placeholder="Nombre"
        required
      />
      <input
        type="text"
        className="form-control mb-2 mr-sm-2"
        value={apellido}
        onChange={(e) => setApellido(e.target.value)}
        placeholder="Apellido"
        required
      />
      <input
        type="tel"
        className="form-control mb-2 mr-sm-2"
        value={telefono}
        onChange={(e) => setTelefono(e.target.value)}
        placeholder="Teléfono"
        required
      />
      <button type="submit" className="btn btn-primary mb-2">
        <i className="fas fa-plus-circle"></i> Agregar
      </button>
    </form>
  );
}

export default AddContactForm;
