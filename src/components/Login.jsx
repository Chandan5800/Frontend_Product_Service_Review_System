import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {  toast } from 'react-toastify';
import axios from "axios";
import Navbar from "./Navbar";
import Image from "./images/img3.avif";
import "./Contact.css";
import Footer from "./Footer";

import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';


const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false); // Added state for password visibility
    const navigate = useNavigate();

    async function login(event) {
        event.preventDefault();
        try {
            await axios.post("http://localhost:8585/api/users/login", {
                username: username,
                password: password,
            }).then((res) => {
                console.log(res.data);
                if (res.data.message === "Username not exist") {
                    // alert("Username not exist");
                    toast.warning("Username not exist",{position:"top-center"});
                    
                } else if (res.data.message === "Login Success") {
                    // alert("Login Successfully");
                    toast.success("Login Successfully 😊😊!!",{position:"top-center"});
                    
                    navigate("/home");
                } 
                else {
                    // alert("Incorrect Username and Password. Please try Again...");
                    toast.error("Incorrect Username and Password. Please try Again...",{position:"top-center"});
                    setUsername("");
                    setPassword("");
                    
                }
            }, (fail) => {
                console.error(fail);
            });
        } catch (err) {
            alert(err);
        }
    }

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div>
            <Navbar />
            <section className="vh-100">
                <div className="container-fluid h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-md-9 col-lg-6 col-xl-5">
                            <img src={Image} className="img-fluid" alt="Sample image" />
                        </div>
                        <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                            <form>
                                <center>
                                    <h2>Login Here</h2>
                                    <br />
                                </center>
                                <div className="form-floating mb-3">
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="floatingInput"
                                        placeholder="name@example.com"
                                        value={username}
                                        onChange={(event) => {
                                            setUsername(event.target.value);
                                        }}
                                    />
                                    <label htmlFor="floatingInput">User Id</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input
                                        type={showPassword ? "text" : "password"} // Toggle the password input type
                                        className="form-control"
                                        id="floatingPassword"
                                        placeholder="Password"
                                        value={password}
                                        onChange={(event) => {
                                            setPassword(event.target.value);
                                        }}
                                    />
                                    <label htmlFor="floatingPassword">Password</label>
                                </div>
                                <div className="row mb-4">
                                    <div className="col d-flex justify-content-center">
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="form2Example34"
                                                onChange={toggleShowPassword}
                                                checked={showPassword}
                                            />
                                            <label className="form-check-label" htmlFor="form2Example34">
                                                Show Password
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <Link to="/forget">Forgot password?</Link>
                                    </div>
                                </div>
                                <button type="button" className="btn btn-primary form-control mb-4" onClick={login}>
                                    Sign in
                                </button>
                                <div className="text-center mb-3">
                                    <p>
                                        Not a member? <Link to="/register">Register</Link>
                                    </p>
                                    <p>or sign up with:</p>
                                    <button type="button" className="btn btn-primary btn-floating mx-1">
                <GoogleOAuthProvider>
                    <GoogleLogin />
                </GoogleOAuthProvider>
            </button>
                                    {/* <button type="button" className="btn btn-primary btn-floating mx-1">
                                        <i className="bi bi-github"></i>
                                    </button>
                                    <button type="button" className="btn btn-primary btn-floating mx-1">
                                        <i className="bi bi-twitter"></i>
                                    </button>
                                    <button type="button" className="btn btn-primary btn-floating mx-1">
                                        <i className="bi bi-instagram"></i>
                                    </button> */}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default Login;
