import React from 'react'

import {
    WrapperTwoColumnsSection,
    AllianceTitle,
    AllianceInfo
} from '../styles';

import YoutubeEmbed from '../../../components/YoutubeEmbed'

const AllianceSection = () => {
    return (
        <WrapperTwoColumnsSection style={{ marginTop: '4em' }}>
            <div className='text-center md:text-left'>
                <AllianceTitle>Un equipo de respaldo</AllianceTitle>
                <AllianceInfo>Contamos con alianzas estratégicas a nivel global para satisfacer las necesidades e intereses gremiales.</AllianceInfo>
            </div>
            <div className='w-full mt-10 lg:mt-0'>
                <YoutubeEmbed embedId="4F_PH6Zz9pw" />
            </div>

        </WrapperTwoColumnsSection>
    )
}

export default AllianceSection