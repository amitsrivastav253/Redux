import React , {Component} from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './style/Register.css'
export default class Register extends Component
{
    render = ()=>
    {
        return(
            <>
<div className = "container-fluid outer bg-mycolor">
<div className = "row">
<div className = "col-sm-6 a bg-info">
<div className = "row"><span className= "fs-2 text-center">Online <span className = "fs-2 text-warning">Training</span></span>
<span className = "text-center text-warning fs-2" style ={{transform:"translateY(-35px)"}}>___________</span>
<span className = "fs-5 text-center" style ={{transform:"translateY(-30px)"}} >free Register yourself for the upcoming from Home organize by Techpile</span>
<div className = "col-sm-11 b bg-white m-auto">
<div className = "input-group">
<span className = "input-group-text bg-secondary mt-3"><i className="fa-solid fa-user"></i></span>
<input type = "text" placeholder = "Name of Student" required className = "form-control mt-3"/>
</div>
<div className = "input-group">
<span className = "input-group-text bg-secondary mt-3"><i className="fa-solid fa-phone-volume"></i></span>
<input type = "number" placeholder = "Mobile NO." required className = "form-control mt-3"/>
</div>
<div className = "input-group">
<span className = "input-group-text bg-secondary mt-3"><i className="fa-solid fa-envelope"></i></span>
<input type = "email" placeholder = "Email" required className = "form-control mt-3"/>
</div>
<div className = "input-group">
<span className = "input-group-text bg-secondary mt-3"><i className="fa-brands fa-discourse"></i></span>
<select name = "Apply For" className = "form-control mt-3"> 
<option>Apply For</option><option>Summer Training</option><option>Winter Training</option><option>Apprenticeship Training</option><option>Summer Training</option></select>
</div>
<div className = "input-group">
<span className = "input-group-text bg-secondary mt-3"><i className="fa-solid fa-signal"></i></span>
<select name = "Training Mode" className = "form-control mt-3"> 
<option>Training Mode</option><option>Online Mode</option><option>Offline Mode</option></select>
</div>
<div className = "input-group">
<span className = "input-group-text bg-secondary mt-3"><i className="fa-solid fa-graduation-cap"></i></span>
<input type = "text" placeholder = "College Name" required className = "form-control mt-3"/>
</div>
<div className = "input-group">
<span className = "input-group-text bg-secondary mt-3"><i className="fa-solid fa-box-archive"></i></span>
<select name = "Training Session" className = "form-control mt-3"> 
<option>Training session</option><option>first</option><option>Second</option></select>
</div>
<div className = "input-group">
<span className = "input-group-text bg-secondary mt-3"><i className="fa-solid fa-grip-lines"></i></span>
<select name = "Select Course" className = "form-control mt-3"> 
<option>Select Course</option><option>Python</option><option>Bootstrap</option><option>C++</option><option>HTML & CSS</option></select>
</div>
<div className = "input-group">
<span className = "input-group-text bg-secondary mt-3"><i className="fa-solid fa-box-archive"></i></span>
<select name = "First" className = "form-control mt-3"> 
<option>First</option><option>Second</option><option>Third</option></select>
</div><br/>
<a href = "#" className = "btn btn-outline-warning rounded-pill form-control">Register Now</a>
</div>
</div>
</div>
</div>
</div>



            </>
        );
    }
}