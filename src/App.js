import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';

class App extends Component{
  constructor(){
    super();
    this.state = {
      string: "Hello Rian Rey"
    }
  }



  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            {this.state.string}
          </a>
          <button onClick={()=>{this.setState({string: "ANg binakol sir"})}}>Click me</button>
        </header>
      </div>
    );
  }
}

export default App;
