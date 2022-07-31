import React from 'react'
import beInCrypto from '../../../assets/mediapartners/beincrypto.png'
import criptoInforme from '../../../assets/mediapartners/criptoinforme.png'

import { TitleSection } from '../styles'

const MediaPartnerSection = () => {

    const goToSiteMediaPartner = (url) => {
        window.open(url, "_blank")
    }

    return (
        <div className='w-full text-center mt-16'>
            <TitleSection style={{ fontSize: '2em' }}>
                Media Partners
            </TitleSection>
            <img
                className='w-[20em] inline-block mr-8 cursor-pointer hover:scale-105 ease-in-out duration-300'
                src={beInCrypto}
                onClick={goToSiteMediaPartner.bind(null, "https://beincrypto.com/")} />
            <img
                className='w-[20em] inline-block cursor-pointer hover:scale-105 ease-in-out duration-300'
                src={criptoInforme}
                onClick={goToSiteMediaPartner.bind(null, "https://criptoinforme.com/")} />
        </div>
    )
}

export default MediaPartnerSection