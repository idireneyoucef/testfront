 
import React from 'react'; 
import logo from './logo.svg';
import './App.css'; 

class App extends React.Component {

  constructor(){
    super();
    this.state = { 
      'etages': []
    };

  }
  

  async componentDidMount() { 
    this.getItems();
  }
 getItems(){
   fetch('/api/allEtage')
   .then(results=>results.json())
   .then(parsedJSON=>console.log(parsedJSON.results)); 
   

 }
  render() {
    const {etages, isLoading} = this.state;

    if (isLoading) {
      return <p>Loading...</p>;
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">
          <h2>JUG List</h2>
          
          {etages.map((etage,i) =>
         <div key={i}>
              {etage.name}
         </div>
          )}
        </div>
      </div>
    );
  }
}

export default App;