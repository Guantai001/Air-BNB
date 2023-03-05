import React, {useState} from "react";
import CustomPopup from "./EditCustomPopUp";



function AirBnbCard({ data}) {

    const [title, setTitle] = useState("");
    const [location, setLocation] = useState("");
    const [description, setDescription] = useState("");
    const [size, setSize] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState(""); 
  
    
    const inputTitleHandler = (e) => {
        setTitle(e.target.value);
    };
    const inputLocationHandler = (e) => {
        setLocation(e.target.value);
    };
    const inputDescriptionHandler = (e) => {
        setDescription(e.target.value);
    };
    const inputSizeHandler = (e) => {
        setSize(e.target.value);
    };
    const inputPriceHandler = (e) => {
        setPrice(e.target.value);
    };
    const inputImageHandler = (e) => {
        setImage(e.target.value);
    };

    const editHandler = (e) => {
        e.preventDefault();
        const edited = {
            title: title,
            location: location,
            description: description,
            size: size,
            price: price,
            image: image,
        }

        fetch(`http://localhost:9292/airbnbs/${data.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(edited),
        })
        .then((res) => res.json())
        .then((data) => {
            document.location.reload();
            console.log(data);
        });
    };

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

    const [visibility, setVisibility] = useState(false);

    const popupCloseHandler = () => {
      setVisibility(false);
    };
  
    return (
<>
        <CustomPopup
        onClose={popupCloseHandler}
        show = {visibility}
         >
            <form onSubmit={editHandler}>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input
                    type="text"
                    className="form-control"
                    id="title"
                    value={title}
                    onChange={inputTitleHandler}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="location">Location</label>
                    <input
                    type="text"
                    className="form-control"
                    id="location"
                    value={location}
                    onChange={inputLocationHandler}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <input
                    type="text"
                    className="form-control"
                    id="description"
                    value={description}
                    onChange={inputDescriptionHandler}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="size">Size</label>
                    <input
                    type="text"
                    className="form-control"
                    id="size"
                    value={size}
                    onChange={inputSizeHandler}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="price">Price</label>
                    <input
                    type="text"
                    className="form-control"
                    id="price"
                    value={price}
                    onChange={inputPriceHandler}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="image">Image</label>
                    <input
                    type="text"
                    className="form-control"
                    id="image"
                    value={image}
                    onChange={inputImageHandler}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </CustomPopup>

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
                         onClick={() => setVisibility(true)}
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
        </>
    );
}

export default AirBnbCard;

