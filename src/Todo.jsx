import React, { Component } from "react";

export class Todo extends Component {
  constructor(props) {
    super(props);

    this.state = {
        isEditing: false
    };

    this.handleChangePriority = this.handleChangePriority.bind(this);
    this.handleChangeText = this.handleChangeText.bind(this);
    this.handleEditClick = this.handleEditClick.bind(this);
    this.updateEdit = this.updateEdit.bind(this);
  
  }



  
  //Change todo to edit screen
  handleEditClick(e) {
    this.setState({ isEditing: true });
  }

  //Change priority of current single todo
  handleChangePriority(e) {
    this.setState({ priority: e.target.value });
  }

  //Change text of current single todo
  handleChangeText(e) {
    this.setState({ text: e.target.value });
  }

  //Send Todo.state.text to App.updateSingleTodo(Todo.state.text)
  updateEdit(e) {

      //Lifting state up
      this.props.updateSingle(this.state.text);
      
      //Set the state of Todo back to isEditing false
      this.setState({isEditing: false});
  }


  render() {

    //Find priority and add correct class
    let cssClassName = "list-group-item list-group-item-";
    switch (this.props.todo.priority) {
      case "1":
        cssClassName += "success";
        break;

      case "2":
        cssClassName += "warning";
        break;

      case "3":
        cssClassName += "danger";
        break;
    };

    //if editing
    if (this.state.isEditing) {
      return (
      <div className={cssClassName}>
        <strong> Description </strong>
        <textarea
          className="update-todo-text"
          defaultValue={this.props.todo.text}
          onChange={this.handleChangeText}
        />
      <div><strong> Priority </strong></div>
      <select
        name="priority"
        id="priority"
        className="update-todo-priority btn-block"
        placeholder="Select a Priority"
        defaultValue={this.props.todo.priority}
        onChange={this.handleChangePriority}
      >
        <option value="null">Select a Priority</option>
        <option value="3"> High Priority </option>
        <option value="2"> Medium Priority </option>
        <option value="1"> Low Priority </option>
      </select>
      <button onClick={this.updateEdit} > Save </button>
    </div>)
    }
    
    //If normal and not editing
    else {
          return (
            <div className={cssClassName}>
              {this.props.todo.text}
              <button
                type="button"
                className="float-right"
                onClick={this.handleDeleteClick}
              >
                <span className="glyphicon glyphicon-trash" />
              </button>
              <button
                type="button"
                className="float-right"
                onClick={this.handleEditClick}
              >
                <span className="glyphicon glyphicon-edit" />
              </button>
            </div>
          );
    }
  }
}
