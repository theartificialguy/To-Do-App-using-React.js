import React, { useState } from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import { IconButton } from "@material-ui/core";

function ListItem(props) {
  const [state, setState] = useState(false);

  const crossItem = () => {
    setState((prevVal) => {
      if (prevVal) {
        return false;
      } else {
        return true;
      }
    });
  };

  return (
    <div className="container__app__content__item">
      <span>
        <IconButton>
          <DeleteIcon onClick={crossItem} />
        </IconButton>
      </span>
      <p style={{ textDecoration: state ? "line-through" : "none" }}>
        {props.Item}
      </p>
    </div>
  );
}

export default ListItem;
