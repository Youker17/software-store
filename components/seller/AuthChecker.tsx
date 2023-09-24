"use client";



import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import LogoLoader from './LogoLoader';

function AuthChecker() {
  const router = useRouter()
  const [visible, setVisible] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setVisible(false)
    }
      , 6000)

    console.log('AuthChecker')
  }
    , [])
  return visible && (
    <AnimatePresence>
      <motion.div exit={{opacity:0}} transition={{duration:1}} className='bg-black z-50 flex justify-center items-center absolute left-0 top-0 w-screen h-screen'>
        <motion.div>
          <LogoLoader />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default AuthChecker