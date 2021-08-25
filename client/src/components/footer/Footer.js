import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className="footer">
            <footer id="footer">
                <div className="footer-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 footer-contact">
                                <h3>GetMentore</h3>
                                <p>
                                    E-3/201 B Shiv Ram Park</p>
                                <p>Nangloi Delhi-110041</p>
                                <p><strong>Phone:</strong> +91 7217868819</p>
                                <p><strong>Email:</strong> info@getmentore.com


                                </p>

                            </div>
                            <div className="col-lg-2 col-md-6 footer-links">
                                <h4>Useful Links</h4>
                                <ul>
                                    <li><i className="bx bx-chevron-right"></i> <Link to="/">Home</Link></li>
                                    <li><i className="bx bx-chevron-right"></i> <Link to="/about">About Us</Link></li>
                                    <li><i className="bx bx-chevron-right"></i> <Link to="/project">Projects</Link></li>
                                    <li><i className="bx bx-chevron-right"></i> <Link to="/event">Events</Link></li>
                                    <li><i className="bx bx-chevron-right"></i> <Link to="/contact">Contact Us</Link></li>
                                </ul>
                            </div>

                            <div className="col-lg-3 col-md-6 footer-links">
                                <h4>Our Project Domain</h4>
                                <ul>
                                    <li><i className="bx bx-chevron-right"></i> <Link to="/project">Machine Learning</Link></li>
                                    <li><i className="bx bx-chevron-right"></i> <Link to="/project">Web Development</Link></li>
                                    <li><i className="bx bx-chevron-right"></i> <Link to="/project">Android Development</Link></li>
                                    <li><i className="bx bx-chevron-right"></i> <Link to="/project">Deep Learning</Link></li>
                                    <li><i className="bx bx-chevron-right"></i> <Link to="/project">Graphic Designing</Link></li>
                                </ul>
                            </div>

                            <div className="col-lg-4 col-md-6 footer-newsletter">
                                <h4>Join Our Newsletter</h4>
                                <p>To get the latest information using mail</p>
                                <form action="#" method="post">
                                    <input type="email" name="email"></input>
                                    <input type="submit" value="Subscribe"></input>

                                </form>


                            </div>




                        </div>
                    </div>

                </div>

                <div className="container d-md-flex py-4">
                    <div className="me-md-auto text-center text-md-start">
                        <div className="copyright">
                            &copy; Copyright <strong><span>GetMentore</span></strong>. All Rights Reserved
                        </div>

                    </div>
                    <div className="social-links text-center text-md-right pt-3 pt-md-0">
                        <Link to="https://twitter.com/Pankajrajput312" className="twitter" target="_blank"><i className="bx bxl-twitter"></i></Link>
                        <Link to="https://www.facebook.com/profile.php?id=100028447680070" className="facebook" target="_blank"><i className="bx bxl-facebook"></i></Link>
                        <Link to="https://www.instagram.com/pankajrajput0312/" className="instagram" target="_blank"><i className="bx bxl-instagram"></i></Link>
                        <Link to="https://secure.skype.com/portal/overview" className="google-plus" target="_blank"><i className="bx bxl-skype"></i></Link>
                        <Link to="https://www.linkedin.com/in/bobby-kumar-9448bb1ab/" className="linkedin" target="_blank"><i className="bx bxl-linkedin"></i></Link>
                    </div>
                </div>

            </footer>


        </div>
    )
}

export default Footer
