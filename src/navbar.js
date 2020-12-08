import fire from './congif';
import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import 'react-mdl/extra/material.css';
// import 'react-mdl/extra/material.js';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './css/navbar.css';

class NavigationBar extends React.Component {

    logout() {
        fire.auth().signOut(); 
    }
    
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">To-Do Tasks Manager</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarContents" aria-controls="navbarContents" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarContents">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="/home">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a href="/">
                                <div className="logout btn btn-block p-0">
                                    <button onClick={this.logout()} className="btn-outline-success btn">Log Out</button>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>        
        );
    }
}

export default NavigationBar;