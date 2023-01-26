import React from "react";
import project from './project';
import ProjectCard from "./ProjectCard";

function ncard(val){
    return (
      <ProjectCard 
        key={val.id}
        url={val.url}
        title={val.title}
        info={val.info}
      />
    );
}

function Projects(){
    return(
        <>
            <div id="projects" className="text-center m-2">
                <h2 className="btn-danger p-2"><strong>Projects</strong></h2>
                <div className="container row home-row d-flex justify-content-center col-10 project-card">
                  {project.map(ncard)}
                </div>
            </div>
        </>
    );
}
export default Projects;