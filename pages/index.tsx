import type { NextPage } from 'next'
import Head from 'next/head'
import About from '../components/About'
import Header from '../components/Header'
import Hero from '../components/Hero'
import WorkExperience from '../components/WorkExperience'


const Home: NextPage = () => {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0'>
      <Head>
        <title>Bhavya's Portfolio</title>
      </Head>
      <Header/>
      <section id="hero" className='snap-start'>
        <Hero/>
      </section>
      {/* <section id="about" className='snap-center'>
        <About/>
      </section> */}
      <section id="experience" className='snap-center'>
        <WorkExperience/>
      </section>
    </div>
  )
}

export default Home
