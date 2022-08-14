import React from 'react'
import '../styles.css'

const BenefitCard = ({title, description, icon}) => {
    return (
        <div className='flip-card h-[8em] w-[8em] md:h-[12em] md:w-[12em] bg-transparent inline-block m-2 md:m-3 whitespace-normal cursor-pointer'>
            <div className='flip-card-inner h-full w-full relative'>
                <div className='flip-card-front h-full w-full absolute rounded-xl flex flex-col justify-center items-center'>
                    <span className='text-white text-md md:text-xl font-bold'>{title}</span>
                    <span className='text-4xl font-bold mt-4'>{icon}</span>
                </div>
                <div className='flip-card-back h-full w-full absolute rounded-xl flex justify-center items-center p-3'>
                    <span className='text-white text-xs md:text-base lg:text-lg'>{description}</span>
                </div>
            </div>
        </div>
    )
}

export default BenefitCard