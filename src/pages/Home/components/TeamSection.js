import React from 'react'

import { TitleSection } from '../styles'
import '../styles.css';

import instagram from '../../../assets/instagram.png'
import linkedin from '../../../assets/linkedin.png'
import { TEAM } from '../../../constants/team';

const TeamSection = () => {

    const goToNetworkMember = (url) => {
        window.open(url, '_blank')
    }

    return (
        <div className='w-full text-center mt-16'>
            <TitleSection style={{ fontSize: '2em' }}>
                Dream Team
            </TitleSection>
            <div className='grid gap-4 grid-cols-3 mt-8 px-60 justify-items-center'>
                {
                    TEAM.map((item) => (
                        <div key={item.id} className='w-max flex cursor-pointer flex-col p-16 rounded-2xl card-team hover:scale-105 ease-in-out duration-300 scale'>
                            <img className='w-[10em] h-[10em] object-cover rounded-full' src={item.image} />
                            <span className='text-white font-bold mt-4 text-xl'>{item.name}</span>
                            <span className='text-white'>{item.rol}</span>
                            <div className='mt-4'>
                                <img className='w-[1.5em] inline-block mr-5 cursor-pointer' src={instagram} onClick={goToNetworkMember.bind(null, item.instagram)} />
                                <img className='w-[1.5em] inline-block cursor-pointer' src={linkedin} onClick={goToNetworkMember.bind(null, item.linkedin)} />
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default TeamSection
