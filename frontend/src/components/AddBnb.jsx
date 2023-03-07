import React, { useState } from "react";
import NavBar from "./NavBar";
import Swal from 'sweetalert2';

function AddBnb() {

  const successAlert = () => {
    Swal.fire({  
        title: 'Succes!',  
        text: 'AirBnb Added Successul.',
        icon: 'success'
      }); 
}


    const [admin, setAdmin] = useState("");
    const [title, setTitle] = useState("");
    const [location, setLocation] = useState("");
    const [description, setDescription] = useState("");
    const [size, setSize] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState(""); 
    const [allData, setAllData] = useState([]);
    const [image2, setImage2] = useState("");
    const [image3, setImage3] = useState("");
   


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

    
    const submitHandler = (e) => {
        e.preventDefault();
        // if all are not filled alert and not submit
        if (title === "" || location === "" || description === "" || size === "" || price === "" || image === "" || image2 === "" || image3 === "") {
            Swal.fire({
                title: 'Error!',
                text: 'Please fill all the fields',
                icon: 'error',
                confirmButtonText: 'Ok'
            })
            return;
        }



    setAllData([...allData,
         {admin, title, location, description, size, price, image}]);
        setAdmin("");
        setTitle("");
        setLocation("");
        setDescription("");
        setSize("");
        setPrice("");
        setImage("");
        setImage2("");
        setImage3("");

       
        fetch("http://localhost:9292/airbnbs/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({admin, title, location, description, size, price, image, image2, image3}),
        })

            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                successAlert();
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
                        <label for="image1">Image</label>
                        <input 
                        type= "text"
                         className="form-control" id="image1" 
                        name="image"
                       value={image}
                        onChange={inputImageHandler}
                        placeholder="Enter image" />

                        <label for="image2">Image</label>
                        <input
                        type= "text"
                          className="form-control" id="image2"
                        name="image2"
                        value={image2}
                        onChange={inputImage2Handler}
                        placeholder="Enter image" />

                        <label for="image3">Image</label>
                        <input
                        type= "text"
                          className="form-control" id="image3"
                        name="image3"
                        value={image3}
                        onChange={inputImage3Handler}
                        placeholder="Enter image" />



                        <button type="submit"
                        style={{
                            backgroundColor: "#b95d3f",
                        }}
                         className="btn  w-25 mt-3">Submit</button>

                    </div>
                </form>

            </div>
        </div>
    );
}

export default AddBnb;