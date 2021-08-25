import React from "react";
import "./Add_project.css";
import { Link } from "react-router-dom";

function Add_project({ add_project }) {

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postCenter">
          <img className="postImg" src={add_project.projectImg} alt="project" />
          <h2>{add_project.projectTitle}</h2>
          <p>
            <strong>Description:</strong>&nbsp;{add_project.projectDesc}
          </p>
          <p>
            <strong>Level:</strong>&nbsp;{add_project.projectLevel}
          </p>
          <p>
            <strong>Skills:</strong>&nbsp;{add_project.projectSkills}
          </p>
          <p>
            <strong>Mentor:</strong>&nbsp;
          </p>
          <div className="btn-container">
            <Link to={`/project/${add_project._id}`}>
              <button className="btn btn-get-started ">Enroll for Free</button>
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Add_project;
