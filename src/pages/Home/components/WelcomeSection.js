import React from 'react'

import {
    WrapperTwoColumnsSection,
    WelcomeTitle,
    IllustrationWelcome,
    WelcomeInfo,
    ButtonKnowUs,
    FirstImageBackground,
    SecondImageBackground
} from '../styles';


const WelcomeSection = () => (
    <WrapperTwoColumnsSection style={{ paddingTop: '14vw' }}>
        <FirstImageBackground />
        <SecondImageBackground/>
        <div className='text-center md:text-left'>
            <WelcomeTitle>#AsoblockchainSomosTodos</WelcomeTitle>
            <WelcomeInfo>Somos una entidad sin animo de lucro, conformada por emprendedores que se unieron con el objetivo de construir una organización que los represente nacional e internacionalmente</WelcomeInfo>
            <ButtonKnowUs>Quienes somos</ButtonKnowUs>
        </div>
        <div>
            <IllustrationWelcome />
        </div>
    </WrapperTwoColumnsSection>
)

export default WelcomeSection
