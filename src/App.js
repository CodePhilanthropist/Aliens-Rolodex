
import './App.css';s
import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ posts: users }))
  }

  render() {
    return (
      <div className="App">
       <CardList monsters={this.state.posts}/> 
       
      </div>
    );
  }
}

export default App;
