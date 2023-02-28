import React from "react";
import NavBar from "./NavBar";
import AirBnbCard from "./AirBnbCard";

function AirBnbPage() {
    return (
        <div>
        <NavBar/>
       
        <div className="container mt-5 pt-5">
  <AirBnbCard />
        </div>
        </div>
    );
    }

export default AirBnbPage;