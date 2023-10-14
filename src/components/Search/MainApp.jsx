import React, { useState } from "react";
import SearchArea from "./SearchArea";
import DisplayArea from "./DisplayArea";

const people = [
  { name: "Ram", role: "admin", id: "0" },
  { name: "Shyam", role: "user", id: "1" },
  { name: "Hari", role: "user", id: "2" },
  { name: "Sita", role: "client", id: "3" },
  { name: "Siri", role: "client", id: "4" },
  { name: "Ramesh", role: "client", id: "5" },
];

const MyApp = () => {
  const [filterText, setFilterText] = useState("");
  const [adminOnly, setAdminOnly] = useState(false);
  const [userOnly, setUserOnly] = useState(false);
  const [clientOnly, setClientOnly] = useState(false);

  return (
    <>
      <SearchArea
        adminOnly={adminOnly}
        filterText={filterText}
        setFilterText={setFilterText}
        setAdminOnly={setAdminOnly}
        userOnly={userOnly}
        setUserOnly={setUserOnly}
        clientOnly={clientOnly}
        setClientOnly={setClientOnly}
      />
      <DisplayArea
        people={people}
        adminOnly={adminOnly}
        filterText={filterText}
        userOnly={userOnly}
        clientOnly={clientOnly}
      />
    </>
  );
};

export default MyApp;
