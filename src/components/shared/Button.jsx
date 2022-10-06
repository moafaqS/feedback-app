import React from 'react'
import PropTypes from 'prop-types'

function Button({children , version , type , isDisble}) {
  return (
    <button type={type} disabled={isDisble} className={`btn btn-${version}`}>
        {children}
    </button>
  )
}

Button.defaultProps = {
    version: 'primary',
    type: 'button',
    isDisble: false
}

Button.prototypes = {
    children : PropTypes.node.isRequired,
    version : PropTypes.string,
    type: PropTypes.string,
    isDisble: PropTypes.bool,

}

export default Button