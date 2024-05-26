import React from 'react';
import videohm from './videos/homevd/videoHome.mp4';
import './home.css';
import { Link } from 'react-router-dom';

function Home(){
    return(
        <div className="homePage">
            <div className="header">
                <span className="event">Event</span>
                <span className="minded">Minded</span>
                <div className="navbars">
                    <Link to="/home">Accueil</Link>
                    <Link to="">Evenements</Link>
                    <Link to="/contact">Contact</Link>
                </div>
            </div>
            <div className='videoDiv'>
                <video src={videohm} autoPlay loop muted/>
            </div>
        </div>        

    )
}
export default Home;