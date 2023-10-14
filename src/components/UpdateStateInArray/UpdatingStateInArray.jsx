import { useState } from "react";
import { ItemList } from "./ItemList";

let nextId = 3;
const initialList = [
  { id: 0, title: "Big Bellies", seen: false },
  { id: 1, title: "Lunar Landscape", seen: false },
  { id: 2, title: "Terracotta Army", seen: true },
];

export default function UpdateStateInArray() {
  const [myList, setMyList] = useState(initialList);
  const [yourList, setYourList] = useState(initialList);

  function handleToggleMyList(callbackId, callbackCheck) {
    setMyList(
      myList.map((item) => {
        if (item.id === callbackId) {
          return { ...item, seen: callbackCheck };
        } else return item;
      })
    );
  }

  function handleToggleYourList(callbackId, callbackCheck) {
    setYourList(
      yourList.map((item) => {
        if (item.id === callbackId) {
          return { ...item, seen: callbackCheck };
        } else return item;
      })
    );
  }

  return (
    <>
      <h1>Art Bucket List</h1>
      <h2>My list of art to see:</h2>
      <ItemList artworks={myList} onToggle={handleToggleMyList} />
      <h2>Your list of art to see:</h2>
      <ItemList artworks={yourList} onToggle={handleToggleYourList} />
    </>
  );
}
