import React from 'react';
import Header from './header/Header';
import Footer from './footer/Footer';


function Event() {
    return (
        <div className="event">
            <Header />
            <main id="main">
                <div className="breadcrumbs" >
                    <div className="container">
                        <h2>Events</h2>

                    </div>
                </div>

            </main>
            <Footer />


        </div>
    )
}

export default Event
