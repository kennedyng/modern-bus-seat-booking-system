import React, { useEffect } from 'react'
import { getSession, signIn } from 'next-auth/react'
import Router from 'next/router'

function useSecurePage() {

    const securePage = async (goto) => {
        const session = await getSession()
        if(!session){
         Router.push(goto)
        }
      }

  return { securePage }
}

export default useSecurePage