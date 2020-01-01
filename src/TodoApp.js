import React, {Component}  from 'react';
import TodoHeader from './TodoHeader.js';
import TodoContent from './TodoContent.js';
import TodoFooter from './TodoFooter.js';
import './TodoApp.css'
class TodoApp extends Component {
  render() {
    return (
      <div className="todoApp">
      <TodoHeader></TodoHeader>
      <TodoContent></TodoContent>
      <TodoFooter></TodoFooter>
    </div>
    );
  }
}

export default TodoApp;
