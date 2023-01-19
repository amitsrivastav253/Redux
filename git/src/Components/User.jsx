import React , {Component} from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {route,redirect} from '../Router';
export default class User extends Component
{ 

  //lifecycle : mounting state
  constructor(props){
    super(props);
    this.state = 
    {
        name:"",
        email:"",
        password:"",
        mobile:"",
        users:[],
        msg:"",
    }
  }
    
    render = ()=>
    {
        return(
           
            <>
           <h1>USER REGISTER HERE</h1>
           <hr/>
           {this.state.msg}
           <form>
                <input type  = "text" placeholder = "enter your name" value = {this.state.name}
                onChange = {(event)=>{this.setState({name:event.target.value})}}/> <br/>
                <input type  = "email" placeholder = "enter your email"  value = {this.state.email}
                onChange = {(event)=>{this.setState({email:event.target.value})}}/> <br/>
                <input type  = "password" placeholder = "enter your password"  value = {this.state.password}
                onChange = {(event)=>{this.setState({password:event.target.value})}}/> <br/>
                <input type  = "mobile" placeholder = "enter your mobile"  value = {this.state.mobile}
                onChange = {(event)=>{this.setState({mobile:event.target.value})}}/> <br/>
               
                <input type  = "button" value = "REGISTER" className = 'btn btn-outline-warning' onClick = {this.saveData}/> <br/>
           </form>
            </>
        );
    }
    saveData =() =>
    {
        console.clear();
        console.log(this.state);
        const url = "http://localhost:5000/user/";

        let newObject ={
          name:this.state.name,
          email:this.state.email,
          password:this.state.password,
          mobile:this.state.mobile,
        }

       let promise =  fetch(url, {
            headers: {
              
                "Content-type":"application/json",
            },
            method : "POST",
            body:JSON.stringify(newObject)
        });
          promise.then((response) =>{
           if(response.ok)
           {
            this.setState({
              name:"",
              email:"",
              mobile:"",
              password:"",
              msg:<span className = "success">Users created SuccessFully</span>
            });
            // let ID1 = setTimeOut(()=>{
            //   this.setState({
            //     msg:"",
            //   },5000)
            // })

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
