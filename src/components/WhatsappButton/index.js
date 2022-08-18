import { IconButton } from '@mui/material'
import React from 'react'
import whatsappLogo from '../../assets/whatsapp.png'

const NUMBER_ASOBLOCKCHAIN = "+573004052621"

const WhatsAppButton = () => {

  const sendMessageToWhatsapp = () => {
    const link = `https://wa.me/${NUMBER_ASOBLOCKCHAIN}?text=¡Hola AsoBlockchain!`
    window.open(link, '_blank')
  }

  return (
    <IconButton onClick={sendMessageToWhatsapp} sx={{ position: 'fixed', bottom: '1em', right: '1em' }}>
      <img className='w-[3em]' src={whatsappLogo} alt="/" />
    </IconButton>
  )
}

export default WhatsAppButton