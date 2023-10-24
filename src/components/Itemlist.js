import React from 'react'
import { Link, useParams } from 'react-router-dom'

const Itemlist = () => {
  const {id} = useParams();
  return (
    <div>
      <h1>Item List</h1>
      <Link to="/items/1">Item 1</Link><br></br>
      <Link to="/items/2">Item 2</Link><br></br>
      <Link to="/items/3">Item 3</Link><br></br>
    </div>
  )
}

export default Itemlist