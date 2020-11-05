import React, { Component } from 'react'
import Api from '../util/Api';

export default class Discover extends Component {
  constructor() {
    super()
    this.state = {
      current:""
    }
  }

  getNewDog = () => {
    Api.getRandom().then(data => {
      this.setState({
        current: data.data.message
      })
    }).catch(err=>console.log(err))
  }

  componentDidMount() {
    this.getNewDog()
  }

  render() {
    return (
      <div>
        <img src={this.state.current} alt="" onClick={this.getNewDog}/>
      </div>
    )
  }
}
