import React, {useState} from "react";
import CustomPopup from "./EditCustomPopUp";



function AirBnbCard({airbnb}) {

    const [title, setTitle] = useState("");
    const [location, setLocation] = useState("");
    const [description, setDescription] = useState("");
    const [size, setSize] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState(""); 
    const [image2, setImage2] = useState("");
    const [image3, setImage3] = useState("");
   

    // const handlechange = (e) => {
    //     setAllData({ ...allData, [e.target.name]: e.target.value });
    // };
    
    
  
    
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

    const inputImage2Handler = (e) => {
        setImage2(e.target.value);
    };

    const inputImage3Handler = (e) => {
        setImage3(e.target.value);
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
            image2: image2,
            image3: image3,
        }

        fetch(`http://localhost:9292/airbnbs/${airbnb.id}`, {
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
        fetch(`http://localhost:9292/airbnbs/${airbnb.id}`, {
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
                    value={airbnb.title}
                    
                    onChange={inputTitleHandler}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="location">Location</label>
                    <input
                    type="text"
                    className="form-control"
                    id="location"
                    value={airbnb.location}
                    onChange={inputLocationHandler}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <input
                    type="text"
                    className="form-control"
                    id="description"
                    value={airbnb.description}
                    onChange={inputDescriptionHandler}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="size">Size</label>
                    <input
                    type="text"
                    className="form-control"
                    id="size"
                    value={airbnb.size}
                    onChange={inputSizeHandler}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="price">Price</label>
                    <input
                    type="text"
                    className="form-control"
                    id="price"
                    value={airbnb.price}
                    onChange={inputPriceHandler}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="image">Image</label>
                    <input
                    type="text"
                    className="form-control"
                    id="image"
                    value={airbnb.image}
                    onChange={inputImageHandler}
                    />

                    <label htmlFor="image2">Image2</label>
                    <input
                    type="text"
                    className="form-control"
                    id="image2"
                    value={airbnb.image2}
                    onChange={inputImage2Handler}
                    />

                    <label htmlFor="image3">Image3</label>
                    <input
                    type="text"
                    className="form-control"
                    id="image3"
                    value={airbnb.image3}
                    onChange={inputImage3Handler}
                    />
                </div>
                <button 
                style={{
                    backgroundColor: "#b95d3f",
                }
                }
                type="submit" className="btn btn-primary">Submit</button>
            </form>
        </CustomPopup>

             <div className="card mt-5 mb-2 pb-2" 
        style={{ 
            width: "27rem",
            height: "100%",
            overflow: "hidden",
            backgroundColor: "#white",
            boxShadow : "0 4px 8px 0 rgba(0,0,0,0.2)",
            transition: "0.3s",
            borderRadius: "5px",
            border: "1px solid #e6e6e6",
            color: "black",
          
             }}>
            <img 
            src={airbnb.image}
            style={{height: "260px", width: "100%"}}
            className="card-img-top"alt="..."/>
            <div className="card-body"
            style={{
                height: "200px",
                color: "black",
        }}

            >
                {/* create a row of small images */}

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
                <p className="card-text">Price:{ airbnb.price} Ksh</p>
                <p className="card-text">Room Size: {airbnb.size}</p>
            
                <div className="row mt-4">
                    <div className="col">
                        <button
                        style={
                            {backgroundColor: "#b95d3f",
                            color: "white",
                            border: "none",
                            borderRadius: "5px",
                            textAlign: "center",
                            textDecoration: "none",
                            display: "inline-block",
                            fontSize: "16px",
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
                            
                            textAlign: "center",
                            textDecoration: "none",
                            display: "inline-block",
                            fontSize: "16px",
                    
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

