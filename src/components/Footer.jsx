import React from 'react'


import logo from '../Assets/TE.png'
import { RiInstagramFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  return (
    <section className='main-container'>
    {/* first container */}
    <div className='container first-container'>
      <img src={logo} alt='logo' className='logo' />
      <div className='line'></div>
      <div className='social-medias'>
      <a href='https://www.linkedin.com/company/96943280/admin/feed/posts/'><FaLinkedin className='social' style={{ color: "white" }} /></a>
      <a href='https://twitter.com/techiEco_S'><FaTwitter className='social' style={{ color: "white" }} /></a>
      <a href='https://www.instagram.com/techieco_solutions/'><RiInstagramFill className='social' style={{ color: "white" }} /></a>
      
      </div>
    </div>
    {/* second container */}
    <div className='container second-container'>
      <h1 className='com-name'>TechiEco Solutions Pvt Ltd.</h1>
      <div className='com-address-title'><div className='location-icon'> <FaLocationDot className='location-icon'  style={{color:'white'}}/></div><div className='location-heading' ><h2 className='find'>Find Us</h2></div></div>
      <div className='address-lines'>
      <p className='com-address'>N-84 S/CITY GURUGRAM SADAR BAZAR GURGAON,</p>
      <p className='com-address2'> GURGAON-122001,</p>
      <p className='com-address3'>HARYANA</p>
      </div>
    </div>
    {/* third container */}
    <div className='container third-container'>
      <h2 className='Contact'>Contact Us</h2>
      <div className='email'>
      <a href='mailto:techiecos@gmail.com' className='email'><MdEmail style={{color:'white'}}/> : techiecos@gmail.com</a>
      </div>
      <div className='phone'>
      <a href='tel:9971732962' className='phone'><FaPhoneAlt style={{color:'white'}}/>: +91 9971732962</a>
      </div>
    </div>
    </section>
  )


 }

export default Footer
