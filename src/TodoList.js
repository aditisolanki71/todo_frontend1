import React from 'react';
import './TodoList.css';

class TodoList extends React.Component {

    constructor(props) {
        super(props);
        //this.edittodo = this.edittodo.bind(this);
        this.state ={ 
        editTask : {
            title: '',
            description: '',
            isdone: false
          }
        }
      
    }

    edittodo(taskid)
    {
        console.log('task id',taskid);
        var taskedit = this.props.tasks.filter( (task) => task.id == taskid );
        console.log(taskedit[0]);
        
        this.props.toggleModel();
        this.props.updateNewTask(taskedit[0]);
   }

   getDataForTable(tasks) {
    let columns=[];
    if(tasks[0] !== undefined) {
        console.log('if');
        console.log(tasks[0]);
        const colum = Object.keys(tasks[0]);
        console.log(colum);
        
        colum.map( colname => {
            let c =   {
                label: colname,
                field: colname,
                sort: 'asc',
                width: 150
              };

              columns.push(c);
        } )

        console.log(columns);
    }
//     const rows=null;
//    
//     console.log('ta',tasks);
//     const task = tasks[0] || {};
//     console.log(tasks[0]);
//     let colum = {};
//    colum =Object.keys(task);
//    console.log('col',colum);
   }


    render() {
        const {tasks,deleteTask} =this.props;
        //   this.getDataForTable(tasks);
        // console.log('tasks are',tasks);
        return (
            <div className="table">
                <table>
                    <thead>
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th colspan="2">Action</th>
                    </tr>
                    </thead>
                { 
                tasks.map((task) => <tbody>
                    <tr>
                        <td>{task.id}</td>
                        <td>{task.title}</td>
                        <td>{task.description}</td>
                        
                        {/* <td>{task.isdone}</td>
                         */}
                            {/* <button onClick={edittodo(task.id)}>edit</button>&nbsp;
                  <button onClick={this.deletetodo.bind(this,task.id)}>Delete</button></td> */}
                  <td><button onClick={this.edittodo.bind(this, task.id)} className="def-button"><i class="fa fa-edit">edit</i></button>&nbsp;<button onClick={deleteTask.bind(this, task.id)} className="def-button"><i class="fa fa-trash">delete</i></button></td>
                    </tr>
                    </tbody>
                    )}
                </table>
            </div>
        );
    }
}
export default TodoList;