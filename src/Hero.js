import React from 'react'
import ima from './images/image22.png'

export default function Hero() {
  return (
    <div>
      <section>
        <img src={ima} className='image22' alt="ima" />
        <h1 className="hero--heading">
            Online Expiriance
        </h1>
        <p className="hero--text">
            Join our unique interactive led by one of a kind hosts all without leaving home.
        </p>
      </section>
    </div>
  )
}
