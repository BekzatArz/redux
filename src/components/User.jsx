import React from 'react'
import FirstName from './FirstName';
import LastName from './LastName';
import { useDispatch } from "react-redux"
import { setFirstName, setLastName } from '../features/user/userSlice';

const User = () => {

  const dispatch = useDispatch()

  return (
    <div className='flex flex-col gap-2 items-center mt-5'>
        <input maxLength={25} type="text" placeholder='FirstName' onChange={(e) => dispatch(setFirstName(e.target.value))}
        className='outline-none bg-neutral-700 text-2xl focus:border-white focus:border-e-2 max-w-96'
        />
        <input maxLength={30} className='outline-none bg-neutral-700 text-2xl focus:border-white focus:border-e-2 max-w-96' type="text" placeholder='LastName' onChange={(e) => dispatch(setLastName(e.target.value))} />
        <div className="flex flex-col text-2xl">
          <FirstName />
          <LastName />
        </div>
    </div>
  )
}

export default User