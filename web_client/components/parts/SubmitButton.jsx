import React from 'react'
import ReactLoading from "react-loading"
function Button({isLoading, pressed,  children}) {
  return (
    <button onClick={pressed}  className="btn btn-primary w-25"  type="submit"  disabled={isLoading}>
        
        {
            children
        }
        <span hidden={!isLoading}>
          <span className="d-flex justify-content-center">
            <ReactLoading  color="white"  type="cylon"  height={20} width={20}/>
          </span>
          
        </span>
    </button>  
  )
}

export default Button