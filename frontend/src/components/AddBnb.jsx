import React,{useEffect,useState} from "react";
import NavBar from "./NavBar";

function AddBnb() {
























    return (
        <div>
        <NavBar/>
     
     <div className="container mt-5 pt-5">
        <form>
            <div className="form-group ">
                <label for="exampleFormControlInput1">Location</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Location"/>

                <label for="exampleFormControlInput1">Price</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Price"/>

                <label for="exampleFormControlInput1">Room Size</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Room Size"/>

                <label for="exampleFormControlInput1">Description</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Description"/>

                <label for="exampleFormControlInput1">Add Button</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Add Button"/>

                <label for="exampleFormControlInput1">Image1</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Image"/>

                <label for="exampleFormControlInput1">Image2</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Image"/>

                <label for="exampleFormControlInput1">Image3</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Image"/>

                <label for="exampleFormControlInput1">Image4</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Image"/>


< button type="submit" className="btn btn-primary">Submit</button>

            </div>
</form>



        </div>
        </div>
    );
    }





export default AddBnb;