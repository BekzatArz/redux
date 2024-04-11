import React from 'react'
import { useSelector } from 'react-redux'

const LastName = () => {
  const lastName = useSelector((state) => state.user.lastName)
  return (
    <h2 className='text-center'>{lastName}</h2>
  )
}

export default LastName