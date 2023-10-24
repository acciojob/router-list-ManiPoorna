import React from 'react'
import { useParams } from 'react-router-dom'

const Item1 = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>Item {id}</h1>
      <p>Description for Item {id}</p>
    </div>
  )
}

export default Item1