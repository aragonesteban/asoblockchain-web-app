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
    <div className='flex flex-row p-20 justify-center items-center background-footer'>
      <img className='w-[10em]' src={logoColor} />
      <div className='w-[1px] h-[8rem] mx-20 vertical-divider-footer' />
      <div>
        <span className='font-bold text-lg text-white'>Redes Sociales</span>
        <div className='flex flex-row mt-4'>
          <img className='w-[2em] mr-3 cursor-pointer' src={instagram} onClick={goToNetworkAsoblockchain.bind(null, 'https://www.instagram.com/asoblockchain/')}/>
          <img className='w-[2em] mr-3 cursor-pointer' src={facebook} onClick={goToNetworkAsoblockchain.bind(null, 'https://www.facebook.com/asoblockchain')}/>
          <img className='w-[2em] mr-3 cursor-pointer' src={twitter} onClick={goToNetworkAsoblockchain.bind(null, 'https://twitter.com/asoblockchain')}/>
          <img className='w-[2em] cursor-pointer' src={linkedin} onClick={goToNetworkAsoblockchain.bind(null, 'https://www.linkedin.com/company/asoblockchaincol/')}/>
        </div>
      </div>
      <div className='w-[1px] h-[8rem] mx-20 vertical-divider-footer' />
      <div>
        <span className='block font-bold text-lg text-white cursor-pointer'>#AsoblockchainSomosTodos</span>
        <span className='block text-base text-white'>{"© 2022 - Hecho con <3 desde Colombia 🇨🇴"}</span>
      </div>
    </div>
  )
}
