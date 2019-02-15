import React, { Component } from 'react';
import Ninjas from './Ninjas';
import AddNinja from './AddNinja';

class App extends Component {
  state = {
    ninjas : [
      { name: 'Ryu', age: 30, belt: 'Black', id: 1},
      { name: 'Ken', age: 31, belt: 'Black', id: 2},
      { name: 'Saitama', age: 19, belt: 'Yellow', id: 3}
    ]
  }

  addNinja = (ninja) => {
    //Add a key to the ninjas
    ninja.id = Math.random();
    //Spread operator [...]
    //let is used to provide a variable only in the block of code it's in
    let ninjas = [...this.state.ninjas, ninja]
    this.setState({
      ninjas: ninjas //take the state and assign the new ninjas array properties to it
    })
  }

  deleteNinja = (id) => {
//The filter() method creates an array filled with all array elements that pass a test (provided as a function).    
    let ninjas = this.state.ninjas.filter(ninja => {
      return ninja.id !== id //if ninja.id is equal to current id, return false, and it gets filtered from the array into a new array
    });
    this.setState({
      ninjas: ninjas
    })
  }

  render() {    //class based componented require render method, functional ones do not
    return (
      <div className="App">      
        <h1>My first React app</h1>
        <p>Welcome!</p>
        <Ninjas deleteNinja={this.deleteNinja} ninjas={ this.state.ninjas } />
        <AddNinja addNinja={ this.addNinja }/>
      </div>
    );
  }
}

export default App;
