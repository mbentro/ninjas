import React, { Component } from 'react';
import Ninjas from './Ninjas';

class App extends Component {
  state = {
    ninjas : [
      { name: 'Ryu', age: 30, belt: 'Black', id: 1},
      { name: 'Ken', age: 31, belt: 'Black', id: 2},
      { name: 'Saitama', age: 26, belt: 'Yellow', id: 3}
    ]
  }

  render() {    
    return (
      <div className="App">      
        <h1>My first React app</h1>
        <p>Welcome!</p>
        <Ninjas name="Ryu" age="30" belt="Black" />
      </div>
    );
  }
}

export default App;
