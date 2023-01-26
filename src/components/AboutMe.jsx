import React from "react";

function AboutMe(){
    return(
        <>
            <div id="about" className="text-center m-2">
                <h2 className="btn-danger p-2"><strong>About Me</strong></h2>
                <div className="container col-10 about">
                    <div className="row p-2">
                    <div className="col-lg-4" data-aos="fade-right">
                        <img src="https://media-exp1.licdn.com/dms/image/C4E03AQEUlRo9LwpNYA/profile-displayphoto-shrink_800_800/0/1642228588768?e=2147483647&v=beta&t=BkT7lsmhLJQnpmG_a8WvPBuPClhCw7FIy-KENc4XDjQ" className="img-fluid" alt="profile-pic" height="300px" width="300px" />
                    </div>
                    <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
                        <p className="py-5">Focused and enthusiastic developer with a keen interest in software development. By comprehensive exposure
                        to the underlying concepts and applying them vividly to various projects, my love for the domain came into being.
                        I am a passionate individual who thrives to build and apply algorithms to solve real-world industry problems.
                        </p>
                    <div className="row about-end">
                    <div className="col-lg-6 p-0">
                        <ul className=" list-unstyled">
                            <li><i className="fa fa-arrow-circle-right"></i> <strong>Birthday:</strong> 27 March 2003</li>
                            <li><i className="fa fa-arrow-circle-right"></i> <strong>Phone:</strong> +91 9695117353</li>
                        </ul>
                    </div>
                    <div className="col-lg-6 p-0">
                        <ul className="list-unstyled">
                            <li><i className="fa fa-arrow-circle-right"></i> <strong>City:</strong> Gorakhpur , India</li>
                            <li><i className="fa fa-arrow-circle-right"></i> <strong>Email:</strong> shukla.kushagra.business@gmail.com</li>
                        </ul>
                    </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </>
    );
}
export default AboutMe;