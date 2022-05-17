import React from 'react';

const Details = (props) => {
  return (
    <div className="formDetails">
      <h1>Successfully Signed In</h1>
      <p>FirstName:{props.formValues.name}</p>
      <p>Email:{props.formValues.email}</p>
      <p>Password:{props.formValues.password}</p>
      <p>Confirm Password:{props.formValues.cnfrmPass}</p>
    </div>
  );
}
export default Details;
