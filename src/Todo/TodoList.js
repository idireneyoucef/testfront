
import React, { Component } from 'react';
import '../App.css';

class TodoList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userInput: '',
      items: []
    };

  }
  ajouterItem(event) {
    //pour ne pas recharger la page vue que c'est un formulair en ne veux pas envoyé les infos
    event.preventDefault();
    this.setState({
      userInput:'',
      items: [...this.state.items,this.state.userInput]
    }); 
  }

  SupprimerItems(event) {
    //pour ne pas recharger la page vue que c'est un formulair en ne veux pas envoyé les infos
    event.preventDefault();
    const array = this.state.items;
    const index =array.indexOf(event.target.value);
    array.splice(index,1);
    this.setState({
     items :array
    }); 
  }

  renderTodos(){
    return this.state.items.map((item)=>{ 
    return ( <div key={item}>
                {item}|<button onClick={this.SupprimerItems.bind(this)}>x</button>
           </div>
           );
    } );
  }

  onChange(event) {
    this.setState({
      userInput: event.target.value
        });


  }
  render() {
 

    return (
      <div className="App">

        <form>
          <input type="text"
            value={this.state.userInput}
            placeholder=" Renseigner un item"
            onChange={this.onChange.bind(this)}
          />
          <button onClick={this.ajouterItem.bind(this)}> Ajouter</button>

          <div className="App">
         {this.renderTodos()}
          </div>
        </form>
      </div>
    );
  }
}

export default TodoList;