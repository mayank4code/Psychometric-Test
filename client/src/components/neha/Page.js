import React from 'react'
import { Link } from 'react-router-dom'
import './page.css'
import Image1 from './images/Goal-amico.png'
import Image2 from './images/Seamstress-bro.png'
import Image3 from './images/Webinar.png'
import { Footer } from './Footer'
import { motion } from 'framer-motion'
import { InView } from 'react-intersection-observer'
import videoFile from './images/Worklife.mp4'
import { useRef, useState } from 'react';


const Page = () => {

  const videoRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadedData = () => {
    setIsLoading(false);
  };

  return (<>

    <div className='container-page1'>
      <div className='img-container'>

        <video className='image-top' controls={false} autoPlay muted
          onLoadedData={handleLoadedData}
          style={{ display: isLoading ? 'none' : 'block' }}
        >
          <source src={videoFile} type="video/mp4" />
          Sorry, your browser doesn't support videos.
        </video>

      </div>

      <div className='container-2'>
        <div className='fade-in-from-right'>
          <h1 className="text-top">TAKE A<br />
            STEP AHEAD<br />
            IN YOUR<br />
            BUSINESS</h1><br />

          <motion.a href='#start-test' className='btn'
            whileHover={{ scale: 1.1 }} transition={{ type: 'spring', stiffness: 300 }}>
            KNOW MORE <span className='arrow'>&rarr;</span></motion.a>

        </div>
      </div>

    </div >

    {/* PAGE 2 */}


    <section id='start-test' className='container-page2'>

      <div className='wrap'>
        <div className='text-container'>
          <h6 className='text'>SELF COMPLIANCE TEST</h6>
          <p className='para'> Assess your compliance mindset with our self-compliance test. Discover invisible mental roadblocks and gain insights into informed decision-making.</p>
        </div>


        <InView triggerOnce>
          {({ inView, ref }) => (
            <motion.div
              ref={ref}
              initial={{ opacity: 0 }}
              animate={{ opacity: inView ? 1 : 0 }}
              transition={{ delay: 0.5, duration: 1 }}
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
              transition={{ delay: 0.5, duration: 1 }}
            >
              <img src={Image2} className='image' />
            </motion.div>
          )}
        </InView>


        <div className='text-container' style={{ padding: '0 20px' }}>
          <h6 className='text'> Partner with CAxpert</h6>
          <p className='para'> CAxpert (CAX) provides accounting solutions to small business owners. Let us explain analytics behind the numbers and help you scale your business. Partnered with WEP since 2019.</p>
        </div>
      </div>

      <div className='wrap'>

        <div className='text-container'>
          <h6 className='text'> Start Your Test Today</h6>
          <p className='para'> Uncover your compliance mindset and understand where you stand in different social influence scenarios. Get valuable insights for your business decisions.</p>
        </div>

        <InView triggerOnce>
          {({ inView, ref }) => (
            <motion.div
              ref={ref}
              initial={{ opacity: 0 }}
              animate={{ opacity: inView ? 1 : 0 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              <img src={Image3} className='image' />
            </motion.div>
          )}
        </InView>
      </div>


      <div className='btn-wrap'>
        <Link style={{ textDecoration: 'nwrap' }}>
          <motion.button className='btn'
            whileHover={{ scale: 1.1 }} transition={{ type: 'spring', stiffness: 300 }}
          >START YOUR TEST<span className='arrow'>&rarr;</span></motion.button></Link>
      </div>
    </section>

    <Footer />

  </>
  )
}

export default Page