import React, { useState } from "react";
import SearchArea from "./SearchArea";
import DisplayArea from "./DisplayArea";

const MyApp = () => {
  const [filterText, setFilterText] = useState("");
  const [marking, setMarking] = useState([]);
  const [people, setPeople] = useState([
    { name: "Ram", role: "admin", id: "0" },
    { name: "Shyam", role: "user", id: "1" },
    { name: "Hari", role: "user", id: "2" },
    { name: "Sita", role: "client", id: "3" },
    { name: "Siri", role: "client", id: "4" },
    { name: "Ramesh", role: "client", id: "5" },
  ]);

  return (
    <>
      <SearchArea
        filterText={filterText}
        setFilterText={setFilterText}
        marking={marking}
        setMarking={setMarking}
      />
      <DisplayArea
        people={people}
        setPeople={setPeople}
        filterText={filterText}
        marking={marking}
        setMarking={setMarking}
      />
    </>
  );
};

export default MyApp;
