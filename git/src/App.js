import React,{Component} from "react";
import Header from "./Components/Header";
import Image from "./Components/Image";
import ShowUser from "./Components/ShowUser";
import User from "./Components/User";
import Home from "./Components/Home";
import EditUser from "./Components/EditUser";
import Register from "./Components/Register";
import "./App.css";


import {route} from "./Router";


export default class App extends Component{

	constructor (props)
	{
		super(props);
		this.id = window.localStorage.getItem('hash').split('/')[1];
        this.views ={
			showUser:<ShowUser/>,
			image:<Image/>,
			user:<User/>,
			['edituser/'+this.id]:<EditUser userId={this.id}/>,
			home:<Home/>,
			register:<Register/>,
	        
		}
	}
	
	

   componentDidMount(){
        console.log("This method is Running from App.jsx")

    }

    renderViews = () => {
        console.log(route);
        return this.views[route];
    }

    render = () =>{
        
        return (
            <React.Fragment>
                <Header/>
                {this.renderViews()}
            </React.Fragment>
        )
    }
}



