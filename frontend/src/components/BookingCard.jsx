import React,{useState} from "react";
import CustomPopup from "./CustomPopup";
import Swal from 'sweetalert2';
import { useParams } from 'react-router-dom';

function BookingCard({ airbnb}){

  const [user , setUser] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState("");

  const {id } = useParams();


  const successAlert = () => {
    Swal.fire({  
        title: 'Booked!',  
        text: 'Book Successul.',
        icon: 'success'
      }); 
}

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

        if (user === "" || email === "" || comment === "" || rating === 0) {
            Swal.fire({  
                title: 'Error!',  
                text: 'Please fill all the fields.',
                icon: 'error'
              }); 
            return;
        }
      const datat = {
            user: user,
            email: email,
            comment: comment,
            rating: rating,
            airbnb_id: airbnb.id,
         
           
        }

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
               successAlert();
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
    <p>Booked by: {id}</p>
    <p>Airbnb: {airbnb.title}</p>
    <p>Location: {airbnb.location}</p>
    <p>Price: {airbnb.price}</p>
    <p>Size: {airbnb.size}</p>
    <p>Description: {airbnb.description}</p>
    
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
        backgroundColor: "cdf",
        color: "white",
        border: "none",
        width: "40%",
        height: "50px",
        fontSize: "20px",
        fontWeight: "bold",
        borderRadius: "5px",
        marginTop: "20px",

    }}
    type="submit" 
    // onClick={successAlert}
    className="btn btn-primary">
        Submit
    </button>
</form>

</CustomPopup>

<div 
className="card mt-5 "
onClick={() => setVisibility(true)}
style={{
    width: "27rem",
    height: "100%",
    overflow: "hidden",
    backgroundColor: "#white",
    boxShadow : "0 4px 8px 0 rgba(0,0,0,0.2)",
}}
>
<img
    src= {airbnb.image}
    style={{height: "260px", width: "100%"}}
    className="card-img-top"alt="..."/>
    <div className="card-body"
    style={{
        height: "200px",
        color: "black",
    }}
    >

<div className="row">
                        <div className="col">
                            <img
                                src={airbnb.image}
                                style={{ height: "60px", width: "100%" }}
                                className="card-img-top" alt="..." />
                        </div>
                        <div className="col">
                            <img
                                src={airbnb.image2}
                                style={{ height: "60px", width: "100%" }}
                                className="card-img-top" alt="..." />
                        </div>
                        <div className="col">
                            <img
                                src={airbnb.image3}
                                style={{ height: "60px", width: "100%" }}
                                className="card-img-top" alt="..." />
                        </div>
                    </div>

        <p className="card-text">Title: {airbnb.title}</p>
        <p className="card-text">Location: {airbnb.location}</p>
        <p className="card-text">Description: {airbnb.description}</p>
        <p className="card-text">Price: { airbnb.price} Ksh</p>
        <p className="card-text">Room Size: {airbnb.size}</p>


        <div className="col mt-1 mb-2">
            <button
            class = "btnx"
            style={
                {
                backgroundColor: "#b95d3f",
                color: "white",
                width: "100%",
                textAlign: "center",
                height: "40px",
                borderRadius: "5px",
                border: "none",
                fontSize: "15px",
                fontWeight: "bold",
                cursor: "pointer",
                outline: "none",
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

