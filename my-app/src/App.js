import React, { Component } from 'react';
import { connect } from 'react-redux';

import Todo from './components/todo.jsx';
import './App.css';

import { getTodoListItems } from './actions/simpleAction';

class App extends Component {

  componentWillMount() {
    // this.props.getTodoListItems();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p> Todo Items </p>
          <Todo />
        </header>
      </div>
    );
  }
}

const mapStateToProps = state => ({
    todos: state.simpleReducer.todos || [],
})

const mapDispatchToProps = dispatch => ({
    getTodoListItems: () => dispatch(getTodoListItems())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
