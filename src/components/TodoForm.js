import React from "react";

/*
- In ListForm add a constructor and state with a state property called itemName
- On the input, add a value attribute and pass in your new state property
- Build a handleChanges function to update state with each keystroke
- Don't forget onChange on the input
*/

class TodoForm extends React.Component {
  // declaring a constructor to handle state, passing props as an argument
  constructor(props) {
    //passing props through super as an argument to allow state access to props.
    super(props);
    //setting initial state as an object with one item, this item has a  key of itemName and a value of an empty string
    this.state = {
      itemName: ""
    };
  }

  //declaring a handleChanges fucntion passing the event through as an argument
  handleChanges = event => {
    // updating the string stored in state to equal event.target.value (whatever is in the search box)
    console.log(event.target.value);
    this.setState({ itemName: event.target.value });
  };

  // creating a fucntion to run the addItem fucntion upon submission of the form, passing event down as an argument
  handleAddItem = event => {
    //preventing default behavior of the event
    event.preventDefault();
    //accessing props through state using the this keyword and accessing the addItem function passed down through this.props.
    //kwe are then passing the itemname stored in state through the function (basically whats in the search box)
    this.props.addItem(this.state.itemName);
  };
//rendering the information and passing variables/functions through state.
  render() {
    return (
      <form onSubmit={this.handleAddItem}>
        <input
          type="text"
          name="item"
          value={this.state.itemName}
          onChange={this.handleChanges}
        />
        <button>Add</button>
      </form>
    );
  }
}

export default TodoForm;
