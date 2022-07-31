import React from 'react'
import './styles.css'
import instagram from '../../assets/instagram.png'
import linkedin from '../../assets/linkedin.png'
import facebook from '../../assets/facebook.png'
import twitter from '../../assets/twitter.png'

import logoColor from '../../assets/logo_color_text_white.png'

export const Footer = () => {

  const goToNetworkAsoblockchain = (url) => {
    window.open(url, '_blank')
  }

  return (
    <div className='flex flex-col sm:flex-row p-12 lg:p-20 justify-center items-center background-footer'>
      <img className='w-[10em] md:w-[7em]' alt='/' src={logoColor} />
      <div className='w-[1px] h-[8rem] mx-20 md:mx-8 hidden lg:block vertical-divider-footer' />
      <div className='mt-10 text-center sm:mt-0 sm:text-left mx-10 lg:mx-0'>
        <span className='font-bold text-lg text-white'>Redes Sociales</span>
        <div className='flex flex-row mt-4'>
          <img className='w-[2em] mr-3 cursor-pointer' alt='/' src={instagram} onClick={goToNetworkAsoblockchain.bind(null, 'https://www.instagram.com/asoblockchain/')} />
          <img className='w-[2em] mr-3 cursor-pointer' alt='/' src={facebook} onClick={goToNetworkAsoblockchain.bind(null, 'https://www.facebook.com/asoblockchain')} />
          <img className='w-[2em] mr-3 cursor-pointer' alt='/' src={twitter} onClick={goToNetworkAsoblockchain.bind(null, 'https://twitter.com/asoblockchain')} />
          <img className='w-[2em] cursor-pointer' alt='/' src={linkedin} onClick={goToNetworkAsoblockchain.bind(null, 'https://www.linkedin.com/company/asoblockchaincol/')} />
        </div>
      </div>
      <div className='w-[1px] h-[8rem] mx-20 hidden lg:block vertical-divider-footer' />
      <div className='text-center md:text-left mt-10 md:mt-0'>
        <span className='block font-bold text-lg text-white cursor-pointer'>#AsoblockchainSomosTodos</span>
        <span className='block text-base text-white'>{"© 2022 - Hecho con <3 desde Colombia 🇨🇴"}</span>
      </div>
    </div>
  )
}
