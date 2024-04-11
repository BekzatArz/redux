import React from 'react'
import User from './components/User'
import Form from './components/Form'
import Posts from './components/Posts'
import Notify from './components/Notify'
import { useSelector } from 'react-redux'

const App = () => {

  const isVisible = useSelector((state) => state.notify.isVis)

  return (
    <div className='text-white w-4/5 flex flex-col items-center gap-24 m-auto'>
        <User />
        <Form />
        <Posts />
        <Notify isVisible={isVisible}/>
    </div>
  )
}

export default App