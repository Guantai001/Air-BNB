import BookingCard from "./BookingCard";
import NavBar from "./NavBar";

function Booking({airbnbs}) {

    return (
        <div>
        <NavBar/>
       < div className="container ">
        <div className="row mt-5">
            {airbnbs.map((airbnb) => (
                <div className="col-md-4 mb-4">
                    <BookingCard key= {airbnb.id} airbnb={airbnb}/>
                </div>
            ))}
        </div>
        </div>
        </div>
    );
    }


export default Booking;