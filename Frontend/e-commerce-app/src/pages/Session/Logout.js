import {React, useEffect } from 'react'
import { clearSessionData } from './Session'
import { useNavigate } from 'react-router-dom'

export default function Logout() {

    const navigate = useNavigate()

    useEffect(() => {
        clearSessionData(); 
        navigate('/' ,{ state : { fromLogout: true } })
    },[navigate])

  return (
    <> </>
  )
}
