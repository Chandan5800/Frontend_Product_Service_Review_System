import React from "react";


const Footer = () => {
    return (
        <div>
            <footer className="bg-dark text-light">
                <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                    <div className="me-5 d-none d-lg-block">
                        <span>Get connected with us on social networks:</span>
                    </div>

                    <div className="text-white">
                        <a href="#" className="me-4 text-reset">
                            <i className="bi bi-facebook"></i>
                        </a>
                        <a href="#" className="me-4 text-reset">
                            <i className="bi bi-twitter"></i>
                        </a>
                        <a href="#" className="me-4 text-reset">
                            <i className="bi bi-google"></i>
                        </a>
                        <a href="#" className="me-4 text-reset">
                            <i className="bi bi-instagram"></i>
                        </a>
                        <a href="#" className="me-4 text-reset">
                            <i className="bi bi-linkedin"></i>
                        </a>
                        <a href="#" className="me-4 text-reset">
                            <i className="bi bi-github"></i>
                        </a>
                    </div>
                </section>

                <section>
                    <div className="container text-center text-md-start mt-5">
                        <div className="row mt-3">
                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4 text-light">
                                <h6 className="text-uppercase fw-bold mb-4">
                                    <i className="bi bi-gem me-3"></i>Apna Review
                                </h6>
                                <p className="text-light">
                                    Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                                    consectetur adipisicing elit.
                                </p>
                            </div>

                            <div className="productName col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 text-light text-white">
                                <h6 className=" text-uppercase fw-bold mb-4">Products</h6>
                                <p>
                                    <a href="/" className="text-reset">
                                        Electronics
                                    </a>
                                </p>
                                <p>
                                    <a href="/" className="text-reset">
                                        Mobile
                                    </a>
                                </p>
                                <p>
                                    <a href="/" className="text-reset">
                                        Fashion
                                    </a>
                                </p>
                                <p>
                                    <a href="/" className="text-reset">
                                        Beauty
                                    </a>
                                </p>
                            </div>

                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4 ">
                                <h6 className="text-uppercase fw-bold mb-4 ">Service</h6>
                                <p>
                                    <a href="/" className="text-reset">
                                        Pricing
                                    </a>
                                </p>
                                <p>
                                    <a href="/" className="text-reset">
                                        Settings
                                    </a>
                                </p>
                                <p>
                                    <a href="/" className="text-reset">
                                        Orders
                                    </a>
                                </p>
                                <p>
                                    <a href="/" className="text-reset">
                                        Help
                                    </a>
                                </p>
                            </div>

                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">Contact Us</h6>
                                <p>
                                    <i className="bi bi-house-door-fill me-2"></i>Parlakhemundi, Odisha, 761211
                                </p>
                                <p>
                                    <i className="bi bi-envelope me-3"></i>apnareview@gmail.com
                                </p>
                                <p>
                                    <i className="bi bi-telephone me-3"></i>+91 8709788098
                                </p>
                                <p>
                                    <i className="bi bi-printer me-3"></i>+91 8709788098
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="text-center p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                    &copy; 2023 Copyright:
                    <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
                        ApnaReview.com
                    </a>
                </div>
            </footer>


        </div>

    );
};

export default Footer; 
