import React from 'react'
import { useSelector } from 'react-redux'


const FirstName = () => {
    const firstName = useSelector((state) => state.user.firstName)
  return (
    <h2 className='text-center'>{firstName}</h2>
  )
}

export default FirstName