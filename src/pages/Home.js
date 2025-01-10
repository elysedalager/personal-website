import React from 'react';
import './Home.css';

function Home() {
    return (
        <>
            <div className="Home">
                <title>Elyse Dalager</title>
                <img className="background-image" src="/homebackground2.jpg" alt="Home background"/>
                <div className="home-content">
                    <img className="profile-image" src="/homeprofile.jpg" alt="Home profile"/>
                    <h1>elyse dalager</h1>
                    <p>
                        <a className="spaced" href="https://www.linkedin.com/in/elysedalager" target="_blank"
                           rel="noopener noreferrer">
                            LinkedIn
                        </a>
                        <span className="spaced">|</span>
                        <a className="spaced" href="https://github.com/elysedalager" target="_blank"
                           rel="noopener noreferrer">
                            GitHub
                        </a>
                        <span className="spaced">|</span>
                        <a className="spaced" href="/Elyse Dalager Resume.pdf" target="_blank"
                           rel="noopener noreferrer">
                            Resume
                        </a>
                    </p>
                </div>
            </div>

            <div className="personal-projects-nav">
                <img src="/homebackground.jpg" alt="Photo 1" className="photo photo1"/>
                <img src="/homebackground2.jpg" alt="Photo 2" className="photo photo2"/>
                <img src="/homebackground3.jpg" alt="Photo 3" className="photo photo3"/>
            </div>
            {/*<div className="hobbies-nav">*/}
            {/*    <img src="/homebackground.jpg" alt="Photo 1" className="photo photo1"/>*/}
            {/*    <img src="/homebackground2.jpg" alt="Photo 2" className="photo photo2"/>*/}
            {/*    <img src="/homebackground3.jpg" alt="Photo 3" className="photo photo3"/>*/}
            {/*</div>*/}
            {/*<div className="volunteer-nav">*/}
            {/*    <img src="/homebackground.jpg" alt="Photo 1" className="photo photo1"/>*/}
            {/*    <img src="/homebackground2.jpg" alt="Photo 2" className="photo photo2"/>*/}
            {/*    <img src="/homebackground3.jpg" alt="Photo 3" className="photo photo3"/>*/}
            {/*</div>*/}
        </>
    );
}

export default Home;