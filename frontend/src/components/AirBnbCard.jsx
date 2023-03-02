import React from "react";



function AirBnbCard({ data}) {
    return (

        <div className="card mt-5" style={{ width: "24rem" }}>
            <img
        src={data.image}
        className="card-img-top"
        alt="..."
      />
            
            <div className="card-body">
                
                <h5 className="card-title">Name: {data.name}</h5>
                <h5 className="card-title">Location: {data.location}</h5>
                <p className="card-text">Description:{data.description}</p>
                <p className="card-text">Price:{data.price}</p>
                <p className="card-text">Room Size:{data.size}</p>
                <a href="/" className="btn cardbtn ">Book</a>
            </div>
        </div>
    );
}

export default AirBnbCard;

