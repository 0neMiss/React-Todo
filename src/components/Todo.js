import React from "react";

const Item = props => {

  return (
    <div>
    /*passing in a className with an if statement to determine if the item has been completed*/
      className={`item${props.item.complete ? " complete" : ""}`}
      /* passing n onclick event evaluating the toggleComplete function on it passing item.id as its argument*/
      onClick={event => props.toggleCompleted(props.item.id)}
    >
      <p>{props.item.name}</p>
    </div>
  );
};

export default Item;
