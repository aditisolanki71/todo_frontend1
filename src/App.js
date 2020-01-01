import React, {Component}  from 'react';
import ReactDOM from 'react-dom'; 
import TodoApp from './TodoApp.js'
import './App.css';
class App extends Component {
  render() {
    return (
      <div className="App">
     <TodoApp></TodoApp>
    </div>
    );
  }
}

ReactDOM.render( 
  <App/>, 
  document.getElementById('root') 
); 
export default App;
