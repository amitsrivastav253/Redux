import React , {Component} from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
export default class Home extends Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date()};
    }
  
    componentDidMount() {
    }
  
    componentWillUnmount() {
    }
  
    render() {
      return (
        <div>
          <h1>THIS IS HOME JS</h1>
          <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        </div>
      );
    }
  }