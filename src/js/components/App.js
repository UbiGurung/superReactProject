import React, { Component } from 'react';
import {Header} from './components/Header.js';
import {TextWindow} from './components/TextWindow.js';
import {ScrollBar} from './components/ScrollBar.js';
import './App.css';

class Grads{
  constructor(name, desc, team, hobby, portrait){
      this.name = name;
      this.desc = desc;
      this.team = team;
      this.hobby = hobby;
      this.portrait = portrait;
  }
}


var people = [
  new Grads('Amrit', 'Five words to describe me', 'team', 'hobby', 'http://www.petmd.com/sites/default/files/scared-kitten-shutterstock_191443322.jpg'),
  new Grads('Holly', 'Five words to describe me', 'blue', 'book', 'https://www.bluecross.org.uk/sites/default/files/assets/images/cat%20tick.jpg'),
  new Grads('Gaurav', 'Five words to describe me', 'red', 'dancing', 'http://www.catster.com/wp-content/uploads/2016/05/cats-politics-TN.jpg')
]

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: 'Amrit'
    };

    this.changeName = this.changeName.bind(this);
  }

  // changeName(newName){
  //   this.setState({
  //     name: newName
  //   })
  // }

  changeName(idx){

    const selectedPerson = people[idx]
    this.setState({
      name: selectedPerson.name
    })
  }

  render() {
  //var scrollBarPeople = people.map(x => {name: x.name, portrait: x.portrait})

    return (
      <div>
        <main style={{height: '100vh'}}>
        <Header />
          <Grid container>
            <Grid item xs={4}>
              <ScrollBar onChange={this.changeName} people={people}/>
            </Grid>
            <Grid item xs={8}>
              <TextWindow selectedPerson={this.state.name} people={people}/>
            </Grid>
          </Grid >
        </main>
      </div>
    );
  }
}

export default App;
