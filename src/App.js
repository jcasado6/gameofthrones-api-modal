import React, { Component } from "react";
import "./App.css";
import Breakingbad from "./Breakingbad";
import Nav from "./Nav";

class App extends Component {
  constructor() {
    super();
    this.state = {
      breakingbad: []
    };
  }

  componentDidMount() {
    fetch("https://www.breakingbadapi.com/api/characters")
      .then(res => res.json())
      .then(res => {
        console.log(res);
        this.setState({ breakingbad: res });
        console.log(this.state.breakingbad);
      });
  }

  render() {
    let bbActor = this.state.breakingbad;
    const character = bbActor.map(character => {
      return (
        <Breakingbad
          key={character.name}
          name={character.name}
          birthday={character.birthday}
          occupation={character.status}
          img={character.img}
          status={character.status}
          nickname={character.nickname}
          portrayed={character.portrayed}
        />
      );
    });

    return (
      <div>
        <div>
          <Nav />
        </div>
        <div className="App">{character}</div>
      </div>
    );
  }
}

export default App;
