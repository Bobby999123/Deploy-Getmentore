import React from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";

function About() {
  return (
    <div className="about">
      <Header />
      <main id="main">
        <div className="breadcrumbs">
          <div className="container">
            <h2>About Us</h2>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default About;
