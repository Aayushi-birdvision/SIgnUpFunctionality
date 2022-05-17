import React, { Component } from 'react'
import "./signup.css"
const Forms = (props) => {
  return (<>
    <div className="sections">
      <form onSubmit={props.handleSubmit}>
        <h1>Sign up</h1>
        <div className="divider"></div>
        <div className="form-1">
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder='Enter your name'
              value={props.formValues.name}
              onChange={props.handleChange}
            />
            <p className="errors">
              {props.formErrors.name}
            </p>
          </div>
          <div className="field">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder='Enter your email'
              value={props.formValues.email}
              onChange={props.handleChange}
            />
            <p className="errors">
              {props.formErrors.email}
            </p>
          </div>

          <div className="field">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder='Enter your password'
              value={props.formValues.password}
              onChange={props.handleChange}
            />
            <p className="errors">
              {props.formErrors.password}</p>
          </div>
          <div className="field">
            <label>Confirm password</label>
            <input
              type="password"
              name="cnfrmPass" placeholder='Confirm your password'
              value={props.formValues.cnfrmPass}
              onChange={props.handleChange}
            />
            <p className="errors">
              {props.formErrors.cnfrmPass}
            </p>
          </div>
          <button className="btn-blue" type="submit">Sign up</button>
        </div>
      </form>
    </div>
  </>)
}

export default Forms;
