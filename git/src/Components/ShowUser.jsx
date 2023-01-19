import React , {Component} from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {route,redirect} from '../Router';
export default class ShowUser extends Component
{
   constructor(props)
{
   console.log('this is mounting state : 1st cycle');
  super(props);
    this.state = 
    {
        name:"",
        email:"",
        password:"",
        mobile:"",
        password:"",
        users:[],
        msg:"",
    };

}
    render = ()=>
    {
        return(
        
            <div>
              {this.state.msg}
            <h1>USER RECORDS</h1>
            <table border="1" rules="all">
            <thead>
            <tr>
                <th>id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Password</th>
                <th>MOBILE</th>
                <th>Edit</th>
                <th>Delete</th>
            </tr>
            </thead>
              <tbody>
                {this.getRecords()}
              </tbody>
            </table>
            </div>
            
        );
    }

    getRecords=()=>
    {
      var arr = this.state.users;
      const url = "http://localhost:5000/user/";

      let newObject =
      {
          name:this.state.name,
          email:this.state.email,
          password:this.state.password,
          mobile:this.state.mobile,
      }
      let promise =  fetch(url);
      promise.then((response) =>{
        return response.json();

      }).then((data) =>{
        
        //data object of json
        if(Array.isArray(data))
        {
            this.setState({
                users:data
            })
        }
      }).catch((error) => {
        console.log(error);
      })
      return arr.map((item,index) => {
        return (
            <tr>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.password}</td>
                <td>{item.mobile}</td>
                {/* <td><a href = {"#edit/"+item.id}>Edit</a></td>
                <td><a href = {"#delete/"+item.id}>Delete</a></td> */}
                <td><button type ="button" className = "btn btn-outline-success"
                onClick = {()=>{this.editUser(item.id)}}>Edit</button></td>
                <td>
                  <button type = "button" className = "btn btn-outline-danger"
                  onClick = {()=>{this.deleteUser(item.id,index)}}>Delete</button>
                </td>
            </tr>
        );
        
      })
    }

    deleteUser =(id,index) =>{
      if(window.confirm ("Are you sure to Delete?"))
      {
       //fetch api
       console.log(id);
      const url = "http://localhost:5000/user/"+id
       let promise =  fetch(url, {
        headers: {
          
            "Content-type":"application/json",
        },
        method : "DELETE",
        // body:JSON.stringify(newObject)
    });
      promise.then((response) =>{
       if(response.ok)
       {
        let userData = [...this.state.users];
        userData.splice(index,1);
        this.setState({
         users:userData,
          msg:<span className = "success">Users deleted SuccessFully</span>
        });
        setTimeout(()=>{
          this.setState({
            msg:""
          });
        },3000);

      return redirect('showUser');
       }

      }).then((data) =>{
        console.log(data)
      }).catch((error) => {
        console.log(error);
        this.setState({
          msg:<span className = "error">OOps! Try Again Later</span>
        });

        let ID1 = setTimeout(()=>{
          this.setState({
            msg:"",
          })
        },5000);
      })
      }
    }

     editUser=(id)=>{
      return redirect('edituser/'+id)
      console.log(id)
     }
}
