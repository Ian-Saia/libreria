import React from 'react'

const ItemListContainer = (props) => {
    console.log(props);
  return ( 
    <> 
    <div>{props.name}{props.price}</div>
    </>
  )
}

export default ItemListContainer
