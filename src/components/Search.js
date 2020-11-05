import React, { Component } from 'react'
import Api from '../util/Api'

export default class Search extends Component {
  constructor() {
    super();
    this.state = {
      dogs: [],
      breeds: [],
      breed: ""
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

  getBreeds = () => {
    Api.getBreeds().then(data => {
      // console.log(data.data.message)
      this.setState({
        breeds: Object.keys(data.data.message)
      })
    }).catch(err=>console.log(err))
  }

  componentDidMount() {
    this.getBreeds()
  }

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target;

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.getDogs(this.state.breed);
    this.setState({
      breed: ""
    })
  }

  render() {
    return (
      <div className="container">
        <h1>Search By Breed</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label for="breedInput">Dog Breed</label>
            <input name="breed" type="text" list="breeds" className="form-control" id="breedInput" placeholder="" onChange={this.handleInputChange}/>
            <button className="btn btn-success">Search</button>
            <datalist id="breeds">
              {this.state.breeds.map(breed => <option value={breed}></option>)}
            </datalist>
          </div>
        </form>
        <ul className="list-group">
          {this.state.dogs.map(dog => <li className="list-group-item"><img className="img-responsive" src={dog} alt=""/></li>)}
        </ul>
      </div>
    )
  }
}
