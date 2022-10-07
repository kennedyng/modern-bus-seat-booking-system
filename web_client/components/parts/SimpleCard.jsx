import React from 'react'

function SimpleCard({data}) {
    const { title, subtitle } = data
  return (
    <div className="card rounded-o border-primary" >
    <div className="card-body text-center">
        <h5 className="card-title text-primary fw-light">{title}</h5>
        <h6 className="card-subtitle mb-2 text-secondary">{subtitle}</h6>
    </div>
</div>
    
  )
}

export default SimpleCard