import React from 'react'

import {
    WrapperTwoColumnsSection,
    AllianceTitle,
    IllustrationAlliance,
    AllianceInfo
} from '../styles';

import YoutubeEmbed from '../../../components/YoutubeEmbed'

const AllianceSection = () => {
    return (
        <WrapperTwoColumnsSection style={{ marginTop: '2vw' }}>
            <div>
                <AllianceTitle>Un equipo de respaldo</AllianceTitle>
                <AllianceInfo>Contamos con alianzas estratégicas a nivel global para satisfacer las necesidades e intereses gremiales.</AllianceInfo>
            </div>
            <div>
                <YoutubeEmbed embedId="4F_PH6Zz9pw" />
            </div>

        </WrapperTwoColumnsSection>
    )
}

export default AllianceSection