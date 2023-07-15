import React from 'react'
import Image from './images/study.png'
import { Link } from 'react-router-dom'
import './page.css'
import Image1 from './images/Goal-amico.png'
import Image2 from './images/Seamstress-bro.png'
import Image3 from './images/Webinar.png'
import { Footer } from './Footer'
import { motion } from 'framer-motion'
import { InView } from 'react-intersection-observer';
import img from './images/Worklife.gif'




const Page = () => {
  return (<>

    <div className='container-page1'>
      <div className='img-container'>
      <img src={img} className='image-top'></img>
      </div>

      <div className='container-2'>
        <div className='fade-in-from-right'>
          <h1 className="text-top">TAKE A<br />
            STEP AHEAD<br />
            IN YOUR<br />
            BUSINESS</h1><br />

          <motion.a href='#start-test' className='know-btn'
            whileHover={{ scale: 1.1 }} transition={{ type: 'spring', stiffness: 300 }}>
            KNOW MORE <span className='arrow'>&rarr;</span></motion.a>

        </div>
      </div>

    </div >

    {/* PAGE 2 */}


    <section id='start-test' className='container-page2'>

      <div className='wrap'>
        <InView triggerOnce>
          {({ inView, ref }) => (
            <motion.div className='text'
              ref={ref}
              initial={{ opacity: 0 }}
              animate={{ opacity: inView ? 1 : 0 }}
              transition={{duration: 1}}
            >
              SELF COMPLIANCE TEST
            </motion.div>
          )}
        </InView>
        <InView triggerOnce>
          {({ inView, ref }) => (
            <motion.div
              ref={ref}
              initial={{ opacity: 0 }}
              animate={{ opacity: inView ? 1 : 0 }}
              transition={{delay:0.5, duration: 1 }}
            >
              <img src={Image1} className='image' />
            </motion.div>
          )}
        </InView>
          
       
      </div>

      <div className='wrap'>
      <InView triggerOnce>
          {({ inView, ref }) => (
            <motion.div
              ref={ref}
              initial={{ opacity: 0 }}
              animate={{ opacity: inView ? 1 : 0 }}
              transition={{delay:0.5, duration: 1 }}
            >
              <img src={Image2} className='image' />
            </motion.div>
          )}
        </InView>


        <InView triggerOnce>
          {({ inView, ref }) => (
            <motion.div className='text'
              ref={ref}
              initial={{ opacity: 0 }}
              animate={{ opacity: inView ? 1 : 0 }}
              transition={{ duration: 1 }}
            >
              SELF COMPLIANCE TEST
            </motion.div>
          )}
        </InView>
      </div>

      <div className='wrap'>
        <InView triggerOnce>
          {({ inView, ref }) => (
            <motion.div className='text'
              ref={ref}
              initial={{ opacity: 0 }}
              animate={{ opacity: inView ? 1 : 0 }}
              transition={{ duration: 1 }}
            >
              SELF COMPLIANCE TEST
            </motion.div>
          )}
        </InView>

        <InView triggerOnce>
          {({ inView, ref }) => (
            <motion.div
              ref={ref}
              initial={{ opacity: 0 }}
              animate={{ opacity: inView ? 1 : 0 }}
              transition={{delay:0.5, duration: 1 }}
            >
              <img src={Image3} className='image' />
            </motion.div>
          )}
        </InView>
      </div>


      <div className='btn-wrap'>
        <Link style={{ textDecoration: 'nwrap' }}>
          <motion.button className='test-button'
            whileHover={{ scale: 1.1 }} transition={{ type: 'spring', stiffness: 300 }}
          >START YOUR TEST<span className='arrow'>&rarr;</span></motion.button></Link>
      </div>
    </section>

    <Footer />

  </>
  )
}

export default Page