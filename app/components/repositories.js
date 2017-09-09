import React, { Component } from "react"
import language_color from "../fixtures/languages"
let Repositories = (props) => {
    return (
        <li className="col s4">
            <div className="">
                <div className="card">
                    <div className="card-image">
                        <img src={props.avatar} />
                    </div>
                    <div className="username">{props.name}</div>
                    <div className="card-content">
                        <p>{props.description}</p>
                    </div>
                    <div className="card-action">
                        <div><i className="fa fa-circle" aria-hidden="true" style={{ "color": language_color[props.language] }}></i>&nbsp;{props.language}</div>
                        <div><i className="fa fa-star" aria-hidden="true"></i>{props.stars}</div>
                        <div><i className="fa fa-code-fork fa-lg" aria-hidden="true"></i>{props.forks}</div>
                    </div>
                </div>
            </div>
        </li >)
}

module.exports = Repositories;

