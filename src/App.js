import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
//calling constructor to handle state
  constructor() {
    //calling super in order to initialize the 'this' keyword and allow ES6 to take our subclass
    super();
    /*setting this.state equal to an initial value of an object, containing a key of
    todoList and a value of an array */
    this.state = {todoList: []};
  };
  //declaring function for toggling the bool value depending on if each item was completed or not
  //passing itemId for identification purposes
  toggleCompleted = itemId => {
    /*setting the state of our todoList passing an object with todoList as the key of the item in the object
      and the value being set equal to the result of a map fucntion evaluating on each item in TodoList
    */
    this.setState({
      todoList: this.state.todoList.map(item => {
        //checking to see if the current item.id is equal to the itemId being passed through toggleComplted()
        if (item.id === itemId) {
          //if this is the case return the item, and all previous items within the object and then update the bool to equal true
          return {
            ...item,
            completed: !item.completed
          };
        }
        console.log(item)
        return item;
      })
    });
  };
  clearCompleted = () => {
  
  this.setState({
    todoList: this.state.todoList.filter(item => {
      return !item.completed;
    })
  });
};
  //decalring function to add an item to the value of todoList passing the itemName as an argument
  addItem = itemName => {
    //using this.setState to update the state of our constructor with the new information
    this.setState({
      //passing an object with a key of item and a value containing a spread operator attached to the todoList within the current this.state.
      todoList: [
        ...this.state.todoList,
        {
          name: itemName,
          completed: false,
          id: (Math.random() * Math.random()).toString(9).substr(2, 9)
        }
      ]
    });
  };
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addItem= {this.addItem}/>
          <TodoList
            todoList={this.state.todoList}
            toggleCompleted={this.toggleCompleted}
            clearCompleted={this.clearCompleted}
          />
      </div>
    );
  }
}

export default App;
