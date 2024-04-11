import React from 'react'
import { motion } from 'framer-motion'
import { useSelector } from 'react-redux'

const Notify = () => {
  const isVisible = useSelector((state) => state.notify.isVis)
  const notifyText = useSelector((state) => state.notify.notifies)

  return (
    <motion.div className=" bottom-2 right-0 bg-green-500 text-white fixed bg-gradient-to-r from-blue-300 to-transparent rounded-lg p-4 shadow-lg"
    initial={{ opacity: 0, x: '100%' }}
    animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : '100%' }}
    transition={{ duration: 0.3 }}>
        {notifyText}
    </motion.div>
  )
}

export default Notify