import React from 'react'
import RouteCard from '../../../components/parts/RouteCard'
function Route() {
  return (
    <div className="container">
      <div className='my-4'>
        <h4 className="text-muted text-center">Route Management</h4>
        <p className="text-muted text-center">
          create update the route
        </p>

        <div className="d-flex justify-content-center">
          <div className="btn-group" role="group" aria-label="Basic outlined example">
            <button type="button" className="btn btn-dark">Management</button>
            <button type="button" className="btn btn-success">Add New Route</button>
          </div>
        </div>

      </div>
    <div className="mb-2">
      <div className="row g-2">
        <div className="col-md-6">
            <RouteCard />
        </div>
        <div className="col-md-6">
            <RouteCard />
        </div>
        <div className="col-md-6">
            <RouteCard />
        </div>
      </div>
    </div>
  </div>
  )
}

export default Route