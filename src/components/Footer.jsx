import React from "react";
import './footer.css';

function Footer(){
    const year=new Date().getFullYear();
    return(
    <>
    <footer className="footer bg-dark">
    <div className="container p-3 pb-0">
      <a className="btn btn-outline-light btn-floating m-1" href="tel:+919695117353" role="button">
        <i className="fa fa-phone"/>
      </a>
      <a className="btn btn-outline-light btn-floating m-1" href="https://api.whatsapp.com/send?phone=919695117353" role="button">
        <i className="fa fa-whatsapp"/>
      </a>
      <a className="btn btn-outline-light btn-floating m-1" href="mailto:shukla.kushagra.business@gmail.com" role="button">
        <i className="fa fa-envelope"/>
      </a>
      <a className="btn btn-outline-light btn-floating m-1" href="https://github.com/SHUKLA-KUSHAGRA" role="button">
        <i className="fa fa-github"/>
      </a>
      <a className="btn btn-outline-light btn-floating m-1" href="https://www.linkedin.com/in/kushagra-shukla-0672b8208" role="button">
        <i className="fa fa-linkedin" />
      </a>
      <a className="btn btn-outline-light btn-floating m-1" href="https://www.instagram.com/kushagra_shukla7503/" role="button">
        <i className="fa fa-instagram"/>
      </a>
    </div>
    <h5 className="foot"><strong>© {year} </strong>Copyright : <strong>Kushagra Shukla</strong></h5>
    </footer>
    </>
    );
}
export default Footer;