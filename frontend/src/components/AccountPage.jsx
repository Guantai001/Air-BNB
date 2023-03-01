// import React from "react";
// import NavBar from "./NavBar";

// function AccountPage() {
//     return (
//         <div>
//         <NavBar/>
//         <h1
//         style={{textAlign:"center", marginTop:"100px"}}
//         >Account Page</h1>
//         </div>
//     );
//     }

// export default AccountPage;

import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import NavBar from './NavBar';


function AccountPage() {
  const [name, setName] = useState('John Doe');
  const [email, setEmail] = useState('john.doe@example.com');
  const [phone, setPhone] = useState('123-456-7890');
  const [address, setAddress] = useState('123 Main St');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission
  };

  return (
    <>
    <NavBar />
    <div className="account-page mt-5 pt-5">
      <h2 className="text-center mb-4">Account Details</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter name" value={name} onChange={handleNameChange} />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" value={email} onChange={handleEmailChange} />
        </Form.Group>
        <Form.Group controlId="formBasicPhone">
          <Form.Label>Phone number</Form.Label>
          <Form.Control type="tel" placeholder="Enter phone number" value={phone} onChange={handlePhoneChange} />
        </Form.Group>
        <Form.Group controlId="formBasicAddress">
          <Form.Label>Address</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="Enter address" value={address} onChange={handleAddressChange} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Save
        </Button>
      </Form>
    </div>
    </>
  );
}

export default AccountPage;
