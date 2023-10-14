import React from "react";

const DisplayArea = ({ people, setPeople, filterText, marking }) => {
  const filterTextPeople = [];
  let trimed = filterText.trim();

  people.forEach((person) => {
    if (person.name.toLowerCase().includes(trimed.toLowerCase()) === true) {
      filterTextPeople.push(person);
    }
  });

  const displayOnCondition = function getMarkedFilter() {
    if (marking.length <= 0) {
      return filterTextPeople;
    }
    return filterTextPeople.filter((person) => marking.includes(person.role));
  };

  const handleDelete = (id) => {
    setPeople((prevPeople) =>
      prevPeople.filter((prevPerson) => prevPerson.id !== id)
    );
  };

  return (
    <div>
      <ul>
        {displayOnCondition().map((person) => (
          <li key={person.id}>
            {" "}
            {person.name}{" "}
            <button onClick={() => handleDelete(person.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DisplayArea;
