import React from 'react';
import { AiFillInstagram, AiOutlineFacebook,AiFillPhone,AiOutlineMail,AiOutlineCopyrightCircle } from 'react-icons/ai';
import { ImLocation } from 'react-icons/im';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { FaFacebook } from 'react-icons/fa';
import Link from 'next/link';


const Footer = () => {
  return (
    <div className='footer-container'>
      <p>
        2022 D Sounds Enterprise All rights reserved <AiOutlineCopyrightCircle/>
      </p>
      <p><BsFillTelephoneFill/> +254 740 249724</p>
      <p ><AiOutlineMail /> info@dsounds.co.ke</p>      
      <p><ImLocation /> Limuru Arcade, Limuru Town</p>
      <p className='icons'>
      
        <Link href="https://www.instagram.com/dsounds.enterprise/"><AiFillInstagram /></Link>
        <Link href="https://www.facebook.com/Dsoundentlimuru/"><FaFacebook /></Link>
       
        
        
      </p>
      
    </div>
  )
}

export default Footer