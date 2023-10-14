import React, { useState } from "react";

const data = [
  { id: 1, text: "Person 1", role: "Admin" },
  { id: 2, text: "Person 2", role: "User" },
  { id: 3, text: "Person 3", role: "Admin" },
  { id: 4, text: "Person 4", role: "Client" },
  { id: 5, text: "Person 5", role: "Admin" },
  { id: 6, text: "Person 6", role: "Client" },

  // Add more data items as needed
];

export default function SolutionToCheckbox() {
  const [checkboxes, setCheckboxes] = useState({});

  // Handle checkbox change event
  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setCheckboxes({
      [name]: checked,
    });
  };

  // Filter data based on checked checkboxes
  const filteredData = data.filter((person) => {
    return Object.keys(checkboxes).every((curr) => {
      if (checkboxes[curr]) {
        return person.role === curr;
      }
      return true; // Include person if checkbox is not checked
    });
  });

  return (
    <div>
      {/* Render checkboxes */}
      <label>
        Admin
        <input
          type="checkbox"
          name="Admin"
          checked={checkboxes["Admin"] || false}
          onChange={(event) => {
            const { name, checked } = event.target;
            setCheckboxes({
              [name]: checked,
            });
          }}
        />
      </label>
      <br />
      <label>
        User
        <input
          type="checkbox"
          name="User"
          checked={checkboxes["User"] || false}
          onChange={handleCheckboxChange}
        />
      </label>
      <br />

      <label>
        Client
        <input
          type="checkbox"
          name="Client"
          checked={checkboxes["Client"] || false}
          onChange={handleCheckboxChange}
        />
      </label>

      {/* Render filtered data */}
      <ul>
        {filteredData.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </div>
  );
}
