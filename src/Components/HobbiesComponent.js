import React from 'react';
import ReactPlayer from 'react-player';
import fifa from '../images/fifa.jpg';
import  SpotifyPlayer from 'react-spotify-player';


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
                    <div className="col-12 mb-5">
                        <h4>Playing <strong className="fifa">Fifa</strong></h4>
                    </div>
                   <div className="player-wrapper col-8 col-md-8">
                      <ReactPlayer 
                       width='100%' height='65%' 
                       light={fifa} className="react-player"
                        url='https://www.youtube.com/watch?v=bUGKuaNUrKM&feature=youtu.be'
                        controls={true} />
                    </div> 
                    <div className="col-12 mb-5">
                        <h4>My <strong className="spotify">Playlists</strong></h4>
                    </div>
                    <div className="offset-1 col-11 pb-2 pb-md-0 offset-md-0 col-md-4">
                       <SpotifyPlayer uri="spotify:playlist:4i3s2KRT1qQfDIW1PkMcKL" theme="light"/>
                    </div>
                    <div className="offset-1 col-11 pb-2 pb-md-0 offset-md-0 col-md-4">
                       <SpotifyPlayer uri="spotify:playlist:37i9dQZF1DX0BcQWzuB7ZO" theme="black" />
                    </div>
                    <div className="offset-1 col-11 offset-md-0 col-md-4">
                       <SpotifyPlayer uri="spotify:playlist:06lYPASb7D72PFZBLzsPhr" theme="black"/>
                    </div>
                </div>
            </div>
        </section>

    );
}

export default Hobbies;