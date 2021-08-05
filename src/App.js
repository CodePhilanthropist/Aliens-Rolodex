
import './App.css';
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
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then(response => response.json())
      .then(users => this.setState({ posts: users }))
  }

  render() {
    return (
      <div className="App">
       <CardList posts={this.state.posts}/>
      </div>
    );
  }
}

export default App;
