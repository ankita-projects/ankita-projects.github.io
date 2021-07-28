import React from "react";
import axios from "axios";
import "./App.css";
import PlayerList from "./Components/Player/PlayerList";
import PlayerForm from "./Components/Player/PlayerForm";
import PlayerSingle from "./Components/Player/PlayerSingle";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      players: [],
      currentPlayer: {},
    };
    this.updateCurrentPlayer = this.updateCurrentPlayer.bind(this);
  }

  componentDidMount() {
    const url = "http://localhost:4000/players";

    axios
      .get(url)
      .then((Response) => {
        this.setState({
          players: Response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  updateCurrentPlayer(item) {
    this.setState({
      currentPlayer: item,
    });
  }

 
  render() {
    return (
      <div className="App">
        <div className="container-fluid">
          <div className="row">
            <nav>
              <div className="nav-wrapper ">
                <a href="#" className="brand-logo">
                  Soccer Mangement
                </a>
              </div>
            </nav>
            <div className="col s12">Menu</div>
          </div>
          <div className="row">
            <div className="col s3">
              <PlayerList
                players={this.state.players}
                updateCurrentPlayer={this.updateCurrentPlayer}
              />
            </div>
            <div className="col s9">
              {this.state.players.map((item) => (
                <PlayerSingle key={item._id}player={item} />
              ))}
            </div>
          </div>
          <div className="form-container">
            <div className="row">
              <div className="col s12">
                <PlayerForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
