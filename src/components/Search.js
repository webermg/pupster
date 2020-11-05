import React, { Component } from 'react'
import Api from '../util/Api'

export default class Search extends Component {
  constructor() {
    super();
    this.state = {
      dogs: []
    }
  }

  getDogs = breed => {
    Api.getBreed(breed).then(data => {
      // console.log(data)
      this.setState({
        dogs: data.data.message
      })
    }).catch(err=>console.log(err))
  }

  componentDidMount() {
    this.getDogs("beagle")
  }

  render() {
    return (
      <div>
        {this.state.dogs.map(dog => <img src={dog} alt=""/>)}
      </div>
    )
  }
}
