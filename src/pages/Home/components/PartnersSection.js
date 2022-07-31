import React from 'react'
import sparkLife from '../../../assets/partners/spark_life.png'
import ackaGames from '../../../assets/partners/acka_games.png'

import {
    PartnersContainer,
    PartnersTitle,
    BodyText,
    PartnerFounderCard
} from '../styles';

import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import { PARTNERS } from '../../../constants/partners'

const PartnersSection = () => {

    const slideLeft = () => {
        let slider = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft - 500
    }

    const slideRight = () => {
        let slider = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft + 500
    }

    const goToSitePartner = (url) => {
        if (url !== "") {
            window.open(url, "_blank")
        }
    }

    return (
        <PartnersContainer>
            <PartnersTitle style={{ fontSize: '2em' }}>
                Socios Fundadores
            </PartnersTitle>
            <BodyText>Conoce los fundadores</BodyText>
            <div className='relative flex items-center p-10'>
                <MdChevronLeft onClick={slideLeft} size={40} color='#fff' className='opacity-30 cursor-pointer hover:opacity-100 ease-in-out duration-300' />
                <div
                    id='slider'
                    className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide pl-6 md:pl-0'>
                    {
                        PARTNERS.map((item) => (
                            <PartnerFounderCard key={item.id} onClick={goToSitePartner.bind(null, item.url)}>
                                <img
                                    className='w-[6em] md:w-[10em]'
                                    alt='/'
                                    src={item.image} />
                            </PartnerFounderCard>
                        ))
                    }
                </div>
                <MdChevronRight onClick={slideRight} size={40} color='#fff' className='opacity-30 cursor-pointer hover:opacity-100 ease-in-out duration-300' />
            </div>
            <div className='w-full flex justify-evenly'>
                <div className='flex flex-col items-center'>
                    <PartnersTitle style={{ fontSize: '2em' }}>
                        Sponsor Black
                    </PartnersTitle>
                    <img className='w-[10em] md:w-[13em] mt-10 cursor-pointer hover:scale-105 ease-in-out duration-300' alt='/' src={sparkLife} onClick={goToSitePartner.bind(null, "https://www.sparklifesps.com/")} />
                </div>
                <div className='flex flex-col items-center'>
                    <PartnersTitle style={{ fontSize: '2em' }}>
                        Sponsor Silver
                    </PartnersTitle>
                    <img className='w-[10em] md:w-[13em] mt-10 cursor-pointer hover:scale-105 ease-in-out duration-300' alt='/' src={ackaGames} onClick={goToSitePartner.bind(null, "https://ackagames.com/")} />
                </div>
            </div>
        </PartnersContainer>
    )
}

export default PartnersSection
