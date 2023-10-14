import React from "react";

const DisplayArea = ({
  people,
  filterText,
  adminOnly,
  userOnly,
  clientOnly,
}) => {
  const peopleList = [];
  let trimed = filterText.trim();

  people.forEach((person) => {
    if (person.name.toLowerCase().indexOf(trimed.toLowerCase()) === -1) {
      return;
    }

    // if (adminOnly && person.admin === false) {
    //   return;
    // }

    peopleList.push(person);
  });

  // people.forEach((person) => {
  //   if (person.name.toLowerCase().includes(trimed.toLowerCase()) === true) {
  //     peopleList.push(person);
  //   }
  // });

  let listing = peopleList.map((list) => <li key={list.id}>{list.name}</li>);

  let result = [];
  if (adminOnly) {
    let showAdminOnly = peopleList.filter((person) => person.role === "admin");
    result = showAdminOnly.map((each) => <li key={each.id}> {each.name} </li>);
  }
  if (userOnly) {
    let showUserOnly = peopleList.filter((person) => person.role === "user");
    result = showUserOnly.map((each) => <li key={each.id}> {each.name} </li>);
  }

  if (clientOnly) {
    let showClientOnly = peopleList.filter(
      (person) => person.role === "client"
    );
    result = showClientOnly.map((each) => <li key={each.id}> {each.name} </li>);
  }

  // const result = adminOnly ? mapShowAdminOnly : listing;

  return (
    <div>
      <ul>{result.length != 0 ? result : listing}</ul>
    </div>
  );
};

export default DisplayArea;
