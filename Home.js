import React from "react";
import "./home.css";

const Home = () => {
  return (
    <div className="container">
      <div className="section">
        <div className="row">
          <div className="head"> Booking confirmation</div>
            <p> Here comes your booking confirmation.Let us know If you need any help.</p>
        </div>
        <hr />
        <div className="header"> <b>Booking Details</b>
        </div>
        <div className="book">
          <p><b>Booking</b>
          <br /> Painting</p>
        </div>
        <div className="date">
          <p><b><i class="fa fa-calendar" aria-hidden="true"></i>Date /Time</b>
          <br/>
          2022-04-20 - 08:00 </p>
        </div>
        <hr />
        <div className="rows">
          <h5>Painting and Cleaning services 
            1st
            <pre>RUT Painting services                                   100</pre>
            Discount 10%
          </h5>
        </div>
        <div className="line">
          <h5> <pre>VAT 20:-</pre>
          <pre> RUT/ROT 45:- </pre>
          <pre>Discount 10:-</pre>
          <pre> Total 100:- </pre>
          To pay 45:-</h5>
        </div>
        <hr />
        <div className="left">
          <p><b>Contact information</b></p>
          <p>John Smith Andersson</p>
          <pre>076  777 14  23</pre>
          <pre>08 21 22 58</pre>
          <p>B + 1258</p>
        </div>
        <div className="right">
          <p><b>Invoice details</b></p>
          <p>Payment terms :20 days</p>
          <p>Our Reference: Obed Samuel</p>
          <p>Your Reference: John Smith</p>
        </div>
      </div>
      <div className="contact">      
        <pre> Behover du hijalp?</pre>
        <pre>Ring eller mejla oss sa hijalp vi dig.</pre>
        <pre> 08  21  22  58</pre>
        <pre>B + 1258</pre>  
      </div>
    </div>
  );
}

export default Home;
