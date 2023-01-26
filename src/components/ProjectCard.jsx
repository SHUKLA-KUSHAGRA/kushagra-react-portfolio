import React from "react";

function ProjectCard(props){
    return(
        <>
            <div className="col-12 col-sm-9 col-md-5  col-xl-3 card-icon p-3 m-md-3">
            <div className="card m-1 project-card-pop">
                <img className="card-img-top" src={props.url} alt="Project" height="200px" width="200px" />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">{props.info}</p>
                </div>
            </div>
            </div>
        </>
    );
}
export default ProjectCard;