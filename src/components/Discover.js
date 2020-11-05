import React, { Component } from 'react'
import Api from '../util/Api';

export default class Discover extends Component {
  constructor() {
    super()
    this.state = {
      current: "",
      numPicks: 0,
      liked: false
    }
  }

  getNewDog = () => {
    Api.getRandom().then(data => {
      this.setState({
        current: data.data.message
      })
    }).catch(err => console.log(err))
  }

  componentDidMount() {
    this.getNewDog()
  }

  handleClick = (event) => {
    if(event.target.getAttribute("data-value") === "pick") {
      console.log("hji")
      const num = Math.floor(Math.random()*100);
      if(num > 80) this.setState({
        numPicks:this.state.numPicks+1,
        liked:true
      })
      else {
        this.setState({
          liked:false
        })
      }
    }
    this.getNewDog();
  }

  render() {
    return (
      <div>
        <div className="container">
          <h1 className="text-center">Make New Friends</h1>
          <h4 className="text-center">Thumbs up on any pups you'd like to meet!</h4>
          <div className="card bg-dark text-white" style={{ width: "40rem" }}>
            <img src={this.state.current} class="card-img" alt="..." />
            <div className="card-img-overlay">
              <div class="btn-group" role="group" aria-label="Basic example">
                <button className="card-btn pass" data-value="pass" style={{ opacity: 1 }} onClick={this.handleClick}>-</button>
                <button className="card-btn pick" data-value="pick" style={{ opacity: 1 }} onClick={this.handleClick}>+</button>
              </div>

            </div>
          </div>
          <h1>Made friends with {this.state.numPicks} pups so far!</h1>
          <h4>{this.state.liked ? "Yay that dog liked you too!" : ""}</h4>
        </div>
      </div>
    )
  }
}
