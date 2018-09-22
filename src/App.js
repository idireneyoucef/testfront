
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './Welcome';
import TodoList from './Todo/TodoList';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      etages: [], 
      isLoading: true
    }; 

  } 
  
 

  async componentDidMount() {
    this.setState({isLoading: true});
    const response = await fetch('/api/allEtage')
    const body = await response.json();
    this.setState({ etages: body, isLoading: false });
  }
   
  render() {
    const {etages, isLoading} = this.state;
    if (isLoading) {
      return <p>Loading...</p>;
    }

    return (

      <div className="App">
         <ul>
            {etages.map(etage =>
              <li key={etage.idEtage}>
                  {etage.nomEtage}
              </li>
            )}
          </ul>
        <TodoList />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>

        </header>
        <div className="App-intro">
          <Welcome name="IDIRENE Youcef" />
          <h2>JUG List</h2>

          {this.state.etages.map(etage =>
            <div key={etage.idEtage}>
              {etage.nomEtage}
            </div>
          )}
       

        </div>
      </div>
    );
  }
}

export default App;