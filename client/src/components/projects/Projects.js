import React from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";

// import Feed from './components/Feed';
import Sidebar from "../sidebar/Sidebar";
import Rightbar from "../rightbar/Rightbar";
import Feed from "../feed/Feed";
import "./Project.css";

function Projects() {
  return (
    <div className="project">
      <Header />
      <main id="main">
        <div className="breadcrumbs">
          <div className="container">
            <h2>Projects Details</h2>
          </div>
        </div>

        <div className="homeContainer">
          <Sidebar />

          <Feed />
          <Rightbar />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Projects;
