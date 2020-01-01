import React from 'react';
import './TodoForm.css';
class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.addtodo = this.addtodo.bind(this);
  }


 

  addtodo() {
    console.log('isedit is',this.props.isedit);
    console.log('add newtask',this.props.newTask);
    fetch("http://localhost:8080/tasks",{
      method : this.props.isedit ? 'PUT' :'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body :   JSON.stringify ( this.props.newTask ),
    })
    .then(res => {
      this.props.toggleModel();
     this.props.fetchTask();
    });
    this.setState({isedit : false});
  }

  

    render() {
      const {isedit,istoggle,newTask,toggleModel,handleChange} = this.props;
        return (
            <div className="addbutton">
              <div style={{width: '80%'}}><button className="def-button" id="myBtn" onClick={toggleModel}><i class="fa fa-plus-circle">Add</i></button></div>
                  {/* model */ }
            <div id="myModal" className="modal" style={{ display: istoggle ? 'block' : 'none' }}>
                <div className="modal-content">
                <span onClick={toggleModel} className="close">&times;</span>
                <div style={{ textAlign: 'center'}}><p className="headertitle">Add Task</p></div>
            
                    <table align= "center">
              {isedit ? <tr>
                <td><label>Id :</label></td>
                <td><input type="text" disabled placeholder="id" name="txtid" value={newTask.id} onChange={handleChange}></input></td>
              </tr> : ''}
              <tr>
                <td><label>Title :</label></td>
                <td><input type="text" placeholder="text" name="txttitle" value={newTask.title} onChange={handleChange}></input></td>
              </tr>
              <tr>
                <td><label>Description :</label></td>
                <td><input placeholder="Description" type="text" name="txtdescription" value={newTask.description} onChange={handleChange}></input></td>
              </tr>
              <tr>
                <td colSpan="2" style={{ textAlign:'right'}}>
                <button className="formbutton cancelbutton" onClick={toggleModel}>Cancel</button>&nbsp;
                <button className="formbutton addbutton" onClick={this.addtodo}>{isedit ? 'Save' : 'Add'}</button>
              </td>
              </tr>
              
            </table>
            
            
            </div>
            </div>

            </div>
            
        );
    }
}
export default TodoForm;