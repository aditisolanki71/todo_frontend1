import React from 'react';
import TodoList from './TodoList.js'
import './TodoContent.css';
import TodoForm from './TodoForm.js';
class TodoContent extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
          istoggle : false,
          isedit : false,
          tasks: [],
          newTask : {
            id : null,
            title: '',
            description: '',
            isdone: false
          }
        };
        this.toggleModel = this.toggleModel.bind(this);
        this.handleChange =this.handleChange.bind(this);
        this.fetchTask = this.fetchTask.bind(this);
        this.updateNewTask = this.updateNewTask.bind(this);
        this.deleteTask = this.deleteTask.bind(this);
      }

      componentDidMount() {
        this.fetchTask();
    }



      toggleModel() {
        this.setState({ istoggle : !(this.state.istoggle) });
      }
      
      handleChange(event) {
        this.setState({ newTask : { 
          id : ( event.target.name == 'txtid'? event.target.value : this.state.newTask.id ),
          title : ( event.target.name == 'txttitle'? event.target.value : this.state.newTask.title ),
          description : ( event.target.name == 'txtdescription'? event.target.value : this.state.newTask.description )
      }});
      }

      fetchTask() {
        fetch('http://localhost:8080/tasks')
        .then(res => res.json())
        .then(data => {
            console.log('tasks ',data);
            this.setState({ tasks: data});
        })
       
    }

    updateNewTask(task) {
      this.setState({newTask : task});
      this.setState({isedit : true});
      console.log('newtask',this.state.newTask);
    }

  
    deleteTask(taskid) {
      if (window.confirm('Are you sure you wish to delete this item?')) {
        
        fetch(`http://localhost:8080/tasks/${taskid}`,{
          method :'DELETE',
        })
        .then(res => {
          this.fetchTask();
        });
      }
    }

    
    render() {
        return (
            <div className="todocontent">
                <TodoForm istoggle={this.state.istoggle} isedit={this.state.isedit} newTask={this.state.newTask} toggleModel = {this.toggleModel} handleChange = {this.handleChange} fetchTask = {this.fetchTask} ></TodoForm>
                <TodoList deleteTask = {this.deleteTask} updateNewTask = {this.updateNewTask} toggleModel = {this.toggleModel} tasks={this.state.tasks}  newTask={this.state.newTask}></TodoList>
            </div>
        );
    }
}
export default TodoContent;