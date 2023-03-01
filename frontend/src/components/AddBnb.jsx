import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";

function AddBnb() {
























    return (
        <div>
            <NavBar />

            <div className="container mt-5 pt-5">

                {/* create a form with Input with class w-50 */}
                {/* should input the user name, email, airbnb name, location, size price */}
                {/* create a button with class btn btn-primary w-50 */}
                {/* should submit the form */}

                <form className="w-50 mx-auto">
                    <div className="form-group">
                        <label for="name">Name</label>
                        <input type="text" className="form-control" id="name" placeholder="Enter name" />

                        < label for="email">Email</label>
                        <input type="email" className="form-control" id="email" placeholder="Enter email" />

                        <label for="airbnb">Airbnb</label>
                        <input type="text" className="form-control" id="airbnb" placeholder="Enter airbnb" />

                        <label for="location">Location</label>
                        <input type="text" className="form-control" id="location" placeholder="Enter location" />

                        <label for="size">Size</label>
                        <input type="text" className="form-control" id="size" placeholder="Enter size" />

                        <label for="price">Price</label>
                        <input type="text" className="form-control" id="price" placeholder="Enter price" />

                        {/* 2 images*/}
                        <label for="image1">Image 1</label>
                        <input type="file" className="form-control" id="image1" placeholder="Enter image" />

                        <label for="image2">Image 2</label>
                        <input type="file" className="form-control" id="image2" placeholder="Enter image" />
                        

                        <button type="submit" className="btn btn-primary w-25 mt-3">Submit</button>

                    </div>
                </form>



            </div>
        </div>
    );
}





export default AddBnb;