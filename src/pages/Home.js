import React from 'react';
import './Home.css';

function Home() {
    return (
        <div className="Home">
            <title>Elyse Dalager</title>
            <img className="background-image" src="/homebackground2.jpg" alt="Home background"/>
            <div className="HomeContent">
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
                    <a className="spaced" href="/Elyse Dalager Resume.pdf" target="_blank" rel="noopener noreferrer">
                        Resume
                    </a>
                </p>
            </div>
            {/*<div className="NavBar">*/}
            {/*    <img className="home-icon" src="/homeicon.png" alt="Home icon"/>*/}
            {/*</div>*/}
        </div>
    );
}

export default Home;