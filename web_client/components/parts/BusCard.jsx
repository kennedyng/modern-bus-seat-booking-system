
import React, { useState } from 'react';
function BusCard() {
  return (
    <div className='card rounded-0 '>
        <div className="card-body">
            <div className="row">
                <div className="col">
                    <div className="py-2">
                    <h6 className="text-secondary">
                        Trip
                        <span className="text-danger"> #123</span>
                    </h6>

                    </div>
                </div>
                <div className="col text-center">
                    <h6 className="text-primary">
                        Route
                    </h6>
                    <h6 className="text-muted">
                        Lusaka - Mansa
                    </h6>
                    <p className="text-muted">
                        <small className="text-danger">
                            17 hour mondy 1012
                        </small>
                    </p>
                    <p className="text-info">
                        Bus #: ABC 1234
                    </p>
                </div>
                <div className="col">
                    <div className="btn-group" role="group" aria-label="Basic outlined example">
                        <button type="button" className="btn btn-outline-primary">update</button>
                        <button type="button" className="btn btn-outline-danger">delete</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BusCard