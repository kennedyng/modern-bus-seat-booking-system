import React from 'react'
import TripCard from '../../../components/parts/TripCard'
import Pagination from 'react-bootstrap/Pagination';
function Trip() {
  return (
    <div className="container">
      <div className='my-4'>
        <h4 className="text-muted text-center">Trip Management</h4>
        <p className="text-muted text-center">
          create update the Trips
        </p>

        <div className="d-flex justify-content-center">
          <div className="btn-group" role="group" aria-label="Basic outlined example">
            <button type="button" className="btn btn-dark">Management</button>
            <button type="button" className="btn btn-success">Add New Trip</button>
          </div>
        </div>

      </div>
      <div className="py-4">
        <div className="row g-2">
          <div className="col-md-6">
              <TripCard />
          </div>
          <div className="col-md-6">
              <TripCard />
          </div>
          <div className="col-md-6">
              <TripCard />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Trip