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
         {TodoListTodos.map((singleTodo, index) => 
            <Todo key={index} deleteEdit={this.props.deleteEdit} 
              onUpdate={this.props.onUpdate} todo={singleTodo} check={this.props.check}/>)}
      </div>
     );
  }
}
