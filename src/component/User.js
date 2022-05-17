import React, {  Component } from 'react';
import axios from 'axios';
import "./users.css";
import MyDailog from './MyDailog';

export default class Users extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      loading: true,
      open: false,
    }
  }
  getData = async () => {
    let res = await axios
      .get(`https://jsonplaceholder.typicode.com/users`)
    const users = res.data;
    this.setState({ users });
    this.setState({ loading: false });
  };
  componentDidMount() {
    this.getData();
  }
  myFunction(user) {
    this.setState({ user});
    this.setState({ open: false });
  }
  showData =()=>{
    return this.state.users.map(user =>{
     return (
          <tr onClick={() => {this.myFunction(user)}}
            key={user.id}
          >
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.address.street}</td>
            <td>{user.address.suite}</td>
            <td>{user.address.city}</td>
            <td>{user.address.zipcode}</td>
            <td>{user.address.geo.lat}</td>
            <td>{user.address.geo.lng}</td>
            <td>{user.phone}</td>
            <td>{user.website}</td>
            <td>{user.company.name}</td>
            <td>{user.company.catchPhrase}</td>
            <td>{user.company.bs}</td>
          </tr>
        )
      });
    }
     render(){
    
    if (this.state.loading) {
      return (<h1>"Data is Loading"</h1>)
    }
    else if (this.state.users.length === 0) {
      return (<h1>"No records to display"</h1>
      )
    }
    else {
      return (<>
        
        <table className="table" id="my-table">
          <thead>
            <tr>
              <td><a>ID</a></td>
              <td>NAME</td>
              <td>USERNAME</td>
              <td>STREET</td>
              <td>SUITE</td>
              <td>CITY</td>
              <td>ZIPCODE</td>
              <td>LAT</td>
              <td>LNG</td>
              <td>PHONE</td>
              <td>WEBSITE</td>
              <td>NAME</td>
              <td>CATCHPHRASE</td>
              <td>BS</td>
            </tr>
          </thead>
          <tbody>
            {this.showData()}
           </tbody>      
        </table >
        <MyDailog open ={this.setState({open:true})} /> 
        </> )
    }  
  }
}
