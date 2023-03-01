import React,{useEffect, useState} from "react";

const Login = () => {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

// if the user login credentials are correct, then redirect to the homepage
// if the user login credentials are incorrect, then display an error message
    const handleSubmit = (e) => {
        e.preventDefault();

        const user = { username, email, password };

        fetch("http://127.0.0.1:9292/users", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user),
        })
            .then((res) => res.json())
            .then((data) => {

                if (data.status === 200) {
                    console.log(data);
                    window.location.href = "/";
                } else {
                    console.log(data);
                    
                }
            }
            );
    };



    return (
        
        <div className="container">
            <div className="row mt-5 mt-5">
                <div className="col-md-6 offset-md-3 mt-5">
                    <div className="card mt-5">
                        <div className="card-header">
                            <h3>Login</h3>
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    
                                    <input type="text" className="form-control" id="username" placeholder="Enter username" />
                                </div>
                                <div className="form-group">
                           
                                    <input type="email" className="form-control mt-3" id="email" placeholder="Enter email" />
                                </div>
                                <div className="form-group">
                                    
                                    <input type="password" className="form-control mt-3" id="password" placeholder="Password" />
                                </div>
        <div className="text-center">
                                <button type="submit" className="btn btx text-center mt-3 px-5 mx-5 btn-sx ">Login</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
    }

export default Login;