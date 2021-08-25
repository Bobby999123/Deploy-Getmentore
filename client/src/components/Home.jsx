import React from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import { Link } from "react-router-dom";
// import axios from "axios";

function Home() {
  // const getData = async () => {
  //   const { data } = await axios.get("/api/users/60f7abe9f7a93a0eb8378418");
  //   console.log(data);
  // };

  // getData();

  return (
    <div className="home">
      <Header />
      <section
        id="hero"
        className="d-flex justify-content-center align-items-center"
      >
        <div className="container position-relative">
          <h1>GetMentore</h1>
          <h2>Lets crack tech company now</h2>
          <Link to="/login">
            <span className="btn-get-started">Get Started</span>
          </Link>
        </div>
      </section>

      <main id="main">
        <section id="about" className="about">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 order-1 order-lg-2">
                <img
                  src="data:image/png;base64,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"
                  className="img-fluid"
                  alt=""
                ></img>
              </div>
              <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
                <h3>About</h3>
                <p className="fst-italic">
                  We have a team in which person having lot of experience to
                  mentor different students to different projects.
                </p>
                <ul>
                  <li>
                    <i className="bi bi-check-circle"></i> Ullamco laboris nisi
                    ut aliquip ex ea commodo consequat.
                  </li>
                  <li>
                    <i className="bi bi-check-circle"></i> Duis aute irure dolor
                    in reprehenderit in voluptate velit.
                  </li>
                  <li>
                    <i className="bi bi-check-circle"></i> Ullamco laboris nisi
                    ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate trideta storacalaperda mastiro
                    dolore eu fugiat nulla pariatur.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="counts" className="counts section-bg">
          <div className="container">
            <div className="row counters">
              <div className="col-lg-3 col-6 text-center">
                <span
                  data-purecounter-start="0"
                  data-purecounter-end="569"
                  data-purecounter-duration="1"
                  className="purecounter"
                ></span>
                <p>Mentee</p>
              </div>

              <div className="col-lg-3 col-6 text-center">
                <span
                  data-purecounter-start="0"
                  data-purecounter-end="7"
                  data-purecounter-duration="1"
                  className="purecounter"
                ></span>
                <p>Projects</p>
              </div>

              <div className="col-lg-3 col-6 text-center">
                <span
                  data-purecounter-start="0"
                  data-purecounter-end="23"
                  data-purecounter-duration="1"
                  className="purecounter"
                ></span>
                <p>Events</p>
              </div>

              <div className="col-lg-3 col-6 text-center">
                <span
                  data-purecounter-start="0"
                  data-purecounter-end="4"
                  data-purecounter-duration="1"
                  className="purecounter"
                ></span>
                <p>Trainers</p>
              </div>
            </div>
          </div>
        </section>

        <section id="why-us" className="why-us">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 d-flex align-items-stretch">
                <div className="content">
                  <h3>Why Choose GetMentore?</h3>
                  <p>
                    We have a team in which person having lot of expience to
                    mentor different students to different projects.
                  </p>
                  <div className="text-center">
                    <Link to="/about">
                      <span className="more-btn">
                        Learn More <i className="bx bx-chevron-right"></i>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-8 d-flex align-items-stretch">
                <div className="icon-boxes d-flex flex-column justify-content-center">
                  <div className="row">
                    <div className="col-xl-4 d-flex align-items-stretch">
                      <div className="icon-box mt-4 mt-xl-0">
                        <i className="bx bx-receipt"></i>
                        <h4>Corporis voluptates sit</h4>
                        <p>
                          Consequuntur sunt aut quasi enim aliquam quae harum
                          pariatur laboris nisi ut aliquip
                        </p>
                      </div>
                    </div>
                    <div className="col-xl-4 d-flex align-items-stretch">
                      <div className="icon-box mt-4 mt-xl-0">
                        <i className="bx bx-cube-alt"></i>
                        <h4>Ullamco laboris ladore pan</h4>
                        <p>
                          Excepteur sint occaecat cupidatat non proident, sunt
                          in culpa qui officia deserunt
                        </p>
                      </div>
                    </div>
                    <div className="col-xl-4 d-flex align-items-stretch">
                      <div className="icon-box mt-4 mt-xl-0">
                        <i className="bx bx-images"></i>
                        <h4>Labore consequatur</h4>
                        <p>
                          Aut suscipit aut cum nemo deleniti aut omnis.
                          Doloribus ut maiores omnis facere
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="popular-courses" className="courses">
          <div className="container">
            <div className="section-title">
              <h2>Projects</h2>
              <p>Our Popular Projects</p>
            </div>

            <div className="row">
              <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                <div className="course-item">
                  <img
                    src="https://seo-trench.com/wp-content/uploads/2019/11/12-Websites-You-Should-Check-Out-to-Learn-Web-Development-Fast.png"
                    className="img-fluid"
                    alt="..."
                  ></img>
                  <div className="course-content">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <h4>Intermediate Level</h4>
                      <p className="price">Free</p>
                    </div>

                    <h3>
                      <Link to="/project">Music Generation</Link>
                    </h3>
                    <p>
                      Et architecto provident deleniti facere repellat nobis
                      iste. Id facere quia quae dolores dolorem tempore.
                    </p>
                    <div className="trainer d-flex justify-content-between align-items-center">
                      <div className="trainer-profile d-flex align-items-center">
                        <img
                          src="https://avatars.githubusercontent.com/u/55504328?v=4"
                          className="img-fluid"
                          alt=""
                        ></img>
                        <span>Pankaj</span>
                      </div>
                      <div className="trainer-rank d-flex align-items-center">
                        <i className="bx bx-user">78</i>

                        <i className="bx bx-heart">60</i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                <div className="course-item">
                  <img
                    src="https://seo-trench.com/wp-content/uploads/2019/11/12-Websites-You-Should-Check-Out-to-Learn-Web-Development-Fast.png"
                    className="img-fluid"
                    alt="..."
                  ></img>
                  <div className="course-content">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <h4>Intermediate Level</h4>
                      <p className="price">Free</p>
                    </div>

                    <h3>
                      <Link to="/project">Music Generation</Link>
                    </h3>
                    <p>
                      Et architecto provident deleniti facere repellat nobis
                      iste. Id facere quia quae dolores dolorem tempore.
                    </p>
                    <div className="trainer d-flex justify-content-between align-items-center">
                      <div className="trainer-profile d-flex align-items-center">
                        <img
                          src="https://avatars.githubusercontent.com/u/55504328?v=4"
                          className="img-fluid"
                          alt=""
                        ></img>
                        <span>Pankaj</span>
                      </div>
                      <div className="trainer-rank d-flex align-items-center">
                        <i className="bx bx-user">78</i>

                        <i className="bx bx-heart">60</i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                <div className="course-item">
                  <img
                    src="https://seo-trench.com/wp-content/uploads/2019/11/12-Websites-You-Should-Check-Out-to-Learn-Web-Development-Fast.png"
                    className="img-fluid"
                    alt="..."
                  ></img>
                  <div className="course-content">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <h4>Intermediate Level</h4>
                      <p className="price">Free</p>
                    </div>

                    <h3>
                      <Link to="/project">Music Generation</Link>
                    </h3>
                    <p>
                      Et architecto provident deleniti facere repellat nobis
                      iste. Id facere quia quae dolores dolorem tempore.
                    </p>
                    <div className="trainer d-flex justify-content-between align-items-center">
                      <div className="trainer-profile d-flex align-items-center">
                        <img
                          src="https://avatars.githubusercontent.com/u/55504328?v=4"
                          className="img-fluid"
                          alt=""
                        ></img>
                        <span>Pankaj</span>
                      </div>
                      <div className="trainer-rank d-flex align-items-center">
                        <i className="bx bx-user">78</i>

                        <i className="bx bx-heart">60</i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Home;
