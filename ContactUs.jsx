/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import "./Contact.css";
import { BsPinterest } from "react-icons/bs";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";

const ContactUs = () => {
  return (
    <div>
    <div className='main-content'>
      <div className=' page-header'>
        <p className='heading'>Contact Us</p>
        <div className='rte'>
          <div className='text-center'>
            <p>
              Have a question? Visit our <a href='/link'>Help Centre</a> below for answers to our frequently asked questions. If you still need help, just <a href='/link'>Contact Us</a> below, we'll get back to you within 24-48 hours!
            </p>
          </div>
        </div>
      </div>
      
      <div className='page-width'>
    <div className='titles-grid'>
        <div className='titles-grid--item'>
            <a href='/shop center link' className=' titles-grid-item-content'>
                <div className='icon-wrapper'>
                <img src='//www.lovisa.sg/cdn/shop/files/FAQs_120x.webp?v=1651037079'/>
                <p className='titles-grid-item-title'>Help Centre</p>
                </div>
                
            </a>
        </div>
        <div className='titles-grid--item'>
            <a className=' titles-grid-item-content' href='/shop link'>
                <div className='icon-wrapper'>
                    <img src='//www.lovisa.sg/cdn/shop/files/IMG_1994_120x.png?v=1706761726'/>
                    <p className='titles-grid-item-title'>Contact Us</p> 
                </div>
                
            </a>
        </div>
        <div className='titles-grid--item'>
            <button className=' titles-grid-item-content' type='button' >
                <div className='icon-wrapper'>
                    <img src='//www.lovisa.sg/cdn/shop/files/IMG_1990_120x.png?v=1706761737'/>
                    <p className='titles-grid-item-title para' >Call Us</p> 

                </div>
            </button>
        </div>
    </div>
</div>

</div>
<div className='text-left'>
            <p className='text'>EMAIL</p>
            <p className='email'>info@lovisa.com</p>
            <div className='icons'>
                <li><a href=''><BsPinterest /></a></li>
                <li className='inc'><a href=''><AiOutlineInstagram /></a></li>
                <li><a href=''><BsFacebook /></a></li>
            </div>


    </div>
</div>

  );
}

export default ContactUs;
