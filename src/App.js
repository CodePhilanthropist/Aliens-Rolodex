
import './App.css';
import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then(response => response.json())
      .then(users => this.setState({ posts: users }))
  }

  render() {
    return (
      <div className="App">
        {
          this.state.posts.map(pic => (
            <div>
              <p key={pic.id}> {pic.title} </p>
              <img alt={pic.id} src={`https://robohash.org/${pic.id}/?set=set3&size=150x150`}></img>
            </div>
          ))
        }
      </div>
    );
  }
}

export default App;
