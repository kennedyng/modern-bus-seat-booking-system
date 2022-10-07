import React from 'react'
import SimpleCard from '../../components/parts/SimpleCard'
import Link from 'next/link'
import travelers from "../../public/svg/travelers.svg"
import Image from "next/image"
const manageTripData = { 
    title: "TRIPS",
    subtitle: "manage your trips"
}

const manageBusesData = { 
    title: "BUSES",
    subtitle: "manage buses"
}

const manageRoutesData = { 
    title: "ROUTES",
    subtitle: "manage routes "
}
function OperatorManagement() {
  return (

    <div className='container my-4'>
        
        <div className='d-flex justify-content-center'>
            <Image width={300} height={100} src={travelers} alt="travers" />
        </div>
            <h4 className='text-center text-secondary my-4'>
                Manage and orgainse your Trips 
            </h4>
        <div className='row g-4'>
            <div className='col-md-6'>
                <Link href="operator/trip">
                <a className='nav-link'><SimpleCard data={manageTripData} /></a>
                </Link>
            </div>
            <div className='col-md-6'>
                <Link href="operator/route">
                <a className='nav-link'><SimpleCard data={manageRoutesData} /></a>
                </Link>
            </div>
            <div className='col-md-6'>
                <Link href="operator/route">
                <a className='nav-link'><SimpleCard data={manageBusesData} /></a>
                </Link>
            </div>
        </div>

    </div>
  )
}

export default OperatorManagement