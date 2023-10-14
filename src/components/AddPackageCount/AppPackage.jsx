import React, { useState } from "react";
import AddItem from "./AddItem";
import PackagingList from "./PackagingList";

const initialItems = [
  { id: 0, title: "Warm socks", packed: true },
  { id: 1, title: "Travel journal", packed: false },
  { id: 2, title: "Watercolors", packed: false },
];
let nextId = 3;

export default function AppPackage() {
  const [items, setItems] = useState(initialItems);

  const handleItem = (text) => {
    setItems([...items, { id: nextId++, title: text, packed: false }]);
  };

  const handleDelete = (deleteId) => {
    setItems(items.filter((item) => item.id != deleteId));
  };

  const handleCheck = (targetedItem) => {
    setItems(
      items.map((item) => {
        if (item.id === targetedItem.id) {
          return targetedItem;
        } else return item;
      })
    );
  };

  const totalNumber = items.length;
  const checkedNumber = items.filter((item) => item.packed).length;

  return (
    <div>
      <AddItem onAddItem={handleItem} />
      <PackagingList
        items={items}
        handleDelete={handleDelete}
        handleCheck={handleCheck}
      />
      <hr />
      <hr />
      {checkedNumber} selected out of {totalNumber}
    </div>
  );
}
