import React, { useState } from 'react'
import BenefitsCommunityMember from './components/BenefitsCommunityMember'
import DialogFormCommunityMember from './components/DialogFormCommunityMember';
import InfoCommunityMember from './components/InfoCommunityMember'

const CommunityMember = () => {

    const [open, setOpen] = useState(false);

    const toggleFormCommunityMember = (value) => {
        setOpen(value);
    };

    return (
        <div className='h-full overflow-hidden'>
            <InfoCommunityMember toggleFormCommunityMember={toggleFormCommunityMember} />
            <BenefitsCommunityMember />
            <DialogFormCommunityMember isFormCommunityOpen={open} toggleFormCommunityMember={toggleFormCommunityMember} />
        </div>
    )
}

export default CommunityMember