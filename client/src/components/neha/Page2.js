import React from 'react'
import { Link } from 'react-router-dom'

const Page2 = () => {
  return (
    <div className='container-page2'>
      <hr />
      <div className='brown-bg'>
        <div className='content'>
          <p className='text-3'>SELF COMPLIANCE TEST</p>
        </div>
      </div>
      <hr />
      <div className='text-2'>
        We were eating hủ tiếu, a rice noodle dish often served for breakfast. It was a far cry from my usual granola bar in the States. But it was also the sixth morning in a row we’d eaten it. I groaned and made some throwaway pun in Vietnamese that I can’t remember. My grandparents stared at me for a second, then burst into laughter. I tried to hide my own grin. I’d never heard a sound so gratifying.

        <Link style={{ textDecoration: 'none' }}>
          <button className='test-button'>START YOUR TEST</button></Link>
      </div>
    </div>

  )
}

export default Page2