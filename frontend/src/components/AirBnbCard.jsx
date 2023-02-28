import React from "react";
import img from "./photoa/bnb1.jpg";


function AirBnbCard() {

    /* create a card that will contain a room */
        /* a picture price, rating, booking button, location  */
  return (
    <div className="card" style={{width: "24rem"}}>
        {/* IMAGE */}
        <img src = {img} className="card-img-top" alt="..."/>
         
        <div className="card-body">
        {/* add location, rating ,price ,bookbutton, room size */}
{/* list of 4 image */}
< div className="row">
    <div className="col-3">
        <img src = {img} className="card-img-top" alt="..."/>
    </div>
    <div className="col-3">
        <img src = {img} className="card-img-top" alt="..."/>
    </div>
    <div className="col-3">
        <img src = {img} className="card-img-top" alt="..."/>
    </div>
    <div className="col-3">
        <img src = {img} 
        onClick = {() => {
            console.log("clicked");
        }}
        className="card-img-top" 
        alt="..."/>
        </div>
    </div>
        <h5 className="card-text">Location:</h5>
        <p className="card-text">Rating:</p>
        <p className="card-text">Price:</p>
        <p className="card-text">Room Size:</p>
        <a href="#" className="btn cardbtn ">Book</a>

        </div> 
    </div>

  
  );
}

export default AirBnbCard;