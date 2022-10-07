import React from 'react'
import NavBar from '../parts/NavBar'
import Footer from '../parts/Footer'
function RootLayout({ children }) {
  return (
    <div>
      <NavBar />
        { children }
        {/* <Footer /> */}
    </div>
  )
}

export default RootLayout