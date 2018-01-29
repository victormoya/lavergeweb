import React from 'react'

const Button = (props) => {
  return (
    <div className="btn">
      <svg>
        <rect x="0" y="0" fill="none" width="166" height="45" />
      </svg>
      {props.text}
    </div>
  )
}

export default Button
