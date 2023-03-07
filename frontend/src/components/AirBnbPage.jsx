import NavBar from "./NavBar";
import AirBnbCard from "./AirBnbCard";

function AirBnbPage({airbnbs}) {

    return (
        <div>
        <NavBar/>
       < div className="container">
        <div className="row mt-5">
            {airbnbs.map((airbnb) => (
                <div className="col-md-4 mb-4 pb-2">
                    <AirBnbCard key={airbnb.id} airbnb={airbnb}/>
                </div>
            ))}
        </div>
        </div>
        </div>
    );
    }

export default AirBnbPage;