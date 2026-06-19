import React from 'react'

const Button = (props) => {
  return (
    <>
    <button className="active:scale-95 transition-all duration-200  px-4 py-1 w-fit h-10 bg-black text-white rounded-3xl"> {props.name}</button>
    </>
  )
}

export default Button