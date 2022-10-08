import React from 'react'
import BusCard from '../../../components/parts/BusCard'
function Bus() {
  return (
    <div className="container">
      <div className='my-4'>
        <h4 className="text-muted text-center">Bus Management</h4>
        <p className="text-muted text-center">
          create update the route
        </p>

        <div className="d-flex justify-content-center">
          <div className="btn-group" role="group" aria-label="Basic outlined example">
            <button type="button" className="btn btn-dark">Management</button>
            <button type="button" className="btn btn-success">Add New Bus</button>
          </div>
        </div>

      </div>
    <div className="py-4">

      <div className="row g-2">
        <div className="col-md-6">
            <BusCard />
        </div>
        <div className="col-md-6">
            <BusCard />
        </div>
        <div className="col-md-6">
            <BusCard />
        </div>
      </div>
    </div>
  </div>
  )
}

export default Bus