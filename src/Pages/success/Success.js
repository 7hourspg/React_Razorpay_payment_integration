import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

function Success () {
  const location = useLocation()
  const navigate = useNavigate()

  console.log(location?.state?.response)

  useEffect(() => {
    if (location?.state?.response === undefined) {
      navigate('/')
    }
  }, [])

  return <div>Success</div>
}

export default Success
