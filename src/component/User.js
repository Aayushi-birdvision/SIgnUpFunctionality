
import React, { Component } from 'react';
import axios from 'axios';
import "./users.css"

export default class Users extends React.Component {
  state = {
    users: []
  }
  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const users = res.data;
        console.log('users');
        this.setState({ users });
      })
  }
  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <td>ID</td>
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
        <tbody>{
          this.state.users.map(
            user => <>
              <tr key={user.id}>
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
      </table>
    )
  }
}