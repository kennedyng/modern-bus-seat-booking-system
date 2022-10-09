import React from 'react'

function Button({isLoading, pressed,  children}) {
  return (
    <button  className="btn btn-primary w-25"  type="submit"  disabled={isLoading}>
        <span className="spinner-grow spinner-grow-sm spinner-primary" role="status" hidden={!isLoading}></span>
        {
            children
        }
    </button>  
  )
}

export default Button