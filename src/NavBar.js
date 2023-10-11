import React from 'react'
import air from "./images/airbnb.png"
import './App.css'

export default function NavBar() {
  return (
    <div>
      <nav>
        <img src={air} className='airbnb' alt="air" />
      </nav>
    </div>
  )
}
