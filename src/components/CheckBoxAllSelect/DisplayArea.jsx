import React from "react";

const DisplayArea = ({ people, filterText, marking }) => {
  const filterTextPeople = [];
  let trimed = filterText.trim();

  people.forEach((person) => {
    if (person.name.toLowerCase().includes(trimed.toLowerCase()) === true) {
      filterTextPeople.push(person);
    }
  });

  const result = function getMarkedFilter() {
    if (marking.length <= 0) {
      return filterTextPeople;
    }
    return filterTextPeople.filter((person) => marking.includes(person.role));
  };

  return (
    <div>
      <ul>
        {result().map((person) => (
          <li> {person.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default DisplayArea;
