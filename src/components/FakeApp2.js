import React from "react";

const createConnection = () => {
  return {
    connect() {
      console.log("connecting.......");
    },
    disconnect() {
      console.log("disconnecting.....");
    },
  };
};

export default createConnection;
