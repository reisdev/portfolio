import React, { Component } from 'react';
import "../css/App.css"

export default class Box extends Component{ 
    render(){
        return <div className="card" style={style.card}>
            <div className="card-body" align="center">
                <a target="_blank" href={`${this.props.link}`} className="card-title" style={style.title}>{this.props.title}</a>
                <img style={style.img} className="card-img-top App-logo" alt="Hability card" src={this.props.src}/>
            </div>
        </div>
    }
}

const style = {
    card: {
        display: "flex",
        width: "100%",
        maxWidth: "15%",
        minHeight: "240px",
        margin: "0 10px 0 10px",
        float:'left'
    },
    img: {
        paddingTop: '20px',
        width: "8vw",
        height: "auto",
        display: "block",
        marginTop: "20px",
    },
    title: {
        fontSize: 24
    }
}