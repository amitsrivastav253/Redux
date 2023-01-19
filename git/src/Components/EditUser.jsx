import React,{Component} from "react";
import { route,redirect } from "../Router";
import config from "../config/config.json";

export default class EditUser extends Component{

   //lifecycle : mounting state

   constructor(props){
      super(props);
      this.state = {
            name:"",
            email:"",
            mobile:"",
            password:"",
            users:[],
            msg:"",
        }
   }

    render = () =>{
        return (
            <div>
              <h1>Edit User Here</h1>
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
              
               <input type  = "button" value = "update" className = 'btn btn-outline-warning'onClick={this.updateData}/> <br/> 
              </form>
            </div>
        )
    }

    componentDidMount(){
        
       let id = this.props.userId;  
       let promise = fetch(config.LOCAL_URL+id).then((response)=>{

        if(response.ok){
            return response.json();
        }

       }).then((data)=>{

            this.setState({
                name:data.name,
                email:data.email,
                mobile:data.mobile,
                password:data.password,
            });

       }).catch((error)=>{
            console.log(error);
       });

    }

    updateData = () => {

    let id = this.props.userId;
    let updateUser = {
        name:this.state.name,
        email:this.state.email,
        password:this.state.password,
        mobile:this.state.mobile,
    }
       
       console.log(config);
       //console.log(process.env);
       let promise = fetch(config.LOCAL_URL+id,{
            headers:{
                "Content-Type":"application/json"
            },
            method:"PUT",
            body:JSON.stringify(updateUser)
       }).then((response)=>{
            if(response.ok){

                return redirect('showUser');
            }
       }).then((data)=>{

       }).catch((error)=>{

       });


    }
}