import React from "react";



function AirBnbCard({ data}) {
    return (
        <div className="card" style={{ width: "24rem" }}>
        
            
            <div className="card-body">
                <h3 className="card-title">Location: {data.location}</h3>
                <p className="card-text">Rating:{data.rating}</p>
                <p className="card-text">Price:{data.price}</p>
                <p className="card-text">Room Size:{data.size}</p>
                <a href="/" className="btn cardbtn ">Book</a>
            </div>
        </div>
    );
}

export default AirBnbCard;

