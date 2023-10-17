import React from 'react'
import wed from './images/wedding-photography 1.png'
import star from './images/Star 1.png'

export default function Card() {
  return (
    <div>
      <div className="card">
        <img src={wed} alt="wed" />
        <div className="card--stats">
          <img src={star} alt="star" />
          <span className='grey'>5.0</span>
          <span className='grey'>6</span>
          <span className='grey'>NEPAL</span>
        </div>
        <p>Life lesson with Sarthak Thapa</p>
        <p><span className='dollor'>From $140</span> /person</p>
        <img src={wed} alt="wed" />
        <div className="card--stats">
          <img src={star} alt="star" />
          <span className='grey'>5.0</span>
          <span className='grey'>6</span>
          <span className='grey'>NEPAL</span>
        </div>
        <p>Life lesson with Sarthak Thapa</p>
        <p><span className='dollor'>From $140</span> /person</p>
        <img src={wed} alt="wed" />
        <div className="card--stats">
          <img src={star} alt="star" />
          <span className='grey'>5.0</span>
          <span className='grey'>6</span>
          <span className='grey'>NEPAL</span>
        </div>
        <p>Life lesson with Sarthak Thapa</p>
        <p><span className='dollor'>From $140</span> /person</p>
      </div>
    </div>
  )
}
