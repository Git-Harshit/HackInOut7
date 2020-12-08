import React, { Component,useState } from 'react';
import { Button } from 'react-bootstrap';
import Login from './Login';
import { BrowserRouter as Router, Route ,Link} from "react-router-dom";
import NavigationBar from './navbar';
import 'bootstrap/dist/css/bootstrap.css';
import './css/Home.css';

function Home() {
 
  // let QuoteElement = <div class="tagline-container m-auto"><h1 className="tagline">It ain't over till it's over. With a To-Do, you can keep a check on the tasks that are still waiting to be looked upon.</h1></div>;
  
  function ToDoCard (props) {
    return (
      <div className="col-md-6 col-xl-3 p-2">
        <div className="card todo-item">
          <h4 className="todos-title">{props.todoTitle}</h4>
          <p className="todos-description">{props.details}</p>
          <p className="todos-deadline">{props.deadline}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="App"> 

        < NavigationBar />

        <div className="container-fluid Dashboard">
        </div>

    </div>
  );
}

export default Home;