import React from 'react'
import ReactLoading from 'react-loading';


function LoadingPage() {
  return (
    <div className='d-flex justify-content-center align-items-center' style={{height: "80vh"}}>
        <div className="text-primary">
            <span className="text-center fw-light h6">PLEASE WAIT. LOADING....</span>
            <div className='d-flex justify-content-center'>
                <ReactLoading  color="silver"  type="cylon"  height={100} width={100}/>
            </div>

        
        </div>
    
    </div>
  )
}

export default LoadingPage