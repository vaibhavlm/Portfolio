import React, { useState } from 'react';

import { MDBCarousel, MDBCarouselItem, MDBCarouselInner, MDBCarouselCaption, MDBView } from 'mdbreact';


const Home = () => {



    return (
        <section className="site-hero">
            <div className="container">
                <div className="row align-items-center justify-content-center ">
                    <div className="col-md-10 text-center pt-5">

                        <h1>Hello, I'm  <br /> <strong className="d-block">Vaibhav Sinha</strong></h1>
                        <strong className="d-block text-white text-uppercase letter-spacing" style={{ fontWeight: "300" }}>And this is my Portfolio</strong>
                        <h3 className="py-4"><span className="rotator animated bounce"></span></h3>
                    </div>
                    <div className="col-12 ">

                    </div>
                </div>
            </div>
        </section>

    );
}

export default Home;