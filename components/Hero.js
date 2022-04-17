import React from 'react'
import { motion } from 'framer-motion'

export default function Hero() {
    const sentence = {
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            delayChildren: 0.15,
            staggerChildren: 0.15,
          },
        },
      };
    
      const word = {
        hidden: {
          y: 32,
          opacity: 0,
        },
        show: {
          y: 1,
          opacity: 1,
          transition: {
            type: 'tween',
            duration: 0.4,
          },
        },
    };
  return (
    <div className='min-h-screen my-0 mx-auto px-0 py-24'>
        <motion.div 
            initial='hidden'
            animate='show'
            variants={sentence}>

            <motion.div
                variants={word}
                className='mx-0 mt-0 mb-2.5'>
                <h1 className='font-normal text-base font-sans'>
                    Hi, my name is
                </h1>
            </motion.div>

            <motion.div 
                variants={word}
                className='m-0'>
                <h2 className='font-semibold text-7xl font-serif'>
                    Hamza Zeghari.
                </h2>
            </motion.div>

            <motion.div 
                variants={word}
                className='m-0'>
                <h3 className='font-semibold text-7xl font-serif'>
                    I build things for the web.
                </h3>
            </motion.div>

            <motion.div 
                variants={word}
                className='m-0'>
                <p className='font-normal text-lg text-justify mt-5 mx-0 max-w-xl font-mono '>
                    I&apos;m a software engineer based in Casablanca MOROCCO, specializing in building (and occasionally designing) exceptional, high-quality websites and applications.
                </p>
            </motion.div>

        </motion.div>
        {/* <div className='mx-0 mt-0 mb-2.5'>
            <h1 className='font-normal text-base'>
                Hi, my name is
            </h1>
        </div>

        <div className='m-0'>
            <h2 className='font-semibold text-7xl'>
                Hamza Zeghari.
            </h2>
        </div>

        <div className='m-0'>
            <h3 className='font-semibold text-7xl'>
                I build things for the web.
            </h3>
        </div>
        
        <div className='m-0'>
            <p className='font-normal text-xl mt-5 mx-0 max-w-lg whitespace-normal'>
                I&apos;m a software engineer based in Casablanca MOROCCO, specializing in building (and occasionally designing) exceptional, high-quality websites and applications.
            </p>
        </div> */}
    </div>
  )
}
