import React,{useState} from "react";

function User() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
   
    const inputSetName = (e) => {
        setName(e.target.value);
    };

    const inputSetEmail = (e) => {
        setEmail(e.target.value);
    };

    // function that posts the admin input to the backend

    function handleSubmit(e) {
        e.preventDefault();

        const data = {
            admin: name,
            admemail: email,
        };
       
        fetch("http://localhost:9292/admin/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
            });
    }



  return (
    <form 
    className="mt-5 pt-5"
    onSubmit={handleSubmit}>
    <div >
     {/* user input name */}
        <div
        style={{
            width : "50%",
           marginLeft : "25%",
        }}
         className="form-group">
            <label htmlFor="name">Name</label>
            <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={name}
                onChange={inputSetName}
                placeholder="Enter name"
            />

            {/* user input email */}
            <label htmlFor="email">Email</label>
            <input
                type="text"
                className="form-control"
                id="email"
                value={email}
                onChange={inputSetEmail}
                name="email"
                placeholder="Enter email"
            />

            </div>
    </div>
    <button
    style={{
        width : "50%",
        marginLeft : "25%",
        marginTop : "2%",
    }}
     type="submit" className="btn btn-primary">Submit</button>
</form>
  );
}

export default User;