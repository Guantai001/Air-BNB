import React from "react";
import NavBar from "./NavBar";
import Pic from  "./photoa/abtimg.jpg"


function About() {
    return (
        <div>
        <NavBar/>
        {/* // it should have  some images and text */}

        <div className="container mt-5 pt-5 text-center">

        {/* add an image below*/}
        < div className="row text-center ">
            <div className="col-12 mx-5 center-block">
                <img src={Pic} className="mx-auto d-block" alt="Responsive image"/>
            </div>
        </div>

            <div className="row">
                <div className="col-12">
                    <h1 className="display-1">About Us</h1>
                    <p className=
                    "lead">Welcome to Msafiri your new go-to for all your travel and logistics needs. We are a startup company founded by a team of travel enthusiasts who are dedicated to making your travels more convenient and enjoyable. Our passion for exploring new destinations and making the journey as memorable as the destination itself led us to create this company.

                    As a startup, we bring a fresh perspective to the travel industry, with a focus on innovation and a commitment to providing exceptional services. Our range of offerings, including multi-bus bookings, safari tours, hotel reservations, and home stays, and cater to all types of travelers.
                    
                    Our goal is to make travel accessible, affordable, and stress-free for everyone. We believe that every traveler deserves a memorable and seamless journey, and we work tirelessly to ensure that each of our clients has a unique and enjoyable experience.
                    </p>
                    </div>

                    <div className="col-12">
                    <h1 className="display-1">Our Services</h1>
                    <p className=
                    "lead">"Our vision at Msafiri is to be the leading provider of travel and logistics services, offering exceptional experiences that are accessible, affordable, and memorable for all. We envision a world where every traveler can experience the joy of exploring new destinations and making meaningful connections with people and places around the globe.

                    We believe that travel should be easy, convenient, and stress-free, and we are committed to making this a reality for our clients. By providing a one-stop solution for all your travel needs, we aim to simplify the planning process and help you focus on what really matters – the experience itself.

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