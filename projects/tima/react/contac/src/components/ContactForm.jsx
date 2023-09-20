// src/components/ContactForm.js
import React, { useState } from "react";
import { useContacts } from "../Context/ContactProvider";

const ContactForm = ({ onClose }) => {
  const { addContact, updateContact } = useContacts();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [editing, setEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editing) {
      updateContact(editId, { name, email });
    } else {
      const newContact = {
        name,
        email,
      };
      addContact(newContact);
    }
    setName("");
    setEmail("");
    onClose();
  };

  return (
    <div>
      <h2>{editing ? "Edit Contact" : "Add Contact"}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">
          {editing ? "Update Contact" : "Add Contact"}
        </button>
        <button type="button" onClick={() => onClose()}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
