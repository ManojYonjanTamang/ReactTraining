import React, { useState } from "react";

const StateDuplication = () => {
  const [selectedId, setSelectedId] = useState(0);
  const [items, setItems] = useState([
    { title: "pretzels", id: 0 },
    { title: "crispy seaweed", id: 1 },
    { title: "granola bar", id: 2 },
  ]);

  const selectedItem = items.find((item) => {
    return item.id == selectedId;
  });

  const handleInputChange = (id, e) => {
    setItems(
      items.map((item) => {
        if (item.id === id) {
          return { ...item, title: e.target.value };
        } else {
          return item;
        }
      })
    );
  };

  return (
    <div>
      <h2>What's your snack?</h2>
      {items.map((item) => {
        return (
          <li key={item.id}>
            <input
              type="text"
              value={item.title}
              onChange={(e) => handleInputChange(item.id, e)}
            />
            <button onClick={() => setSelectedId(item.id)}>Select Id</button>
          </li>
        );
      })}
      <p>You picked {selectedItem.title}</p>
    </div>
  );
};

export default StateDuplication;
