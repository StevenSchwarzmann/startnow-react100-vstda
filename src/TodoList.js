import React, { Component } from "react";
import { Todo } from "./Todo";

export class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isEditing: false
    };
  }

  render() {
    let TodoListTodos = this.props.todos;
    // console.log("All todos", todos);

    return (
      <div>
         {TodoListTodos.map((singleTodo, index) => <Todo key={index} updateSingle={this.props.updateTodo} todo={singleTodo}/>)}
      </div>
     );
  }
}
