import React from 'react'
import { Button } from './styles.js'
import PropTypes from 'prop-types'

export const SubmitButton = ({ children, disabled, onClick }) => {
  return <button disabled={disabled} onClick={onClick}>{children}</button>
}

SubmitButton.propTypes = {
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired
}