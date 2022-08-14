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
    <WrapperTwoColumnsSection>
        <FirstImageBackground />
        <SecondImageBackground/>
        <div className='text-center md:text-left'>
            <WelcomeTitle>#AsoblockchainSomosTodos</WelcomeTitle>
            <WelcomeInfo>Somos una entidad sin animo de lucro, conformada por emprendedores que se unieron con el objetivo de construir una organización que los represente nacional e internacionalmente</WelcomeInfo>
        </div>
        <div>
            <IllustrationWelcome />
        </div>
    </WrapperTwoColumnsSection>
)

export default WelcomeSection
