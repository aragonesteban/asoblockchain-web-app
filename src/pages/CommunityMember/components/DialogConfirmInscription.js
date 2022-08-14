import { Dialog, Slide } from '@mui/material'
import React, { forwardRef } from 'react'
import walletBitcoin from '../../../assets/wallets/wallet_bitcoin.png'
import walletUsdt from '../../../assets/wallets/wallet_usdt_trc20.png'
import LogoWhite from '../../../assets/logo_white.png'
import { IconButton } from '@mui/material';
import { Close } from '@mui/icons-material';

const Transition = forwardRef(function Transition(props, ref,) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const DialogConfirmInscription = ({ showDialogConfirmInscription, toggleConfirmation }) => {

    const wallets = [
        {
            title: 'Wallet Bitcoin',
            image: walletBitcoin,
            hash: 'bc1qm03kqszqxca3tytvgnkm5ejh27n6pm2dev57d9'
        },
        {
            title: 'Wallet USDT TRC20',
            image: walletUsdt,
            hash: 'TC1fYB3x2rNExpqifkumy95PWVGG3UBu55'
        }
    ]

    const handleClose = (event, reason) => {
        if (reason && reason === "backdropClick") {
            return
        }
        toggleConfirmation(false)
    }

    const goToDefaultEmail = () => {
        const email = "pagos@asoblockchain.com";
        const subject = "pago";
        const emailBody = "Hi ";
        document.location =
            "mailto:" + email + "?subject=" + subject + "&body=" + emailBody;
    }

    return (
        <Dialog
            open={showDialogConfirmInscription}
            TransitionComponent={Transition}
            disableEscapeKeyDown
            PaperProps={{ style: { backgroundColor: "#07062e", width: '100%' } }}
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description">
            <div className='p-10 flex flex-col justify-center items-center relative'>
                <IconButton onClick={handleClose} sx={{ position: 'absolute', top: '2%', right: '2%' }}>
                    <Close sx={{ fill: "#FFF" }} />
                </IconButton>
                <img src={LogoWhite} className='w-[3em]' alt="/" />
                <span className='text-white text-3xl font-bold mt-5'>¡Gracias por inscribirte!</span>
                <span className='text-white mt-2 text-xl'>Estas son las wallets para que realices tu pago</span>
                <span className='text-white text-2xl mt-10'>Recuerda <span className='font-bold text-indigo-600'>$30usd mensual</span> o <span className='font-bold text-green-500'>$50usd anual</span></span>
                <div className='grid grid-cols-2 gap-20 mt-8'>
                    {
                        wallets.map((wallet, index) => (
                            <div key={index} className='flex flex-col items-center'>
                                <span className='text-white mb-2 font-bold'>{wallet.title}</span>
                                <img className='w-[10em]' src={wallet.image} />
                                <span className='text-white text-xs mt-5'>{wallet.hash}</span>
                            </div>
                        ))
                    }
                </div>
                <span className='text-white mt-14 text-lg text-center'>Luego de haber pagado, envianos el soporte de pago (screenshot y hash) a nuestro email <strong className='cursor-pointer' onClick={goToDefaultEmail}>pagos@asoblockchain.com</strong></span>
            </div>
        </Dialog>
    )
}

export default DialogConfirmInscription