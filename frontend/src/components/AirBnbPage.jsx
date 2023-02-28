import React,{useEffect,UseState} from "react";
import NavBar from "./NavBar";
import AirBnbCard from "./AirBnbCard";

function AirBnbPage() {

    // const [airbnbs, setAirbnbs] = UseState([]);

    // useEffect(() => {
    //     fetch("http://localhost:3001/airbnbs")
    //     .then((res) => res.json())
    //     .then((data) => {
    //         setAirbnbs(data);
    //     });
    // }, []);



    return (
        <div>
        <NavBar/>
       
        <div className="container mt-5 pt-5">
  <AirBnbCard  
  />
        </div>
        </div>
    );
    }

export default AirBnbPage;