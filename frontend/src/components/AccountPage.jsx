import React, { useEffect, useState } from 'react';
import NavBar from './NavBar';
import User from './User';



function AccountPage() {

  const [getBooking, setGetBooking] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/review")
      .then((res) => res.json())
      .then((data) => {
        setGetBooking(data);
        console.log(data);
      });
  }, []);

  function handleDelete(id) {
    fetch(`http://localhost:9292/reviews/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        document.location.reload();
      
        setGetBooking(getBooking.filter((booking) => booking.id !== id));
      });
  }

  return (
    <>
    <NavBar />
    <User/>
    <div className="account-page mt-5 pt-5">
      <h2 className="text-center mb-4">Account Details</h2>
 
      <div className="container mx-auto text-center row p-1 ">
            <table className="table table-striped table-hover table-bordered col-12">
                <thead>
                    <tr>
                        <th scope="col">AirBnb</th>
                        <th scope="col">User</th>
                        <th scope="col">Comments</th>
                        <th scope="col">Rating</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>

                    {getBooking.map((booking) => (
                        <tr key={booking.id}>
                            <td>{booking.airbnb.title}</td>
                            <td>{booking.user}</td>
                            <td>{booking.comment}</td>
                            <td>{booking.rating}</td>
                            <td>
                                <button
                                    className="btn btn-danger"
                                    onClick={() => handleDelete(booking.id)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            </div>

    </div>
    </>
  );
}

export default AccountPage;
