import React from 'react';

import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";


const todos = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  },
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  
  constructor() {
    super();
    this.state = {
      todos
    }
  }

  addTodo = (event, entry) => {
    event.preventDefault();
    const adding = this.state.todos.filter( 
      todo => todo.name===entry
      )
      if (adding.length===0){
        const newTodo = {
          name:entry,
          id: Date.now(),
          completed: false
        }
        this.setState({
          todos: [...this.state.todos, newTodo]
        })
      }
  }

  clearCompleted = event => {
    event.preventDefault();
    this.setState ({
      todos:this.state.filter(todo => !todo.completed)
    })
  }
  render() {
    // console.log(this.state)
    return (
      <div>
        <h1>Karen's TodoList</h1>
       <TodoList 
        todos={this.state.todos}
       />
       <TodoForm />
        
      </div>
    );
  }
}

export default App;
