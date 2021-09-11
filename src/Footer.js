import React from 'react'

const Footer = () => {
    return (
        <>
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-4 col-md-4">
                            <h2>About Me</h2>
                            <ul>
                                <li>
                                    <a href="#"><i class="fas fa-phone-alt"></i>  9847310985</a>
                                </li>
                                <li>
                                    <a href="#"><i class="far fa-envelope-open"></i>  bimal10985@gmail.com</a>
                                </li>
                                <li>
                                    <a href="#"><i class="fas fa-map-marker-alt"></i>  Shantinagar New Baneshwor</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-12 col-lg-4 col-md-4">
                            <h2>Quick Links</h2>
                            <ul>
                                <li>
                                    <a href="#"><i class="fas fa-phone-alt"></i>  Home</a>
                                </li>
                                <li>
                                    <a href="#"><i class="far fa-envelope-open"></i> Services</a>
                                </li>
                                <li>
                                    <a href="#"><i class="fas fa-map-marker-alt"></i>  About Me</a>
                                </li>
                                <li>
                                    <a href="#"><i class="fas fa-map-marker-alt"></i>  Contact Me</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-12 col-lg-4 col-md-4">
                            <h2>Follow Me</h2>
                            <div className="row mt-4">
                                <div className="col-3 mx-auto">
                                <i class="fab fa-facebook-f fa-2x"></i>

                                </div>
                                <div className="col-3 mx-auto">
                                <i class="fab fa-instagram fa-2x"></i>
                                </div>
                                <div className="col-3 mx-auto">
                                <i class="fab fa-linkedin-in fa-2x"></i>
                                </div>
                                <div className="col-3 mx-auto">
                                <i class="fab fa-youtube fa-2x"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="footer-copyright mt-5">
                        <p className="main-hero-para text-center w-100">Copyright @ 2021 BimalThapa.All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
