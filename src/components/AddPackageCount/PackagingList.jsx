import React from "react";

export default function PackagingList({ items, handleDelete, handleCheck }) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <label>
            <input
              type="checkbox"
              checked={item.packed}
              onChange={(e) =>
                handleCheck({ ...item, packed: e.target.checked })
              }
            />
            {item.title}
          </label>
          <button onClick={() => handleDelete(item.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}
