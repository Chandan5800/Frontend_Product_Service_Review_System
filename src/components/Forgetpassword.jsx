import React from "react";
import Navbar from "./Navbar";
import Image from "./images/img5.jpg";
import "./Contact.css";
import Footer from "./Footer";

const Forgetpassword = () => {
    return (
        <div>
            <Navbar />

            <section className="vh-100">
                <div className="container-fluid h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-md-9 col-lg-6 col-xl-5">

                            <img src={Image}
                                className="img-fluid opacity-100" alt="Sample image" />
                        </div>
                        <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1 ">
                            <form >
                                <center>
                                    <h2 className="fw-bold">Forget Password</h2><br/>
                                    </center>
                                <h5>Enter your register email Id or Mobile No.</h5>
                                
                                <div class="form-floating mb-3">
                                    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                                    <label for="floatingInput">Email address</label>
                                </div>

                                <button type="button" class="btn btn-primary form-control mb-4">Reset Password</button>

                                <div class="text-center mb-3">
                                    <p>Already a member? <a href="login">Sign in</a></p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
    );
};

export default Forgetpassword; 
