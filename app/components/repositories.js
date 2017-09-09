import React, { Component } from "react"

let Repositories = (props) => {
    return (
        <li >
            <div className="container row">
                <div className="col s4">
                    <div className="card">
                        <div className="card-image">
                            <img src={props.avatar}/>
                        </div>
                        <div className="card-content">
                            <p>I am a very simple card. .</p>
                        </div>
                        <div className="card-action">
                            <a href="#">This is a link</a>
                        </div>
                    </div>
                </div>
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




