import React,{useState, useEffect} from "react";
import NavBar from "./NavBar";
import AirBnbCard from "./AirBnbCard";

function AirBnbPage() {

    // create a fetch and pass data to the card

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("http://127.0.0.1:9292/airbnbs")
            .then((res) => res.json())
            .then((data) => {
                setData(data);
            });
    }, []);
    

    return (
        <div>
        <NavBar/>
       {/* get data to from the api and map and then pass it to the card */}
       < div className="container">
        <div className="row mt-5">
            {data.map((data) => (
                <div className="col-md-4">
                    <AirBnbCard data={data} />
                    </div>
            ))}
        </div>
        </div>
        </div>
    );
    }

export default AirBnbPage;