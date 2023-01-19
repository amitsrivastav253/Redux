import React, {Components} from "react"


export default class ex extends Components {
constructor(props)
{
  console.log("this is  first cycle")
  super(props)
  this.state= 
  {
   name:"",
   email:"",
   password:"",
   mobile:"",
   users:[],
  }
}

componentDidMount()
{
    console.log("this is second cycle")
   const url = 'https://localhost:5000/user'

//    promise start
   let  Promise = fetch(url);
   Promise.then((Response) => {
    return Response.json()
   }).then((data) =>{
    if(Array.isarray(data))
    {
        this.setState ({users:data})
        
    }
   }).then((error) =>{
    console.log(error)
   })
}
componentWillMount()
{
    console.log("this is third cycle")
}

render=() =>{
     console.log(this.state.users,'render')
     return(
        <div>
            <table border = '1' rules = 'all'>
            <thead>
                <tr>
                    <th>id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>Mobile</th>
                </tr>
            </thead>
            <tbody>
                {this.getRecords()}
            </tbody>
            </table>
        </div>
     );    
}

getRecords=()=>{
    return this.state.users.map((item,index)  {
        return(
            <tr>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.password}</td>
              <td>{item.mobile}</td>
             </tr>
        );
    })
}
}