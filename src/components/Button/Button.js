import React from 'react'
import PropTypes from 'prop-types'

const Button = ({
  onClick,
  className = '',
  children}) => {
  return (
    <button
    onClick={onClick}
    className={className}
    >
      {children}
    </button>
  )
}

Button.propTypes = {

}

export default Button
