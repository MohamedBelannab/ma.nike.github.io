import React, { useState } from 'react'
import'../../assets/css/Search.css'

const Search = ({products}) => {
  const [query , setQuery] = useState('')
  return (
    <div className='serach'>
      <input class="input-elevated" value={query} onChange={(e)=>{setQuery(e.target.value)}} type="text" placeholder="Search"></input>
    </div>
  )
}

export default Search