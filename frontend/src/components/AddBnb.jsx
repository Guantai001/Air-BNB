import React, { useState } from "react";
import NavBar from "./NavBar";





function AddBnb() {

    const [admin, setAdmin] = useState("");
    const [title, setTitle] = useState("");
    const [location, setLocation] = useState("");
    const [description, setDescription] = useState("");
    const [size, setSize] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState(""); 
    const [allData, setAllData] = useState([]);
   


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

    
    const submitHandler = (e) => {
        e.preventDefault();

    setAllData([...allData,
         {admin, title, location, description, size, price, image}]);
        setAdmin("");
        setTitle("");
        setLocation("");
        setDescription("");
        setSize("");
        setPrice("");
        setImage("");

       
        fetch("http://localhost:9292/airbnbs/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({admin, title, location, description, size, price, image}),
        })

            .then((res) => res.json())
            .then((data) => {
                console.log(data);
            }
            )
      
    };

    console.log(allData);

  return (
    <div>
      <NavBar />
      <div 
      style={
        {
          backgroundColor: "white",

        }
      }
      className="container mt-5 pt-5">
        <form
            // onSubmit={(e) => submitHandler(e)}
            onSubmit={submitHandler}
         className="w-50 mx-auto">
          <div className="form-group">

         
            <label htmlFor="airbnb">Airbnb</label>
            <input
              type="text"
              className="form-control"
              id="airbnb"

              name="title"
                value={title}
                onChange={inputTitleHandler}
              
              placeholder="Enter airbnb"
            />

            <label htmlFor="location">Location</label>
            <input
                type="text"
                className="form-control"
                id="location"
                name="location"
                value={location}
                onChange={inputLocationHandler}
                
                placeholder="Enter location"
            />


            <label htmlFor="description">Description</label>
            <input
              type="text"
              className="form-control"
              id="description"
              name="description"
                value={description}
                onChange={inputDescriptionHandler}
              placeholder="Enter description"
            />

            <label htmlFor="size">Size</label>
            <input
              type="text"
              className="form-control"
              id="size"
              name="size"
               value={size}
                onChange={inputSizeHandler}

              placeholder="Enter size"
            />

            <label htmlFor="price">Price</label>
            <input
              type="text"
              className="form-control"
              id="price"
              name="price"
              value={price}
                onChange={inputPriceHandler}
              placeholder="Enter price"/>

                        {/* 2 images*/}
                        <label for="image1">Image 1</label>
                        <input 
                        type= "text"
                         className="form-control" id="image1" 
                        name="image"
                       value={image}
                        onChange={inputImageHandler}
                        placeholder="Enter image" />

                        <button type="submit" className="btn btn-primary w-25 mt-3">Submit</button>

                    </div>
                </form>

            </div>
        </div>
    );
}

export default AddBnb;