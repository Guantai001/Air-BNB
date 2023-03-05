import React from "react";



function AirBnbCard({ data}) {

    // create a delete function
    const deleteAirBnb = (e) => {
        // fetch the delete route
        fetch(`http://localhost:9292/airbnbs/${data.id}`, {
            method: "DELETE",
        })
        .then((res) => res.json())
        .then((data) => {
            document.location.reload();
            console.log(data);
        });
    };

    // create an edit function
    const editAirBnb = (e) => {
        // fetch the edit route
        fetch(`http://localhost:9292/airbnbs/${data.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({title: "new title"}),
        })
        .then((res) => res.json())
        .then((data) => {
            document.location.reload();
            console.log(data);
        });
    };





    return (

        <div className="card mt-5" 
        style={{ 
            width: "24rem",
            height: "500px",
            overflow: "hidden",
            backgroundColor: "#white",
            boxShadow : "0 4px 8px 0 rgba(0,0,0,0.2)",
 
             }}>
            <img 
            src={data.image}
            style={{height: "270px", width: "100%"}}
            className="card-img-top"alt="..."/>
            <div className="card-body"
            style={{
                height: "200px",
                color: "black",
        }}

            >
                <p className="card-text">Title: {data.title}</p>
                <p className="card-text">Location: {data.location}</p>
                <p className="card-text">Description:{data.description}</p>
                <p className="card-text">Price:{data.price}</p>
                <p className="card-text">Room Size:{data.size}</p>
                {/* create a row of 2 buttons for edit and delete button */}
                <div className="row mt-4">
                    <div className="col">
                        <button
                        onClick={editAirBnb}
                        style={
                            {backgroundColor: "#b95d3f",
                            color: "white",
                            border: "none",
                            borderRadius: "5px",
                            padding: "10px 20px",
                            textAlign: "center",
                            textDecoration: "none",
                            display: "inline-block",
                            fontSize: "16px",
                            margin: "4px 2px",
                            cursor: "pointer",
                            boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
                            }
                        }

                         className="btn btn-primary">Edit</button>   
                        </div>
                        <div className="col">
                        <button 

                        style={
                            {backgroundColor: "#b95d3f",
                            color: "white",
                            border: "none",
                            borderRadius: "5px",
                            padding: "10px 20px",
                            textAlign: "center",
                            textDecoration: "none",
                            display: "inline-block",
                            fontSize: "16px",
                            margin: "4px 2px",
                            cursor: "pointer",
                            boxShadow: "0 5px 9px 0 rgba(0,0,0,0.2)",
                            }
                        }

                        onClick={deleteAirBnb}
                        className="btn btn-danger mx-5">Delete</button>
                        </div>
                     </div>
            </div>
        </div>
    );
}

export default AirBnbCard;

