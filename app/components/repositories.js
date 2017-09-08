import React, { Component } from "react"

let Repositories = (props) => {
    return (
        <li >
            <div class="row">
        <div class="col s12 m7">
          <div class="card">
            <div class="card-image">
              <img src="images/sample-1.jpg" />
              <span class="card-title">Card Title</span>
            </div>
            <div class="card-content">
              <p>I am a very simple card. I am good at containing small bits of information.
              I am convenient because I require little markup to use effectively.</p>
            </div>
            <div class="card-action">
              <a href="#">This is a link</a>
            </div>
          </div>
        </div>
      </div>
            <div className="container row">
                <div>
                    <b>Name:</b> {props.name}
                </div>
                <div>
                    {props.description}
                </div>
                <div className="row">
                    <div className="col s4">{props.language}</div>
                    <div className="col s4">
                        <i className="fa fa-star" aria-hidden="true"></i>{props.stars}
                    </div>
                    <div className="col s4">
                        <i className="fa fa-code-fork fa-lg" aria-hidden="true"></i>{props.forks}
                    </div>
                </div>
            </div>
        </li >)
}

module.exports = Repositories;




