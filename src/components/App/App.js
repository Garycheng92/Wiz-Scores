import React, {Component} from 'react';
import Navbar from '../Navbar/Navbar';
import Table from '../Table/Table'
import axios from 'axios'
import './App.css';


const PATH_BASE = 'https://www.balldontlie.io/api/v1/'
const PARAM_PATH = 'games'
const PARAM_SEASONS = 'seasons[]='
const PARAM_PER_PAGE = 'per_page=8'
// const PARAM_DATE = new Date().getFullYear()
const PARAM_TEAM = 'team_ids[]=30'
const PARAM_PAGE = 'page='

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
  const {data} = result.data
  const {current_page} = result.data.meta
  const oldData = current_page != 1 ?
  this.state.result.data.data : [];
  const updatedData = [
    ...oldData,
    ...data
  ]
  this.setState({
    result: { data: {data: updatedData, meta: current_page}}
  })
  console.log(result)
}

getGames(page = 1) {
  axios.get(`${PATH_BASE}${PARAM_PATH}?${PARAM_PER_PAGE}&${PARAM_TEAM}&${PARAM_PAGE}${page}`)
  .then(result => this.setGames(result))
  .catch(error => error)
}

componentDidMount() {
  this.getGames()

}

  render() {
    const {result} = this.state
    const page = (result && result.data.meta.current_page) || 1
  return (
    <div className="App">
      <Navbar />

      {result ?
      <Table
      list={result.data.data}
      moreGames={this.getGames}
      page={page}
      />
    : null
    }
    </div>
  );
  }
}

export default App;
