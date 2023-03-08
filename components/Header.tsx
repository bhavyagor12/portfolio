import React from 'react'
import { SocialIcon } from 'react-social-icons';
import {motion} from "framer-motion"
type Props = {}
const styles = {
    'left':`flex items-center`,
    'right':`flex items-center`
}
const Header = (props: Props) => {
  return (
    <header className='sticky top-0 flex justify-around items-center z-20 p-5'>
        <motion.div
        initial={{
            x:-500,
            opacity:0,
            scale:0.5
        }}
        animate={{
            x:0,
            opacity:1,
            scale:1
        }}
        transition={{
            duration:1.2
        }}
        className={styles.left}>
        <SocialIcon url="https://www.linkedin.com/in/bhavya-gor/" fgColor='gray' bgColor='transparent' />
        <SocialIcon url="https://github.com/bhavyagor12" fgColor='gray' bgColor='transparent' />
        <SocialIcon url="https://leetcode.com/bhavya_gor/" fgColor='gray' bgColor='transparent' />
        <SocialIcon url="https://www.instagram.com/_coding.simplified/" fgColor='gray' bgColor='transparent' />
        </motion.div>
        <motion.div
        initial={{
            x:500,
            opacity:0,
            scale:0.5
        }}
        animate={{
            x:0,
            opacity:1,
            scale:1
        }}
        transition={{
            duration:1.2
        }}
        className={styles.right}>
         <SocialIcon className='cursor-pointer' network='email' fgColor='gray' bgColor='transparent'/>
         <p className='hidden uppercase text-sm text-white md:block'>Get in touch</p>
        </motion.div>
    </header>
  )
}

export default Header