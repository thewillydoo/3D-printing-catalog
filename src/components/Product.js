import React from 'react'


export default function Product(props) {

    let styles = {
    display: "inline-Block", 
    border: "2px solid black", 
    width: "240px", 
    height: "240px", 
    color:"black", 
    margin: "20px"
  }

  let imagestyles = {
    height: "190px", 
    width: "235px"
  }

  return (
    
      <div className="products" style={styles}>
        <div className='productimages'>
          <img src={props.theProps.image} style={imagestyles}></img>
        </div>
        <p>{props.theProps.name}</p>
        <a href={props.theProps.link} target='_blank'>Download Link</a>
      </div>
    

  )
}

    