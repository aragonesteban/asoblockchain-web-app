import React, { Component, forwardRef } from 'react'
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import LogoWhite from '../../../assets/logo_white.png'
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';
import '../styles.css'

import { collection, addDoc } from 'firebase/firestore'
import { firestore } from '../../../config/init-firebase'
import { COUNTRIES } from '../../../constants/countries';
import { IconButton } from '@mui/material';
import { Close } from '@mui/icons-material';


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

export default class DialogFormCommunityMember extends Component {

    state = {
        name: "",
        phone: "",
        email: "",
        howYouKnowAsoblockchain: "",
        whyDoYouWantBePart: "",
        otherWhyDoYouWantBePart: "",
        indicative: "",
        isValidForm: false,
    }

    handleClose = (event, reason) => {
        if (this.state.isValidForm) {
            if (reason && reason === "backdropClick") {
                return
            }
            this.saveCommunityMember()
            this.clearInputs()
            this.props.toggleFormCommunityMember(false)
        }
    }

    clearInputs = () => {
        this.setState({
            name: "",
            phone: "",
            email: "",
            howYouKnowAsoblockchain: "",
            whyDoYouWantBePart: "",
            indicative: ""
        })
    }

    handleSetName = (event) => {
        this.setState({
            name: event.target.value
        }, () => this.handleValidateForm())
    }

    handleSetIndicative = (event) => {
        this.setState({
            indicative: event.target.value
        }, () => this.handleValidateForm())
    }

    handleSetPhone = (event) => {
        this.setState({
            phone: event.target.value
        }, () => this.handleValidateForm())
    }

    handleSetEmail = (event) => {
        this.setState({
            email: event.target.value
        }, () => this.handleValidateForm())
    }

    handleSetHowYouKnowAsoblockchain = (event) => {
        this.setState({
            howYouKnowAsoblockchain: event.target.value
        }, () => this.handleValidateForm())
    }

    handleSetWhyDoYouWantBePart = (event) => {
        if (true) {}
        this.setState({
            whyDoYouWantBePart: event.target.value
        }, () => this.handleValidateForm())
    }


    handleValidateForm = () => {
        const { name, phone, email, howYouKnowAsoblockchain, whyDoYouWantBePart, indicative } = this.state
        if (name !== "" && phone !== "" && email !== "" && howYouKnowAsoblockchain !== "" && whyDoYouWantBePart !== "" && indicative !== "") {
            this.setState({ isValidForm: true })
        } else {
            this.setState({ isValidForm: false })
        }
    }

    saveCommunityMember = () => {
        const { name, phone, email, howYouKnowAsoblockchain, whyDoYouWantBePart, indicative, otherWhyDoYouWantBePart } = this.state
        const communityMembersCollection = collection(firestore, 'community members')
        addDoc(communityMembersCollection, {
            name,
            indicative,
            phone,
            email,
            howYouKnowAsoblockchain,
            whyDoYouWantBePart: whyDoYouWantBePart === "other" ? otherWhyDoYouWantBePart : whyDoYouWantBePart,
            hasPaid: false,
            hash: '',
            photo: '',
            address: '',
            subscription: '',
            dateInscription: new Date()
        }).then((response) => {
            this.props.toggleConfirmation(true)
         }).catch((e) => console.error(e))
    }

