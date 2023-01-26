import React from "react";

function Education(){
    return(
        <>
            <div id="education" className="text-center m-2">
                <h2 className="btn-danger p-2"><strong>Education</strong></h2>
                <div className="container col-10">
                    <div className="row study text-center">
                        <div className="edu-info">
                            <h3 className="text-center">B.Tech</h3>
                            <p>[2022-2024]</p>
                            <p>CGPA : 8.52</p>
                            <h5 className="text-center"><em>Computer Science & Engineering</em></h5>                                
                            <h4> Madan Mohan Malaviya University Of Technology , Gorakhpur</h4>
                        </div>
                        <div className="col-sm-3 m-3">
                            <img className="img-fluid" src="http://www.mmmut.ac.in/images/logo3.jpg" alt="mmmut-logo" height="80vh" width="180vw"/>
                        </div>
                    </div>
                </div>
                <div className="container col-10">
                    <div className="row study text-center">
                        <div className="edu-info">
                            <h3 className="text-center">Intermediate</h3>
                            <p>[2020]</p>
                            <p>Percentage : 94.33%</p>
                            <h5 className="text-center"><em>CBSE Board [PCM]</em></h5>                                
                            <h4> Shri Guru Ram Rai Public School , Dehradun</h4>
                        </div>
                        <div className="col-sm-3 m-3">
                            <img className="img-fluid" src="http://www.sgrrbindal.com/images/logo.jpg" alt="sgrr-logo" height="100vh" width="100vw"/>
                        </div>
                    </div>
                </div>
                <div className="container col-10">
                    <div className="row study text-center">
                        <div className="edu-info">
                            <h3 className="text-center">High School</h3>
                            <p>[2018]</p>
                            <p>Percentage : 87.50%</p>
                            <h5 className="text-center"><em>ICSE Board</em></h5>                                
                            <h4> The Montessorie School , Dehradun</h4>
                        </div>
                        <div className="col-sm-3 m-3">
                            <img className="img-fluid" src="https://themontessoridehradun.com/assets/img/logo.png" alt="montessorie-logo" height="100vh" width="170vw"/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Education;
