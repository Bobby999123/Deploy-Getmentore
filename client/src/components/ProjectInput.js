import React from 'react';
import './ProjectInput.css';

// import 'maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css';
// import 'maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js';
// import 'cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js';

import Header from './header/Header';
// import Footer from './footer/Footer';


function ProjectInput() {
    return (
        <div className="login">
            <Header />
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">Add Project</h3>
                    <span className="loginDesc">Being a Mentor and teaches the world</span>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <input type="text" placeholder="Enter the project title" className="custom-input" />
                        <textarea placeholder="Enter the project description" className="custom-input" ></textarea>
                        <div className="custom-file">
                            <input type="file" className="custom-file-input" id="customFile" />
                            <label className="custom-file-label" for="customFile">Project Thumbnail / Image</label>

                        </div>

                        <select className="custom-select custom-select-sm">
                            <option selected>Domain of the project</option>
                            <option value="1">Machine Learning</option>
                            <option value="2">Web Development</option>
                            <option value="3">Marketing</option>
                        </select>

                        <select className="custom-select custom-select-sm">
                            <option selected>Level of project</option>
                            <option value="1">Beginner</option>
                            <option value="2">Intermediate</option>
                            <option value="3">Advance</option>
                        </select>

                        <input type="text" placeholder="Prerequisite" className="custom-input" />

                        <input type="text" placeholder="Skill you learn after completing" className="custom-input" />

                        <button className="loginButton">Submit</button>

                        {/* <button className="loginRegisterButton">
                            <Link to="/login">Log into Account</Link>
                        </button> */}
                    </div>
                </div>
            </div>




            {/* <Footer /> */}

        </div>
    )
}

export default ProjectInput
