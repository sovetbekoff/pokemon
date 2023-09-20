import React, { useState, useEffect } from "react";
import ContactList from "./components/ContactList";
import ContactForm from "./components/ContactForm";
import { ContactProvider } from "./Context/ContactProvider";

function App() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="App">
      <h1>Contact Book</h1>
      <ContactProvider>
        <ContactList />
        {showForm ? (
          <ContactForm onClose={() => setShowForm(false)} />
        ) : (
          <button onClick={() => setShowForm(true)}>Add Contact</button>
        )}
      </ContactProvider>
    </div>
  );
}

export default App;
