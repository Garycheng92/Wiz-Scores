import React from 'react'
import PropTypes from 'prop-types'
import './Navbar.css'

const Navbar = props => {
  return (
    <div className='nav-bar'>
      <h1>Score Tracker</h1>
      <i className="fas fa-info-circle icon"></i>
    </div>
  )
}

Navbar.propTypes = {

}

export default Navbar
