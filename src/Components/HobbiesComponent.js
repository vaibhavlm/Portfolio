import React from 'react';
import ReactPlayer from 'react-player';
import fifa from '../images/fifa.jpg';
function Hobbies() {

    return (
        <section className="site-section">
            <div className="container">
                <div className="row mb-5">
                    <div className="col-12">
                        <div className="section-heading">
                            <h2>I <strong>love</strong></h2>
                        </div>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-12 mb-3">
                        <h4>Playing <strong>Fifa</strong></h4>
                    </div>
                   <div className="player-wrapper col-8 col-md-8">
                      <ReactPlayer 
                       width='100%' height='65%' 
                       light={fifa} className="react-player"
                        url='https://www.youtube.com/watch?v=bUGKuaNUrKM&feature=youtu.be' />
                    </div> 
                </div>
            </div>
        </section>

    );
}

export default Hobbies;