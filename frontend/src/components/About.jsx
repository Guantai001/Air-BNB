import React from "react";
import NavBar from "./NavBar";
import Pic from  "./photoa/abtimg.jpg"
// create a function that comtaints the about page
// it should have  some images and text
// it should also have the services that we offer

// it should also have a contact form
// it should also have a footer

function About() {
    return (
        <div>
        <NavBar/>
        {/* // it should have  some images and text */}

        <div className="container mt-5 pt-5">

        {/* add an image below*/}
        < div className="row">
            <div className="col-12  ">
                <img  src={Pic}className="img-fluid"alt="Responsive image"/>
            </div>
        </div>

            <div className="row">
                <div className="col-12">
                    <h1 className="display-1">About Us</h1>
                    <p className=
                    "lead">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quisquam, quae. Quisquam, quae. Quisquam, quae. Quisquam, quae. 
                        Quisquam, quae. Quisquam, quae. Quisquam, quae. Quisquam, quae.
                        Quisquam, quae. Quisquam, quae. Quisquam, quae. Quisquam, quae.
                        Quisquam, quae. Quisquam, quae. Quisquam, quae. Quisquam, quae.
                        
                    </p>
                    </div>

                    <div className="col-12">
                    <h1 className="display-1">Our Services</h1>
                    <p className=
                    "lead">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quisquam, quae. Quisquam, quae. Quisquam, quae. Quisquam, quae.
                        Quisquam, quae. Quisquam, quae. Quisquam, quae. Quisquam, quae.
                        Quisquam, quae. Quisquam, quae. Quisquam, quae. Quisquam, quae.

                    </p>

                    </div>

                    <div className="col-12">
                    <h1 className="display-1">Contact Us</h1>
                    <p className=
                    "lead">Lorem ipsum dolor sit amet consectetur adipisicing elit.

                    </p>

                    </div>

                    </div>

                    </div>



               

        </div>
    );
}
    export default About;