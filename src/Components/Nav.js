import React from 'react';
import '../StyleSheets/Nav.css';

function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark" id="navbar">
            <div className="container">
                <div className="navbar-brand" id="company_name"  href="/"><h1>Suitcase BD</h1></div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/"><i class="fas fa-home"></i> Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="/">Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="/">About Us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="/">Complaints</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="/">CUSTOMER CARE</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )

}

export default Nav;
