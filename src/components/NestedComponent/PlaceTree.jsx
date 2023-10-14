import React from "react";

export default function PlaceTree({ id, plan, onDelete }) {
  const place = plan[id];
  const childIds = place.childIds;

  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <li>
      {place.title}
      <button onClick={handleDelete}>Delete</button>
      {childIds.length > 0 && (
        <ol>
          {childIds.map((childId) => (
            <PlaceTree
              key={childId}
              id={childId}
              plan={plan}
              onDelete={onDelete}
            />
          ))}
        </ol>
      )}
    </li>
  );
}
