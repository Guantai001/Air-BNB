import React,{useState, useEffect} from "react";
import NavBar from "./NavBar";
import AirBnbCard from "./AirBnbCard";

function AirBnbPage() {

    // create a fetch and pass data to the card

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:9292/")
            .then((res) => res.json())
            .then((data) => {
                setData(data);
            }
            );
    }, []);



    return (
        <div>
        <NavBar/>
       {/* get data to from the api and map and then pass it to the card */}
       < div className="container">
        <div className="row mt-5">
            {data.map((data) => (
                <div className="col-md-4 mb-4 pb-2">
                    <AirBnbCard key= {data.id}data={data} />
                    </div>
            ))}
        </div>
        </div>
        </div>
    );
    }

export default AirBnbPage;