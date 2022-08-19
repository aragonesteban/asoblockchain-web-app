import React, { Component } from 'react'
import { FirstImageBackgroundCommunity, SecondImageBackgroundCommunity } from './styles'
import contactIllustration from '../../assets/illustration-contact.png'
import { MenuItem, TextField } from '@mui/material'
import { styled } from '@mui/material/styles';
import './styles.css'
import { EmailOutlined, WhatsappOutlined } from '@mui/icons-material';
import { collection, addDoc } from 'firebase/firestore'
import { firestore } from '../../config/init-firebase'

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
export default class Contact extends Component {

    state = {
        userContact: {
            reason: "",
            name: "",
            phone: "",
            email: "",
            message: ""
        },
        isValidForm: false,
        isFormSent: false
    }

    handleChangeText = (event) => {
        const newUserContact = { ...this.state.userContact }
        newUserContact[event.target.name] = event.target.value
        this.setState({ userContact: newUserContact }, () => this.handleValidateForm())
    }

    handleValidateForm = () => {
        const { userContact } = this.state
        const { name, phone, email, message, reason } = userContact
        if (name !== "" && phone !== "" && email !== "" && message !== "" && reason !== "") {
            this.setState({ isValidForm: true })
        } else {
            this.setState({ isValidForm: false })
        }
    }

    handleSendForm = () => {
        const { userContact, isValidForm } = this.state
        if (isValidForm) {
            const formCollection = collection(firestore, 'form web')
            addDoc(formCollection, userContact).then((response) => {
                this.setState({ isFormSent: true })
            }).catch((e) => console.error(e))
        }
    }

    render() {
        const { userContact, isValidForm, isFormSent } = this.state
        const { name, phone, email, message, reason } = userContact
        return (
            <div className='h-full flex flex-col items-center overflow-hidden pt-1 px-10 xl:px-28 text-white relative'>
                <FirstImageBackgroundCommunity />
                <SecondImageBackgroundCommunity />
                <span className='text-4xl font-bold mt-10 lg:mt-0'>¡Contactanos!</span>
                <span className='text-2xl mt-6 text-center'>Envianos una mensaje, siempre estamos atentos a tus peticiones, quejas o feedback.</span>
                <img className='w-[50em]' src={contactIllustration} alt="/"/>

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-2'>

                    <div className='flex flex-col py-10 px-10 lg:px-0'>
                        <span className='text-2xl md:text-4xl font-bold md:mr-10 lg:text-left text-center'>
                            ¿Quieres ponerte en contacto con nosotros?
                        </span>
                        <span className='text-md md:text-2xl mt-6 lg:text-left text-center'>
                            Completa el formulario y envíanos un mensaje. Alguien de nuestro equipo te estará respondiendo en un par de días.
                        </span>
                        <span className='text-sm md:text-xl mt-16'>
                            <WhatsappOutlined fontSize='large' /> +57 300 405 2621
                        </span>
                        <span className='text-sm md:text-xl mt-6'>
                            <EmailOutlined fontSize='large' /> contacto@asoblockchain.com
                        </span>
                    </div>

                    <div className='p-0 md:p-10 mb-10'>
                        {
                            isFormSent
                                ? <div className='flex flex-col'>
                                    <span className='text-4xl font-bold mr-10'>
                                        ¡Gracias por contactarte con nosotros!
                                    </span>
                                    <span className='text-2xl mt-6'>
                                        Nos encanta hablar con la comunidad, asi que tienes que estar pendiente a que alguien de nuestro personal se comunique contigo.
                                    </span>
                                </div>
                                : <div className='flex flex-col form-container rounded-2xl py-10 px-10 xl:px-20'>
                                    <div className='grid grid-cols-2 items-center'>
                                        <span>Me contacto para enviar</span>
                                        <CustomTextField label="Qué vas a enviar" name='reason' variant="outlined" value={reason} select onChange={this.handleChangeText} style={{ marginTop: 0 }}>
                                            <MenuItem value="feedback">feedback</MenuItem>
                                            <MenuItem value="petition">una petición</MenuItem>
                                            <MenuItem value="complain">una queja</MenuItem>
                                        </CustomTextField>
                                    </div>
                                    <CustomTextField label="Nombre" name='name' variant="outlined" value={name} onChange={this.handleChangeText} />
                                    <CustomTextField label="Teléfono" name='phone' type="number" variant="outlined" value={phone} onChange={this.handleChangeText} />
                                    <CustomTextField label="Email" name='email' type="email" variant="outlined" value={email} onChange={this.handleChangeText} />
                                    <CustomTextField label="Mensaje" multiline rows={4} name='message' variant="outlined" value={message} onChange={this.handleChangeText} />
                                    <button className='button-subscribe self-center'
                                        style={{
                                            marginTop: '2em',
                                            background: isValidForm ? '#00b707' : '#333258',
                                            color: isValidForm ? '#FFF' : '#595959',
                                        }}
                                        onClick={this.handleSendForm}>
                                        Enviar
                                    </button>
                                </div>
                        }
                    </div>

                </div>
            </div>
        )
    }
}