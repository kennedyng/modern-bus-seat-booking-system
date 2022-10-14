import DeleteModal from './DeleteModal';
import React, { useState } from 'react';
import Link from 'next/link';
function BusCard({data}) {
  return (
    <div className='card rounded-0 '>
        <div className="card-body">
            <div className="row">
                <div className="col">
                    <div className="py-2">
                    <h6 className="text-secondary fw-bold">
                        BUS NUMBER :
                        <div className="text-danger">{ data.plate_number }</div>
                    </h6>

                    </div>
                </div>
                <div className="col text-center">
                    <h6 className="text-primary">
                        Total Capacity : { data.total_seat}
                    </h6>
                </div>
                <div className="col">
                    <div className="btn-group" role="group" aria-label="Basic outlined example">
                        <Link href={`/operator/bus/delete/${data.id}`}>
                            <a  className="btn btn-outline-danger" >delete</a>
                        </Link>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BusCard