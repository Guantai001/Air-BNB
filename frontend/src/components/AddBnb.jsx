import React,{useEffect,useState} from "react";
import NavBar from "./NavBar";

function AddBnb() {
    // be able to post this data to the bakcend
   const [airbn , setAirbn] = useState([]);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [aibnbName, setAirbnbName] = useState("");
    const [location, setLocation] = useState("");
    const [size, setSize] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState("");
  
    const [description, setDescription] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            name,
            email,
            location,
            size,
            price,
            image,
            description,
        };

        fetch("http://127.0.0.1:9292/airbnbs" , {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((data) => {
                setAirbn(data);
            });
    };

    return (
        <div>
            <NavBar />

            <div className="container mt-5 pt-5">
                <form 
                onSubmit={handleSubmit}
                className="w-50 mx-auto" >
                    <div className="form-group">

                 
                        {/* <label for="name">Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            placeholder="Enter name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    */}
                        {/* email */}
                        {/* < label for="email">Email</label>
                        <input type="email" className="form-control" id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter email" /> */}

                        {/* airbnb name*/}
                        <label for="airbnb">Airbnb</label>
                        <input type="text" className="form-control" id="airbnb"
                            value={aibnbName}
                            onChange={(e) => setAirbnbName(e.target.value)}
                         placeholder="Enter airbnb" />

                        {/* location */}
                        <label for="location">Location</label>
                        <input type="text" className="form-control" id="location"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                         placeholder="Enter location" />

                        {/* description */}
                        <label for="description">Description</label>
                        <input type="text" className="form-control" id="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="Enter description" />

                        {/* size and price */}
                        <label for="size">Size</label>
                        <input type="text" className="form-control" id="size" 
                            value={size}
                            onChange={(e) => setSize(e.target.value)}
                        placeholder="Enter size" />

                        <label for="price">Price</label>
                        <input type="text" className="form-control" id="price"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                         placeholder="Enter price" />

                        {/* 2 images*/}
                        <label for="image1">Image 1</label>
                        <input type="file" className="form-control" id="image1" 
                            value={image}
                            onChange={(e) => setImage(e.target.value)}
                        placeholder="Enter image" />

                        <button type="submit" className="btn btn-primary w-25 mt-3">Submit</button>

                    </div>
                </form>

            </div>
        </div>
    );
}





export default AddBnb;