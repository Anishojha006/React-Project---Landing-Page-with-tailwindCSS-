import React from 'react'

const Button = (props) => {
  return (
    <>
    <button className="w-30 h-10 bg-black text-white rounded">{props.name}</button>
    </>
  )
}

export default Button