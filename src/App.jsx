import React, { Component } from "react";
import { TodoList } from "./TodoList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      priority: "null",
      todos: []
    };
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.onUpdate = this.onUpdate.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
  }

  //Handles add button and pushes new entry to array of todos
  handleBtnClick(e) {
    if (this.state.priority === "null" || this.state.text === "") {
      alert("Please enter a valid priority and task todo");
    } else {
      var newTodo = {
        id: Date.now(),
        text: this.state.text,
        priority: this.state.priority
      };

      var allTodos = [...this.state.todos];
      allTodos.push(newTodo);
      //resets inputs to defaults
      this.setState({ todos: allTodos, text: '', priority: "null" });
    }
  }

  onUpdate(todo) {
    let todos = this.state.todos;
    //var index = this.state.todos.indexOf(todo);
    var index = todos.findIndex(t => t.id === todo.id);
    console.log("Found todo at index ", index);
    console.log("Parameter todo is ", todo);
    //breaks todos in three parts - before the edit, the edit, and after the edit
    let updatedTodo = Object.assign({}, todos[index], todo);
    let frontTodos = todos.slice(0, index);
    let backTodos = todos.slice(index + 1);
    //remakes list of todos with the edit(updated) todo in place of original
    this.setState( {
      todos: [...frontTodos, updatedTodo, ...backTodos]
    });

    console.log("All todos after update", this.state.todos); 
  }

  deleteTodo(todo) {
    let todos = this.state.todos;
    var index = todos.findIndex(t => t.id === todo.id);
    console.log("delete button pressed")
    //let deletedTodo = Object.assign({}, todos[index], todo);
    todos.splice(index, 1);
    // let backTodos = todos.splice(index + 1);
    //remakes list of todos with the sliced todo instead of original
    console.log(index)
    this.setState( {
      todos
    });
  }

  handleChange(e) {
    const value = e.target.value;
    const name = e.target.name;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <div className="container">
        <div className="border-bottom text-white">
          <h3> Very Simple Todo App </h3>
          <p> Track all the things </p>
        </div>
        <div className="row">
          <div className="col-4 bg-white mt-3">
            <div className="card-header h6"> Add New Todo </div>
            <div>
              <strong>I want to..</strong> <br />
              <textarea
                name="text"
                id="create"
                className="create-todo-text btn-block"
                value={this.state.text}
                onChange={this.handleChange}
              />{" "}
              <br />
              <strong>How much of a priority is this?</strong> <br />
              <select
                name="priority"
                id="priority"
                className="create-todo-priority btn-block "
                placeholder="Select a Priority"
                value={this.state.priority}
                onChange={this.handleChange}
              >
                <option value="null">Select a Priority</option>
                <option value="3"> High Priority </option>
                <option value="2"> Medium Priority </option>
                <option value="1"> Low Priority </option>
              </select>
            </div>
            <div className="card-footer">
              <button
                className="btn btn-success btn-block create-todo"
                onClick={this.handleBtnClick}
              >
                Add
              </button>
            </div>
          </div>
          <div className="col-8 mt-3">  
            <div className="card">
              <p className="card-header h6">View Todos</p>
              <div className="card-block no-padding pull-right">
                <span>
                  <TodoList 
                    deleteEdit={this.deleteTodo} 
                    onUpdate={this.onUpdate}
                    todos={this.state.todos} />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
