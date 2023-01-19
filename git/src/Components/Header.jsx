import React , {Component} from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './style/Header.css'
export default class Header extends Component
{
    render = ()=>
    {
        return(
            <>
            <div className = "row bg-success" style = {{height:"40px"}}>
             <span className = 'text-warning fs-4'>MODERN WEBSITE DESIGN COMPANY IN LUCKNOW  
             <span style = {{paddingLeft:"400px"}}>amitsrivastav253@gmail.com</span>   |
             <span style = {{paddingLeft:"15px"}}>(+91) 9208067263</span>
             </span> 
           </div>
           <div className  = "row bg-warning" style = {{height:"60px"}}>
           <ul className="nav justify-content-end">
           <img src = "p3.png" height = "60px" style = {{width:"60px",position:"absolute",left:"50px"}} />
  <li className="nav-item ">
    <a className="nav-link  fs-5 mx-5 btn btn-outline-info" aria-current="page" href="#image">Images</a>
  </li>
  <li className="nav-item">
    <a className="nav-link fs-5 mx-5 btn btn-outline-info" href="#home">Home </a>
  </li>
  <li className="nav-item">
    <a className="nav-link fs-5 mx-5 btn btn-outline-info" href="#user">User</a>
  </li>
  <li className="nav-item fs-5">
    <a className="nav-link  mx-5 btn btn-outline-info" href = "#showUser">ShowUser</a>
  </li>
  <li className="nav-item fs-5">
    <a className="nav-link  mx-5 btn btn-outline-info" href = "#register">Register</a>
  </li>
</ul>
       
           </div>
           <div>
          
           </div>
            </>
        );
    }
}