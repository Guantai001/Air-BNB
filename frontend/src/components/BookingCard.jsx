import React,{useState} from "react";
import CustomPopup from "./CustomPopup";

function BookingCard({ data}){

  const [user , setUser] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState("");
//   const [info, setInfo] = useState([]);


  const inputUserHandler = (e) => {
    setUser(e.target.value);
    };

    const inputUserEmailHandler = (e) => {
        setEmail(e.target.value);
        };

    const inputCommentHandler = (e) => {
        setComment(e.target.value);
        };


    const inputRateHandler = (e) => {
                setRating(e.target.value);
                };

    const submitHandler = (e) => {
        e.preventDefault();

        const datat = {
            user: user,
            email: email,
            comment: comment,
            rating: rating,
            data: data,
        }

    //  setInfo([...info,
    //     {user, email, comment, rating ,
         
    //     }]);
        setUser("");
        setEmail("");
        setComment("");
        setRating(0);

        fetch("http://localhost:9292/reviews/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(datat),
      })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
            }
            )

    };
    const [visibility, setVisibility] = useState(false);

    const popupCloseHandler = () => {
      setVisibility(false);
    };
  

    return (

<>

<CustomPopup
onClose={popupCloseHandler}
show={visibility}
title="Booking"
>
    <p>Airbnb: {data.title}</p>
    <p>Location: {data.location}</p>
    <p>Price: {data.price}</p>
    <p>Size: {data.size}</p>
    <p>Description: {data.description}</p>
    
    <form onSubmit={submitHandler}>

    <div className="form-group mt-3">
        <label htmlFor="exampleInputEmail1">User</label>
        <input
        type="text"
        className="form-control"
        id="exampleInputname"
        value={user}
        name = "user"
        placeholder="Enter user"
        onChange={inputUserHandler}
        />
   
        <label htmlFor="exampleInputEmail">Email address</label>
        <input
        type="email"
        className="form-control"
        id="exampleInputEmail"
        value={email}
        name = "email"
        placeholder="Enter email"
        onChange={inputUserEmailHandler}
        />
  
        <label htmlFor="exampleInputComment">Your Expectations</label>
        <input
        type="text"
        className="form-control"
        id="exampleInputComment"
        value={comment}
        name = "comment"
        placeholder="Enter your expectations"
        onChange={inputCommentHandler}
        />
 
        <label htmlFor="exampleInputRate">Rate</label>
        <input
        type="number"
        className="form-control"
        id="exampleInputRate"
        value={rating}
        name = "rate"
        placeholder="Enter your rate"
        onChange={inputRateHandler}
        />
    </div>

    <button 
    style={{
        backgroundColor: "#f5a623",
        color: "white",
        border: "none",
        width: "40%",
        height: "50px",
        fontSize: "20px",
        fontWeight: "bold",
        borderRadius: "5px",
        marginTop: "20px",

    }}
    type="submit" className="btn btn-primary">
        Submit
    </button>
</form>

</CustomPopup>

<div 
className="card mt-5"
onClick={() => setVisibility(true)}
style={{
    width: "24rem",
    height: "500px",
    overflow: "hidden",
    backgroundColor: "#white",
    boxShadow : "0 4px 8px 0 rgba(0,0,0,0.2)",
}}
>
<img
    src= {data.image}
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


        <div className="col mt-4">
            <button
            style={
                {
                backgroundColor: "#b95d3f",
                color: "white",
                width: "100%",
                height: "40px",
                borderRadius: "5px",
                border: "none",
                fontSize: "15px",
                fontWeight: "bold",
                cursor: "pointer",
                outline: "none",
                marginTop: "5px",
                boxShadow : "0 5px 9px 0 rgba(0,0,0,0.2)",
                }
            }
            onClick={() => setVisibility(true)}
            >Book</button>
       </div>
            </div>
</div>

</>
     
    );
}

export default BookingCard;

