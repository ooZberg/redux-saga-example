import React from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router";
import PropTypes from "prop-types";
import {fetchTodos, completeTodo} from "../actions";

// THIS IS THE MAIN FILE THAT DOES ALL THE STUFF RIGHT NOW
// it will trigger an initial fetch of data when it is created
// and render the data


// this is a functional component,
// it can be inside another file or have its own file - but should really have it's own file..
function SimpleTodo(data) {
  let color = data.item.completed ? "green" : "white";
  return (
    <div className="todo-item" style={{backgroundColor: color}}>
      <span className="todo-number">{data.item.id}</span>
      {data.item.title}
      <br/>
      <button onClick={() => {data.dispatch(completeTodo(data.item.id))}}>Make complete</button>
    </div>
  )
}


// this is a class component, it has its own file
class Main extends React.Component {
  
  static get propTypes() {
    return {
      dispatch: PropTypes.func.isRequired,
      todos: PropTypes.array.isRequired      
    }
  }

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatch(fetchTodos());
  }

  render() {
    // loop through list of todos
    let todoList = this.props.todos.map((item) => 
      <SimpleTodo key={item.id} item={item} dispatch={this.props.dispatch}/>
    );
    return (
      <div>
        <h1>Todos</h1>
        {todoList}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  dispatch: state.dispatch,
  todos: state.todos
});

export default withRouter(connect(mapStateToProps)(Main));
