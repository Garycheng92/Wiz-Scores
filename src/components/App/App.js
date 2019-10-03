import React, {Component} from 'react';
import Navbar from '../Navbar/Navbar';
import Table from '../Table/Table'
import axios from 'axios'

import './App.css';


const PATH_BASE = 'https://www.balldontlie.io/api/v1/'
const PARAM_PATH = 'games'
const PARAM_SEASONS = 'seasons[]='
const PARAM_PAGE = 'per_page='
// const PARAM_DATE = new Date().getFullYear()
const PARAM_TEAM = 'team_ids[]=30'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      result: null
    }
    this.setGames = this.setGames.bind(this)
    this.getGames = this.getGames.bind(this)
  }

setGames(result) {
  this.setState({result})
}

getGames(games = 8) {
  axios.get(`${PATH_BASE}${PARAM_PATH}?${PARAM_PAGE}${games}&${PARAM_TEAM}`)
  .then(result => this.setGames(result))
  .catch(error => error)
}

componentDidMount() {
  this.getGames()

}

  render() {
    const {result} = this.state

  return (
    <div className="App">
      <Navbar />

      {result ?
      <Table
      list={result.data.data}
      />
    : null
    }
    </div>
  );
  }
}

export default App;
