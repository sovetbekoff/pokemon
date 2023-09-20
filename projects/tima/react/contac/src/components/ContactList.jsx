// src/components/ContactList.js
import React from "react";
import { useContacts } from "../Context/ContactProvider";

const ContactList = () => {
  const { contacts, deleteContact } = useContacts();

  return (
    <div>
      <h2>Contact List</h2>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            {contact.name} - {contact.email}
            <button onClick={() => deleteContact(contact.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
