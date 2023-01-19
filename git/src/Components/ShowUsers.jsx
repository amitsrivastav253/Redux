import React,{Component} from "react";

export default class ShowUsers extends Component{
	
	//mounting state
	constructor(props){
		
		console.log('This is mounting state : 1st Cycle');
		super(props);
		this.state = {
            name:"",
            email:"",
            mobile:"",
            password:"",
            users:[],
		}
		
	}
	
	componentDidMount(){
		
		console.log('This is Update state : 2nd Cycle');
		
		const url = 'http://localhost:5000/user/';
		
		/************Start of Promise Fetch Api ***************/
		
		let promise = fetch(url);
		promise.then((response)=>{
			return response.json();
		}).then((data)=>{
			//Object Json
			if(Array.isArray(data)){
				console.log('chal rha hai');
				
				this.setState({
					users:data	
				})
			}

		}).catch((error)=>{
			console.log(error);
		})
		
		/************End of Promise Fetch Api ***************/
		
		
	}
	
	componentWillMount(){		
		console.log("Unmounted is 3rd cycle");
	}
	
    render = () =>{
		console.log(this.state.users,"render");
        return (
            <div>
               <h1>User Records</h1>
			   <table border="1" rules="all">
			   <thead>
			   <tr>
					<th>#</th>
					<th>Name</th>
					<th>Email</th>
					<th>Mobile</th>
				</tr>
			   </thead>
			   <tbody>
						{this.getRecords()}
			   </tbody>
			   </table>
			   
            </div>
        )
    }
	
	getRecords = () =>{
		
		return this.state.users.map((item,index)=>{
			return (
			<tr>
				<td>{item.id}</td>
				<td>{item.name}</td>
				<td>{item.mobile}</td>
				<td>{item.email}</td>
			</tr>
			)
		})
		
		
	}
	
}