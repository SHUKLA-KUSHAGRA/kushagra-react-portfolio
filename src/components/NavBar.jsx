import React from "react";
import { Link } from 'react-router-dom';
import './nav.css';

function NavBar(){
    return(
    <>
        <nav className="navbar navbar-expand-xl navbar-dark bg-dark">
            <Link style={{textDecoration: 'none'}} to="/">
                <h1 className="ms-md-5 col-2 mx-md-4 ml-2 logo">KS</h1>
            </Link>
            <div className="col-6" />
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
        <div className="collapse navbar-collapse float-right" id="navbarSupportedContent">
        <ul className="navbar-nav">
            <li className="nav-item active p-2 ml-3 links">
                <Link to="/education" className="text-decoration-none links" data-toggle="collapse" data-target=".navbar-collapse.show">Education</Link>
            </li>
            <li className="nav-item active p-2 ml-3 links">
                <Link to="/about" className="text-decoration-none links" data-toggle="collapse" data-target=".navbar-collapse.show">About</Link>
            </li>
            <li className="nav-item active p-2 ml-3 links">
                <Link to="/projects" className="text-decoration-none links" data-toggle="collapse" data-target=".navbar-collapse.show">Projects</Link>
            </li>
            <li className="nav-item dropdown pl-2 ml-3 links">
                <a className="nav-link dropdown-toggle links" href="null" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Connect
                </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="tel:+919695117353">Call Me</a>
                <a className="dropdown-item" href="mailto:shukla.kushagra.business@gmail.com">Email Me</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="https://www.linkedin.com/in/kushagra-shukla-0672b8208">LinkedIn</a>
                <a className="dropdown-item" href="https://github.com/SHUKLA-KUSHAGRA">Github</a>
                <a className="dropdown-item" href="https://api.whatsapp.com/send?phone=919695117353">Whatsapp</a>
                <a className="dropdown-item" href="https://www.instagram.com/kushagra_shukla7503/">Instagram</a>
                <a className="dropdown-item" href="https://www.facebook.com/kushagra.shukla.5099">Facebook</a>
            </div>
            </li>
        </ul>
        </div>
        </nav>
    </>
    );
}
export default NavBar;