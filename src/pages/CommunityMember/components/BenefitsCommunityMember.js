import React from 'react'
import { BENEFTIS } from '../../../constants/benefits'
import BenefitCard from './BenefitCard'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'

const BenefitsCommunityMember = () => {

    const slideLeft = () => {
        let slider = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft - 500
    }

    const slideRight = () => {
        let slider = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft + 500
    }

    return (
        <div className='text-center pb-10'>
            <span className='text-white font-bold text-xl lg:text-3xl self-center leading-relaxed'>Beneficios</span>
            <div className='relative flex items-center mt-3 lg:mt-0 lg:p-10'>
                <MdChevronLeft onClick={slideLeft} size={40} color='#fff' className='opacity-30 cursor-pointer hover:opacity-100 ease-in-out duration-300' />
                <div
                    id='slider'
                    className='w-full h-full overflow-x-scroll whitespace-nowrap scroll scroll-smooth scrollbar-hide lg:pl-6 md:pl-0'>
                    {
                        BENEFTIS.map((item) => (
                            <BenefitCard
                                key={item.id}
                                title={item.title}
                                description={item.description}
                                icon={item.icon} />
                        ))
                    }
                </div>
                <MdChevronRight onClick={slideRight} size={40} color='#fff' className='opacity-30 cursor-pointer hover:opacity-100 ease-in-out duration-300' />
            </div>

        </div>
    )
}

export default BenefitsCommunityMember