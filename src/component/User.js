import React, { useState, useEffect, Component } from 'react';
import axios from 'axios';
import "./users.css";
import MyDailog from './MyDailog';


export default class Users extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
      loading: true,
      open: false,
    }
  }
  mount = async () => {
    let res = await axios
      .get(`https://jsonplaceholder.typicode.com/users`)
    const users = res.data;
    this.setState({ users });
    this.setState({ loading: false });
  };
  componentDidMount() {
    this.mount();
  }
  myFunction(user) {

    this.setState({ open: true });
  }
  render() {
    if (this.state.loading) {
      return (<h1>"Data is Loading"</h1>)
    }
    else if (this.state.users.length === 0) {
      return (<h1>"No records to display"</h1>
      )
    }
    else if (this.state.open) {
      return (
        <MyDailog />
      )
    }
    else {
      return (
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
            {
              this.state.users.map(
                user => <>
                  <tr onClick={() => this.myFunction(user)}
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
                </>
              )
            }
          </tbody>
        </table >
      );
    }
  }
}
