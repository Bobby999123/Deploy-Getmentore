import React from 'react';
import Header from './header/Header';
import Footer from './footer/Footer';

function About() {
    return (
        <div className="about">
            <Header />
            <main id="main">
                <div className="breadcrumbs" >
                    <div className="container">
                        <h2>About Us</h2>

                    </div>
                </div>

            </main>
            <Footer />

        </div>
    )
}

export default About
