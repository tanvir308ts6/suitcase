import React from 'react';
import '../StyleSheets/Footer.css';

function Footer() {
    return (
        <div>
            <div className="footer-dark">
                <footer>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6 col-md-3 item">
                                <h3>Services</h3>
                                <ul>
                                    <li><a href="/">Othintic Products</a></li>
                                    <li><a href="/">24/7 Customer Support</a></li>
                                    <li><a href="/">Delivery in 3 days</a></li>
                                </ul>
                            </div>
                            <div className="col-sm-6 col-md-3 item">
                                <h3>About</h3>
                                <ul>
                                    <li><a href="/">Company</a></li>
                                    <li><a href="/">Team</a></li>
                                    <li><a href="/">Careers</a></li>
                                </ul>
                            </div>
                            <div className="col-md-6 item text">
                                <h3>Suitcase BD</h3>
                                <p>Praesent sed lobortis mi. Suspendisse vel placerat ligula. Vivamus ac sem lacus. Ut vehicula rhoncus elementum. Etiam quis tristique lectus. Aliquam in arcu eget velit pulvinar dictum vel in justo.</p>
                            </div>
                            <div className="col item social">
                            <a href="https://www.facebook.com/"><i className="icon ion-social-facebook"></i></a>
                            <a href="https://twitter.com/"><i className="icon ion-social-twitter"></i></a>
                            <a href="/"><i className="icon ion-social-snapchat"></i></a>
                            <a href="https://www.instagram.com/"><i className="icon ion-social-instagram"></i></a>
                            </div>
                        </div>
                        <p className="copyright"> © Suitcase_BD 2022</p>
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default Footer;
