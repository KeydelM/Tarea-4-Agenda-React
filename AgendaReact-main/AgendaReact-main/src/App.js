import React, { useState, useEffect } from 'react';
import ContactList from './components/ContactList';
import AddContactForm from './components/AddContactForm';
import './App.css';

function App() {
  const [contacts, setContacts] = useState([]);

  const loadContacts = async () => {
    try {
      const response = await fetch('http://www.raydelto.org/agenda.php', { method: 'GET' });
      if (!response.ok) {
        throw new Error(`Error en la solicitud: ${response.status}`);
      }
      const data = await response.json();
      setContacts(data);
    } catch (error) {
      console.error('Error al cargar los contactos:', error);
    }
  };

  const addContact = async (contact) => {
    try {
      const response = await fetch('http://www.raydelto.org/agenda.php', {
        method: 'POST',
        body: JSON.stringify(contact),
      });
      if (!response.ok) {
        throw new Error(`Error en la solicitud POST: ${response.status}`);
      }
      alert('Contacto agregado con éxito');
      loadContacts(); // Recargar contactos después de agregar uno nuevo
    } catch (error) {
      console.error('Error al agregar el contacto:', error);
      alert(`Error al agregar el contacto: ${error.message}`);
    }
  };

  useEffect(() => {
    loadContacts();
  }, []);

  return (
    <div className="container">
      <h1><i className="fas fa-address-book"></i> Agenda de Contactos</h1>
      <AddContactForm onAddContact={addContact} />
      <ContactList contacts={contacts} />
      <footer>
        <p>&copy; 2024 Agenda Web. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
