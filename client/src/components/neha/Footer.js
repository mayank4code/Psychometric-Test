import React from 'react'
import './page.css'
import { BsTwitter } from 'react-icons/bs'
import { FaFacebook } from 'react-icons/fa'
import { BsLinkedin } from 'react-icons/bs'
import { BsYoutube } from 'react-icons/bs'
import img from './images/logo512.png'

export const Footer = () => {
    return (
        <div className='footer'>

            <div>
                <img className='footer-img' src={img} />
            </div>
            <div>
                Community <br />
                About WEP<br />
                Partners <br />
            </div>

            <div>
                Newletter <br />
                Events<br />
                Disclaimer<br />
            </div>

            <div>
                FAQs<br />
                Feedback<br />
            </div>

            <div className='socials'>
                <a href='https://twitter.com/NITIAayog'><BsTwitter /></a> <br />
                <a href='https://www.facebook.com/WomenEntrepreneurshipPlatform/'><FaFacebook /></a><br />
                <a href='https://www.linkedin.com/company/women-entrepreneurship-platform-niti-aayog/' ><BsLinkedin /></a><br />
                <a href='https://www.youtube.com/watch?v=UFJeTwHh01w' ><BsYoutube /></a><br />
            </div>

        </div>
    )
}
