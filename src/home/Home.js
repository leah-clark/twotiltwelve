import React, { Component } from 'react';
import Poster from "../resources/Screen Shot 2018-06-08 at 22.19.49.png"
import './Home.css';


class Home extends Component {
    render() {
        return (
            <div className="Home">
                <img className="poster" src={Poster} alt="poster"/>
            </div>
        );
    }
}

export default Home;




