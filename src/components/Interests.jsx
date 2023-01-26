import React from "react";

function Interests(){
    return(
        <>
            <div id="interest" className="text-center mb-5 m-2">
                <h2 className="btn-danger p-2"><strong>Interests</strong></h2>
                <div className="row home-row">
                    <div className="col-4 col-md-2 i-box p-1">
                        <h3>Data Structures</h3>
                    </div>
                    <div className="col-4 col-md-2 i-box p-1">
                        <h3>Algorithms</h3>
                    </div>
                    <div className="col-4 col-md-2 i-box">
                        <h3>System Design</h3>
                    </div>
                    <div className="col-4 col-md-2 i-box">
                        <h3>Web Technologies</h3>
                    </div>
                    <div className="col-4 col-md-2 i-box">
                        <h3>Sotware Development</h3>
                    </div>
                    <div className="col-4 col-md-2 i-box">
                        <h3>Android</h3>
                    </div>
                    <div className="col-4 col-md-2 i-box">
                        <h3>Artificial Intelligence</h3>
                    </div>
                    <div className="col-4 col-md-2 i-box">
                        <h3>Machine Learning</h3>
                    </div>     
                </div>
            </div>
        </>
    );
}
export default Interests;