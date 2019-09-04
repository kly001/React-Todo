import React from "react";

class TodoForm extends React.Component {
    constructor(){
        super();
        this.state = {
            entry:""
        }
    }

    handleChanges = event => {
        this.setState({entry:event.target.value})
        console.log(this.state.entry)
    }

    submitEntry = event => {
        this.props.addEntry(event,this.state.entry)
        this.setState({entry: ""})
    };

  render() {
      return(
          <form onSubmit={this.submitEntry}>
              <input
              type="text"
              name="entry"
              value={this.state.entry}
              onChange={this.handleChanges}
            />
            <button>Add New Todo</button>
          </form>
      )
  }
}

 export default TodoForm;