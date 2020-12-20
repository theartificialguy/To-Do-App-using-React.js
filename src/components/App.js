import React, { useState } from "react";
import { Button } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import ListItem from "./ListItem";

function App() {
  const [item, setItem] = useState("");
  const [items, setItems] = useState([]);

  const changeInputState = (event) => {
    setItem(event.target.value);
  };

  const displayItem = () => {
    if (item) {
      setItems((prevVal) => {
        return [...prevVal, item];
      });
    }
    setItem("");
  };

  return (
    <div className="container">
      <div className="container__app">
        <h1>To Do List</h1>
        <div className="container__app__input">
          <input
            type="text"
            placeholder="Add an Item"
            onChange={changeInputState}
            value={item}
          />
          <Button className="Btn" onClick={displayItem}>
            <AddIcon />
          </Button>
        </div>
        <div className="container__app__content">
          <div className="container__app__content__items">
            {items.map((singleItem) => {
              return <ListItem Item={singleItem} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
