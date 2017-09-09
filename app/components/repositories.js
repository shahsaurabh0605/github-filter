import React, { Component } from "react"

let Repositories = (props) => {
    return (
        <li className="col s4">
                <div className="">
                    <div className="card">
                        <div className="card-image">
                            <img src={props.avatar}/>
                        </div>
                        <div className="username">{props.name}</div>
                        <div className="card-content">
                            <p>{props.description}</p>
                            <div>{props.language}</div>
                        </div>
                        <div className="card-action">
                            <div className="row">
                                <div className="col s6">
                                    <i className="fa fa-star" aria-hidden="true"></i>{props.stars}
                                </div>
                                <div className="col s6">
                                    <i className="fa fa-code-fork fa-lg" aria-hidden="true"></i>{props.forks}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </li >)
}

module.exports = Repositories;




