import React from "react";

class TodoForm extends React.Component {
    constructor(){
        super();
        this.state = {
            todoName:""
        };
    }

    handleChanges = event => {
        this.setState({
            todoName: event.target.value
        })
        console.log("todoName:",event.target.value)
    }

    submitEntry = event => {
        this.props.addTodo(event,this.state.todoName)
        this.setState({todoName: ""})
    };

  render() {
      return(
          <form onSubmit={this.submitEntry}>
              <input
              type="text"
              name="todo"
              value={this.state.todoName}
              onChange={this.handleChanges}
            />
            <button>Add New Todo</button>
          </form>
      )
  }
}

 export default TodoForm;