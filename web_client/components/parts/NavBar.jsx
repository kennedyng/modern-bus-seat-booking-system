import React from 'react'
import Link from "next/link"
function NavBar() {
  return (
        <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid fw-light">
            <Link href="/">
                <a className="navbar-brand" >CloudE-BUSPLATFORM</a>
            </Link>
            
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
                <li className="nav-item">
                <Link href="/">
                    <a className="nav-link" >Home</a>
                </Link>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Operator
                    </a>
                    <ul className="dropdown-menu border-primary rounded-0">
                        <Link href="/operator/auth/login">
                            <a className="dropdown-item" >Login</a>
                        </Link>
                        <Link href="/operator">
                            <a className="dropdown-item" >Trip Management</a>
                        </Link>
                    </ul>
                </li>

                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Passenger
                    </a>
                    <ul className="dropdown-menu border-primary rounded-0">
                        <Link href="/passenger/register">
                            <a className="dropdown-item" >Register</a>
                        </Link>
                        <Link href="/passenger/profileManagement">
                            <a className="dropdown-item" >profile Management</a>
                        </Link>
                        
                    </ul>
                </li>
                
            </ul>
          
            </div>
        </div>
        </nav>
  )
}

export default NavBar