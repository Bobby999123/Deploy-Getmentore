import React from 'react';
import "./Rightbar.css";
import { Link } from 'react-router-dom';

function Rightbar() {
    return (
        <div className="rightbar">
            <div className="rightWrapper">

                <p>Level of Project</p>
                <select className="form-select" aria-label="Default select example">
                    <option >All</option>
                    <option value="ml">Beginner</option>
                    <option value="deep">Intermediate</option>
                    <option value="web">Advance</option>


                </select>
                <p>Domain of the Project</p>
                <select className="form-select" aria-label="Default select example">
                    <option >All</option>
                    <option value="ml">Machine Learning</option>
                    <option value="deep">Deep Learning</option>
                    <option value="web">Web Development</option>
                    <option value="android">Android Development</option>

                </select>


                <Link to="/project" className="btn search-button btn-get-started">Search</Link>

            </div>

        </div>
    )
}

export default Rightbar
