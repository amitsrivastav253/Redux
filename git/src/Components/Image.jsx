import React , {Component} from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
export default class Image extends Component
{
    render = ()=>
    {
        return(
            <>
            <hr/>
             <div style = {{float:"left"}} className = 'mx-5'>
            <img src = "images/a1.jpg" height = "200px"/> &nbsp;
            <img src = "images/a2.jpg" height = "200px"/>  &nbsp;
            <img src = "images/a12.jpg" height = "200px"/>  &nbsp;
            <img src = "images/a12.jpg" height = "200px"/> &nbsp;<br/>
           </div>
            </>
        );
    }
}