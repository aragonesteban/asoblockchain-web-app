import React from 'react'
import illsutrationCommunity from '../../../assets/illustration-community-member.png'
import { FirstImageBackgroundCommunity, SecondImageBackgroundCommunity } from '../styles'

const InfoCommunityMember = ({ toggleFormCommunityMember }) => {
    return (
        <div className='relative w-full'>
            <FirstImageBackgroundCommunity />
            <SecondImageBackgroundCommunity />
            <div className='grid md:grid-cols-2 md:px-10 lg:px-24 xl:px-40'>
                <div className='flex flex-col justify-center'>
                    <span className='text-white font-bold text-3xl mt-10 lg:mt-0 lg:text-4xl xl:text-5xl self-center leading-relaxed text-center md:text-left'>
                        Sé parte de la comunidad blockchain en Latinoamérica
                    </span>
                    <button className='button-subscribe' onClick={toggleFormCommunityMember.bind(null, true)}>Inscríbete</button>
                </div>
                <img className='mt-5 w-[80%] md:w-[auto] xl:mt-0 lg:ml-10 justify-self-center' src={illsutrationCommunity} />
            </div>
        </div>
    )
}

export default InfoCommunityMember