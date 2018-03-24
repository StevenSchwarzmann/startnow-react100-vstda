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
    this.updateSingleTodo = this.updateSingleTodo.bind(this);
  }

  handleBtnClick(e) {
    if (this.state.priority === "null" || this.state.text === "") {
      alert("Please enter a valid priority and task todo");
    } else {
      var newTodo = {
        text: this.state.text,
        priority: this.state.priority
      };

      var allTodos = [...this.state.todos];
      allTodos.push(newTodo);

      this.setState({ todos: allTodos, text: '', priority: "null" });
    }
  }

  updateSingleTodo(textFromSingleTodo) {

    //actually update that todo
    var allTodos = [...this.state.todos];

    //test to make sure we can update the first todos text from the single component
    allTodos[0].text = textFromSingleTodo;

   //update App.state.todos to newTodos 
    this.setState({ todos: allTodos });
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
                className="create-todo-priority btn-block"
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
                {" "}
                Add{" "}
              </button>
            </div>
          </div>
          <div className="col-8 mt-3">
            <div className="card">
              <p className="card-header h6">View Todos</p>
              <div className="card-block no-padding pull-right">
                <span>
                  <TodoList updateTodo={this.updateSingleTodo} todos={this.state.todos} />
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
