import React, { Component } from "react";

class App extends Component {
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
              <textarea className='create-todo-text' /> <br />
              <strong>How much of a priority is this?</strong> <br />
              <select className='create-todo-priority'>
                <option value="3"> High Priority </option>
                <option value="2"> Medium Priority </option>
                <option value="1"> Low Priority </option>
              </select>
            </div>
            <div className="card-footer">
              <button className="btn btn-success btn-block create-todo"> Add </button>
            </div>
          </div>
          <div className="col-8 mt-3">
            <div className="card">
              <p className="card-header h6">View Todos</p>
              <div className="card-block no-padding pull-right">
                <div className="alert alert-info no-margin">
                  <strong>Welcome to Very Simple Todo App!</strong>
                  <br />
                  Get started now by adding a new todo on the left.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;