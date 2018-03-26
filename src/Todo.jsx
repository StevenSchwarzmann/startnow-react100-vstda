import React, { Component } from "react";

export class Todo extends Component {
  constructor(props) {
    super(props);

    this.state = {
        isEditing: false,
        todo: props.todo
    };

    this.handleChangePriority = this.handleChangePriority.bind(this);
    this.handleChangeText = this.handleChangeText.bind(this);
    this.handleEditClick = this.handleEditClick.bind(this);
    this.updateEdit = this.updateEdit.bind(this);
    this.deleteEdit = this.deleteEdit.bind(this);
  }

  
  //Change todo to edit screen
  handleEditClick(e) {
    this.setState({ isEditing: true });
  }

  //Change priority of current single todo
  handleChangePriority(e) {
    //this.setState({ priority: e.target.value });
    //let todo = { text: this.state.todo.text, priority: e.target.value};
    let todo = Object.assign({}, this.state.todo, { priority: e.target.value});
    this.setState({ todo });
  }

  //Change text of current single todo
  handleChangeText(e) {
    //this.setState({ text: e.target.value });
    //let todo = { text: e.target.value, priority: this.state.todo.priority };
    let todo = Object.assign({}, this.state.todo, { text: e.target.value});
    
    this.setState({ todo });
  }

  //Send Todo.state.text to App.updateSingleTodo(Todo.state.text)
  // updateEdit(e) {

  //     //Lifting state up
  //     this.props.updateSingle(this.state.text);
      
  //     //Set the state of Todo back to isEditing false
  //     this.setState({isEditing: false});
  // }
  updateEdit(e) {
    //Lifting state up
    this.props.onUpdate(this.state.todo);
    
    //Set the state of Todo back to isEditing false
    this.setState({isEditing: false});
}

deleteEdit(e) {
  this.props.deleteEdit(this.state.todo);

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
          defaultValue={this.state.todo.text}
          onChange={this.handleChangeText}
        />
      <div><strong> Priority </strong></div>
      <select
        name="priority"
        id="priority"
        className="update-todo-priority btn-block"
        placeholder="Select a Priority"
        defaultValue={this.state.todo.priority}
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
                onClick={this.deleteEdit}
              >
                <span className="glyphicon glyphicon-trash" />
              </button>
              <button
                type="button"
                className="float-right edit-todo"
                onClick={this.handleEditClick}
              >
                <span className="glyphicon glyphicon-edit" />
              </button>
            </div>
          );
    }
  }
}
