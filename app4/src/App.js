import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cars: []
    }
  }

  getCars = () => {
    axios.get('https://joes-autos.herokuapp.com/api/vehicles')
    .then(res => {
      this.setState({
        cars: res.data
      })
    })
  }

  render() {
    const cars = this.state.cars.map( (car, index) =>{
      return <p key={index}>
        id: {car.id}<br/>
        make: {car.make}<br/>
        model: {car.model}<br/>
        year: {car.year}<br/>
        color: {car.color}<br/>
        price: ${car.price}<br/>
      </p>
    })
    return (
      <div className="App">
        <button onClick={this.getCars}>Get cars</button>
        {cars}
      </div>
    );
  }
}

export default App;
