import React, {Fragment} from 'react'
import Button from '../Button/Button';
import PropTypes from 'prop-types'
import './Table.css'



const Table = ({list, moreGames, page}) => {
  return (
    <Fragment>
    <ul className='table'>
      {list.map(item => {
        return (
          <li key={item.id} className='table-row'>
            <div className='text'>
            <span style={{width: '45%'}}>{item.home_team.name}</span>
            <span style={{width: '45%'}}>{item.visitor_team.name}</span>
            <br />
            <span style={{width: '30%'}}>{item.home_team_score}</span>
            <span style={{width: '20%'}}>{item.status}</span>
            <span style={{width: '30%'}}>{item.visitor_team_score}</span>
            <br />
            <span style={{width: '40%'}}>{item.time}</span>
            </div>
            </li>
        )
      })}
    </ul>
    <div>
      <Button
      onClick={() => moreGames(page + 1)}
      >
        More
      </Button>
    </div>
    </Fragment>
  )
}

Table.propTypes = {

}

export default Table
