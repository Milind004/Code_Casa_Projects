import React from 'react'

export const Square = (props) => {

  return (
    <div  
    onClick={props.onClick}
    style={{
        border:"1px solid",
        color: "white",
        height: "100%",
        width: "100%",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
    }} 
    className='square'>
        <h4 style={{color:"white"}}>{props.value}</h4>
    </div>
  )
}