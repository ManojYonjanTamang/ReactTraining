import { useState } from "react";
import Chat from "./Chat.jsx";
import ContactList from "./ContactList.jsx";

const chatHistory = {};

const contacts = [
  { id: 0, name: "Taylor", email: "taylor@mail.com" },
  { id: 1, name: "Alice", email: "alice@mail.com" },
  { id: 2, name: "Bob", email: "bob@mail.com" },
];

export default function Messenger() {
  const [selected, setSelected] = useState(contacts[0]);

  const [text, setText] = useState(chatHistory[selected.id] || "");

  function onSelect(selectedContact) {
    setSelected(selectedContact);
    setText(chatHistory[selectedContact.id] || "");
  }

  function handleTextChange(newText) {
    setText(newText);
    chatHistory[selected.id] = newText;
  }

  return (
    <div>
      <ContactList
        contacts={contacts}
        selectedContact={selected}
        onSelect={onSelect}
      />
      <Chat
        selected={selected}
        text={text}
        handleTextChange={handleTextChange}
      />
    </div>
  );
}
