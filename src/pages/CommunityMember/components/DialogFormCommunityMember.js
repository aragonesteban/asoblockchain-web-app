import React, { useState, forwardRef } from 'react'
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import LogoWhite from '../../../assets/logo_white.png'
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputBase from '@mui/material/InputBase';

const Transition = forwardRef(function Transition(props, ref,) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const CustomTextField = styled(TextField)({
    marginTop: '2em',
    '& label': {
        color: 'rgba(255, 255, 255, .5)',
    },
    '& label.Mui-focused': {
        color: '#00b707',
    },
    '& .MuiOutlinedInput-root': {
        color: '#FFF',
        '& fieldset': {
            borderColor: '#FFF',
            color: '#00b707',
        },
        '&:hover fieldset': {
            borderColor: '#FFF',
        },
        '&.Mui-focused fieldset': {
            borderColor: '#00b707',
        },
    },
});

const DialogFormCommunityMember = ({ isFormCommunityOpen, toggleFormCommunityMember }) => {

    const [name, setName] = useState("")
    const [phone, setPhone] = useState(null)
    const [email, setEmail] = useState("")
    const [howYouKnowAsoblockchain, setHowYouKnowAsoblockchain] = useState("")
    const [whyDoYouWantBePart, setwhyDoYouWantBePart] = useState("")

    const handleClose = (event, reason) => {
        if (reason && reason == "backdropClick") {
            return
        }
        clearInputs()
        toggleFormCommunityMember(false)
    }

    const clearInputs = () => {
        setName("")
        setPhone("")
        setEmail("")
        setHowYouKnowAsoblockchain("")
        setwhyDoYouWantBePart("")
    }

    return (
        <Dialog
            open={isFormCommunityOpen}
            TransitionComponent={Transition}
            disableEscapeKeyDown
            PaperProps={{ style: { backgroundColor: "#07062e" } }}
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description">
            <div className='p-10 flex flex-col justify-center items-center'>
                <img src={LogoWhite} className='w-[3em]' />
                <span className='text-white text-2xl font-bold mt-6'>Membresia</span>
                <div className='grid grid-cols-2 gap-6 w-full mt-5'>
                    <div className='text-center'>
                        <span className='text-4xl font-bold text-indigo-600 block'>$50usd</span>
                        <span className='text-white text-base font-bold block'>Mensual</span>
                    </div>
                    <div className='text-center'>
                        <span className='text-4xl font-bold text-green-500 block'>$100usd</span>
                        <span className='text-white text-base font-bold block'>Anual</span>
                    </div>
                </div>
                <span className='text-white text-xl font-bold mt-6 text-center'>Llena el formulario para ser parte</span>
                <div className='grid grid-cols-2 gap-6 w-full'>
                    <CustomTextField fullWidth label="Nombre" type="text" value={name} onChange={(event) => { setName(event.target.value) }} />
                    <CustomTextField fullWidth label="Telèfono" type="number" value={phone} onChange={(event) => { setPhone(event.target.value) }} />
                </div>
                <CustomTextField fullWidth label="Email" type="email" value={email} onChange={(event) => { setEmail(event.target.value) }} />
                <CustomTextField fullWidth label="¿Cómo te enteraste de AsoBlockchain?" type="text" select value={howYouKnowAsoblockchain} onChange={(event) => { setHowYouKnowAsoblockchain(event.target.value) }} >
                    <MenuItem value="social_networks">Redes sociales</MenuItem>
                    <MenuItem value="news">Noticias</MenuItem>
                    <MenuItem value="advertising">Publicidad</MenuItem>
                    <MenuItem value="friend">Amigo / Conocido</MenuItem>
                    <MenuItem value="other">Otro</MenuItem>
                </CustomTextField>
                <CustomTextField fullWidth label="¿Por qué quieres ser parte?" type="text" select value={whyDoYouWantBePart} onChange={(event) => { setwhyDoYouWantBePart(event.target.value) }}>
                    <MenuItem value="connect_community">Quiero conectarme con la comunidad</MenuItem>
                    <MenuItem value="learn_blockchain">Estoy interesado en aprender de blockchain</MenuItem>
                    <MenuItem value="learn_crypto">Quiero aprender de criptomonedas</MenuItem>
                    <MenuItem value="share_knowledge">Me gustaria compartir mi conocimiento</MenuItem>
                    <MenuItem value="other">Otro</MenuItem>
                </CustomTextField>
                <span className='text-white text-xs mt-6'>* Al inscribirte estas de acuerdo con el manejo de tus datos</span>
                <button className='button-subscribe' style={{ marginTop: '2em' }} onClick={handleClose}>Inscribirme</button>
            </div>
        </Dialog >
    )
}

export default DialogFormCommunityMember