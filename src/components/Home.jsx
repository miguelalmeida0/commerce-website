import React from 'react'
import Products from './Products'

export default function Home() {
  return (
  <div className="hero">
  <div className="card bg-dark text-white border-0">
  <img src="/assets/bg.jpg" className="card-img" alt="Hogwarts Castle" height="550px"/>
  <div className="card-img-overlay d-flex flex-column justify-content-center">
    <div className="container">
    <h5 className="card-title display-3 fw-bolder mb-0"><span>Hybrid Collection 22/23</span></h5>
    <p className="card-text lead fs-2"><span>From Home, From the Planet</span>
    </p>
    </div>
  </div>
</div>
<Products/>
      </div>
  )
}


