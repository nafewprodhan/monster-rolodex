import React, { Component } from 'react';
import './App.css';
import CardList from './components/Card-list/CardList.components';
import SearchBox from './components/Search-box/search';
import USERS from './data/USERS';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      monsters: USERS,
      searchField:''
    }
  } 

  // componentDidMount () {
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //     .then(res => res.json())
  //     .then(data => {
  //       console.log(data);
  //       this.setState({monsters: data})
  //     })
  //   console.log("did mount first")   
  // }



  render() {
    const { monsters, searchField } = this.state;

    const filteredMonster = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    )

    return(
      <div className="align-center">
        <h1>Monster rolodex</h1>
        <SearchBox 
          placeHolder="search monster" 
          handleChanger={
            e => {this.setState({searchField: e.target.value}, () => this.state)}
          } 
        />
        <div className="card-list">
          <CardList monsters={filteredMonster} />
        </div>
      </div>
    )
  }
}

export default App;
