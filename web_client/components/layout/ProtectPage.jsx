import React, { useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { getSession, signIn } from 'next-auth/react';

import Router from 'next/router';
function ProtectPage({children}) {
 
 useEffect(
    () => {
        const securePage = async () => {
            const session = await getSession()
            if(!session){
            
            return  await Router.push("/operator/auth/login")
            }

        }
        securePage()
    }, []
 )


  return (
    <div>
        {children}
    </div>
  )
}

export default ProtectPage