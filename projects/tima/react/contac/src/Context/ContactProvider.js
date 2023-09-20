import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const ContactContext = createContext();

export const useContacts = () => {
  return useContext(ContactContext);
};

export const ContactProvider = ({ children }) => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/contacts").then((response) => {
      setContacts(response.data);
    });
  }, []);

  // Function to add a contact
  const addContact = (newContact) => {
    axios
      .post("http://localhost:8000/contacts", newContact)
      .then((response) => {
        setContacts([...contacts, response.data]);
      });
  };

  // Function to update a contact
  const updateContact = (id, updatedContact) => {
    axios
      .put(`http://localhost:8000/contacts/${id}`, updatedContact)
      .then(() => {
        const updatedContacts = contacts.map((contact) =>
          contact.id === id ? updatedContact : contact
        );
        setContacts(updatedContacts);
      });
  };

  // Function to delete a contact
  const deleteContact = (id) => {
    axios.delete(`http://localhost:8000/contacts/${id}`).then(() => {
      const updatedContacts = contacts.filter((contact) => contact.id !== id);
      setContacts(updatedContacts);
    });
  };

  return (
    <ContactContext.Provider
      value={{
        contacts,
        addContact,
        updateContact,
        deleteContact,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};