    render() {
        const { name, phone, email, howYouKnowAsoblockchain, whyDoYouWantBePart, indicative, isValidForm, otherWhyDoYouWantBePart } = this.state
        return (
            <Dialog
                open={this.props.isFormCommunityOpen}
                TransitionComponent={Transition}
                disableEscapeKeyDown
                PaperProps={{ style: { backgroundColor: "#07062e", width: '100%' } }}
                onClose={this.handleClose}
                aria-describedby="alert-dialog-slide-description">
                <div className='p-10 flex flex-col justify-center items-center relative'>
                    <IconButton onClick={this.props.toggleFormCommunityMember.bind(null, false)} sx={{ position: 'absolute', top: '2%', right: '2%' }}>
                        <Close sx={{ fill: "#FFF" }} />
                    </IconButton>
                    <img src={LogoWhite} className='w-[3em]' alt="/" />
                    <span className='text-white text-2xl font-bold mt-6'>Membresia</span>
                    <div className='grid grid-cols-2 gap-6 w-full mt-5'>
                        <div className='text-center'>
                            <span className='text-4xl font-bold text-indigo-600 block'>$50usd</span>
                            <span className='text-white text-base font-bold block'>Anual</span>
                        </div>
                        <div className='text-center'>
                            <span className='text-4xl font-bold text-green-500 block'>$80usd</span>
                            <span className='w-[10em] m-auto text-white text-base font-bold block'>Anual con avatar personalizado</span>
                        </div>
                    </div>
                    <span className='text-white text-xl font-bold mt-6 text-center'>Llena el formulario para ser parte</span>
                    <div className='w-full'>
                        <CustomTextField fullWidth label="Nombre" type="text" value={name} onChange={this.handleSetName} />
                        <div className='flex'>
                            <CustomTextField label="Indicativo" type="text" select value={indicative} onChange={this.handleSetIndicative} sx={{ mr: 1, display: 'flex', width: '40%' }}>
                                {COUNTRIES.map((country) => (
                                    <MenuItem key={country.id} value={country.phoneCode}>{country.phoneCode} <img src={country.flag} alt="/" width="30" className='ml-2' /></MenuItem>
                                ))}
                            </CustomTextField>
                            <CustomTextField fullWidth label="Telèfono" type="number" value={phone} onChange={this.handleSetPhone} />
                        </div>
                    </div>
                    <CustomTextField fullWidth label="Email" type="email" value={email} onChange={this.handleSetEmail} />
                    <CustomTextField fullWidth label="¿Cómo te enteraste de AsoBlockchain?" type="text" select value={howYouKnowAsoblockchain} onChange={this.handleSetHowYouKnowAsoblockchain} >
                        <MenuItem value="instagram">Instagram</MenuItem>
                        <MenuItem value="facebook">Facebook</MenuItem>
                        <MenuItem value="twitter">Twitter</MenuItem>
                        <MenuItem value="youtube">Youtube</MenuItem>
                        <MenuItem value="news">Noticias</MenuItem>
                        <MenuItem value="advertising">Publicidad</MenuItem>
                        <MenuItem value="friend">Amigo / Conocido</MenuItem>
                        <MenuItem value="other">Otro</MenuItem>
                    </CustomTextField>
                    <CustomTextField fullWidth label="¿Por qué quieres ser parte?" type="text" select value={whyDoYouWantBePart} onChange={this.handleSetWhyDoYouWantBePart}>
                        <MenuItem value="learn_blockchain_and_cryptocurrencies">Quiero aprender blockchain y criptomonedas</MenuItem>
                        <MenuItem value="have_cripto_bussines">Tengo un emprendimiento cripto</MenuItem>
                        <MenuItem value="share_cripto_knowledge">Compartir mi conocimiento y contribuir al crecimiento de la comunidad</MenuItem>
                        <MenuItem value="other">Otro</MenuItem>
                    </CustomTextField>
                    {whyDoYouWantBePart === 'other' && <CustomTextField fullWidth label="Escribe por qué quieres ser parte" type="text" value={otherWhyDoYouWantBePart} />}
                    <span className='text-white text-xs mt-6'>* Al inscribirte estas de acuerdo con el manejo de tus datos</span>
                    <button className='button-subscribe'
                        style={{
                            marginTop: '2em',
                            background: isValidForm ? '#00b707' : '#333258',
                            color: isValidForm ? '#FFF' : '#595959',
                        }}
                        onClick={this.handleClose}>
                        Inscribirme
                    </button>
                </div>
            </Dialog>
        )
    }

}