import React from 'react'
import { motion} from 'framer-motion'
type Props = {}

const About = (props: Props) => {
  return (
    <div className='h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>About</h3>
        <div className='flex flex-col md:flex-row gap-8'>
            <motion.img 
            initial={{
                x:-200,
                
            }}
            whileInView={{x:0}}
            
            transition={{
                duration:1.2
            }}
            className='h-80 w-80' src="https://avatars.githubusercontent.com/u/56181880?v=4" alt="" />
            <p>Hi I am Bhavya gor</p>
        </div>
    </div>
  )
}

export default About