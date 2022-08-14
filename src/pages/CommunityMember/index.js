import React, { useState } from 'react'
import BenefitsCommunityMember from './components/BenefitsCommunityMember'
import DialogConfirmInscription from './components/DialogConfirmInscription';
import DialogFormCommunityMember from './components/DialogFormCommunityMember';
import InfoCommunityMember from './components/InfoCommunityMember'

const CommunityMember = () => {

    const [open, setOpen] = useState(false);
    const [showConfirmation, setShowConfirmation] = useState(false);

    const toggleFormCommunityMember = (value) => {
        setOpen(value);
    };

    const toggleConfirmation = (value) => {
        setShowConfirmation(value)
    }

    return (
        <div className='h-full overflow-hidden'>
            <InfoCommunityMember toggleFormCommunityMember={toggleFormCommunityMember} />
            <BenefitsCommunityMember />
            <DialogFormCommunityMember
                isFormCommunityOpen={open}
                toggleFormCommunityMember={toggleFormCommunityMember}
                toggleConfirmation={toggleConfirmation} />
            <DialogConfirmInscription
                showDialogConfirmInscription={showConfirmation}
                toggleConfirmation={toggleConfirmation} />
        </div>
    )
}

export default CommunityMember