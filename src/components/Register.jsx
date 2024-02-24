import React from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';
import Image from './images/img4.avif'
import Footer from './Footer'
import Navbar from "./Navbar";
import { useState } from 'react';
import axios from 'axios';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

export default function Register() {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [password, setPassword] = useState("");

    const [firstnameError, setFirstNameError] = useState('');
    const [lastnameError, setLastNameError] = useState('');
    const [usernameError, setUsernameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [mobileError, setMobileError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const [isUsernameAvailable, setIsUsernameAvailable] = useState(null);

    const checkUsernameAvailability = async (username) => {
        try {
            const response = await axios.get(`http://localhost:8585/api/users/checkUsername?username=${username}`);
            if (response.status === 200) {
                setIsUsernameAvailable(true);
                setUsernameError('');
            }
        } catch (error) {
            setIsUsernameAvailable(false);
            setUsernameError('Username already exists. Please choose another one.');
        }
    };

    const handleUsernameChange = (event) => {
        const newUsername = event.target.value;
        setUsername(newUsername);

        // Call the function to check username availability
        checkUsernameAvailability(newUsername);
    };



    async function save(event) {
        event.preventDefault();

        // Reset any previous error messages
        setFirstNameError('');
        setLastNameError('');
        setUsernameError('');
        setEmailError('');
        setMobileError('');
        setPasswordError('');

        // Validation for first name and last name (only alphabets)
        const nameRegex = /^[A-Za-z]+$/;
        if (!nameRegex.test(firstName)) {
            setFirstNameError('First name must contain only alphabets.');
        }
        if (!nameRegex.test(lastName)) {
            setLastNameError('Last name must contain only alphabets.');
        }

        // Validation for username (alphanumeric)
        const usernameRegex = /^[a-zA-Z0-9]+$/;
        if (!usernameRegex.test(username)) {
            setUsernameError('Username must contain only alphabets and numbers.');
        }

        // Validation for email (basic format check)
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        if (!emailRegex.test(email)) {
            setEmailError('Invalid email format.');
        }

        // Validation for mobile (10-digit number)
        if (mobile.length !== 10 || !/^\d+$/.test(mobile)) {
            setMobileError('Mobile number must consist of 10 digits.');
        }

        // Validation for password (at least one uppercase, one lowercase, one number, and one special character)
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/;
        if (!passwordRegex.test(password)) {
            setPasswordError('Password must contain at least one uppercase letter, one lowercase letter, one number, and one special symbol.');
        }

        if (
            !firstnameError &&
            !lastnameError &&
            !usernameError &&
            !emailError &&
            !mobileError &&
            !passwordError &&
            isUsernameAvailable === true
        ) {

            try {
                await axios.post("http://localhost:8585/api/users/save", {
                    firstName: firstName,
                    lastName: lastName,
                    username: username,
                    email: email,
                    mobile: mobile,
                    password: password
                });
                toast.success("User Registration Successfully 😊😊!!", { position: "top-center" });

                setFirstName("");
                setLastName("");
                setUsername("");
                setEmail("");
                setMobile("");
                setPassword("");
            } catch (err) {
                alert(err);
            }
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
                                    <h2>Register Now</h2>
                                    <br />
                                </center>
                                <div className="row">
                                    <div className="col">
                                        <div className="form-floating mb-3">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="firstName"
                                                placeholder="First name"
                                                value={firstName}
                                                onChange={(event) => {
                                                    setFirstName(event.target.value);
                                                }}

                                            />
                                            <label htmlFor="firstName">First name</label>
                                        </div>
                                        <span className="text-danger">{firstnameError}</span>
                                    </div>
                                    <div className="col">
                                        <div className="form-floating mb-3">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="lastName"
                                                placeholder="Last name"
                                                value={lastName}
                                                onChange={(event) => {
                                                    setLastName(event.target.value);
                                                }}

                                            />
                                            <label htmlFor="lastName">Last name</label>
                                        </div>
                                        <span className="text-danger">{lastnameError}</span>
                                    </div>
                                </div>
                                <div className="form-floating mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="username"
                                        placeholder="Username"
                                        value={username}
                                        onChange={handleUsernameChange}

                                    />
                                    <label htmlFor="username">Username</label>
                                    <span className="text-danger">{usernameError}</span>
                                </div>
                                <div className="form-floating mb-3">
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        placeholder="Email address"
                                        value={email}
                                        onChange={(event) => {
                                            setEmail(event.target.value);
                                        }}

                                    />
                                    <label htmlFor="email">Email address</label>
                                    <span className="text-danger">{emailError}</span>
                                </div>

                                <div className="form-floating mb-3">
                                    <input
                                        type="number"
                                        className={`form-control ${mobileError ? 'is-invalid' : ''}`}
                                        id="mobile"
                                        placeholder="Mobile Number"
                                        value={mobile}
                                        onChange={(event) => {
                                            setMobile(event.target.value);

                                        }}
                                    />
                                    <label htmlFor="mobile">Mobile Number</label>
                                    <div className="invalid-feedback">
                                        {mobileError}
                                    </div>
                                </div>

                                <div className="form-floating mb-3">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        className="form-control"
                                        id="password"
                                        placeholder="Password"
                                        value={password}
                                        onChange={(event) => {
                                            setPassword(event.target.value);
                                        }}

                                    />
                                    <label htmlFor="password">Password</label>
                                    <span className="text-danger">{passwordError}</span>
                                </div>
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


                                <button
                                    type="submit"
                                    className="btn btn-primary form-control btn-block mb-4"
                                    onClick={save}
                                >
                                    Register
                                </button>

                                <div className="text-center">
                                    <p>
                                        Already a member? <Link to="/login">Sign In</Link>
                                    </p>
                                    <p>or sign up with:</p>
                                    <button type="button" className="btn btn-primary btn-floating mx-1">
                                        <GoogleOAuthProvider>
                                            <GoogleLogin />
                                        </GoogleOAuthProvider>
                                    </button>

                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}