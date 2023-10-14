import React, { useState } from "react";
import { initialTravelPlan } from "./Places.jsx";
import PlaceTree from "./PlaceTree";

export default function TravelPlan() {
  const [plan, setPlan] = useState(initialTravelPlan);
  const root = plan[0];
  const planetIds = root.childIds;

  // Function to delete a place by ID
  const deletePlace = (idToDelete) => {
    // Create a copy of the plan with the place removed
    const updatedPlan = { ...plan };
    delete updatedPlan[idToDelete];

    // Update the parent's childIds to remove the deleted place
    for (const key in updatedPlan) {
      updatedPlan[key].childIds = updatedPlan[key].childIds.filter(
        (childId) => childId !== idToDelete
      );
    }
    setPlan(updatedPlan);
  };

  return (
    <>
      <h2>Places to visit</h2>
      <ol>
        {planetIds.map((id) => (
          <PlaceTree key={id} id={id} plan={plan} onDelete={deletePlace} />
        ))}
      </ol>
    </>
  );
}
