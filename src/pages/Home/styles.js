import styled, { keyframes } from 'styled-components';
import { slideInLeft, slideInRight, fadeIn } from 'react-animations';
import illustrationHome from '../../assets/illustration-home.png';
import illustrationAlliance from '../../assets/illustration-alliance.png';
import logoColor from '../../assets/logo_color.png';

const fadeInAnimation = keyframes`${fadeIn}`;
const slideInLeftAnimation = keyframes`${slideInLeft}`;
const slideInRightAnimation = keyframes`${slideInRight}`;

export const HomeContainer = styled.div`
    overflow: hidden;
    padding-bottom: 4em;
`;

export const WrapperTwoColumnsSection = styled.section`
    display: grid;
    grid-template-columns: 50% 50%;
    align-items: center;
    margin: 0 10vw;
    justify-items: center;
    position: relative;
    @media (max-width: 768px) {
        margin: 0 5vw;
        grid-template-columns: auto;
        margin-top: 2rem;
    }
`;

export const WrapperWelcomTexts = styled.div``;

export const TitleSection = styled.h1`
    color: #FFF;
    font-weight: bolder;
    font-size: 3vw;
    @media (max-width: 768px) {
        font-size: 2rem;
    }
    @media (max-width: 640px) {
        font-size: 1.5rem !important;
    }
`;

export const WelcomeTitle = styled(TitleSection)`
    //animation: 500ms ${slideInLeftAnimation};
    @media (max-width: 640px) {
        margin-top: 1em;
        font-size: 1.5rem !important;
    }
`

export const DescriptionSection = styled.p`
    color: #FFF;
    font-size: 1.5vw;
    margin-right: 5em;
    margin-top: 1em;
    line-height: 1.5em;
    @media (max-width: 768px) {
        font-size: 1rem;
    }
`;

export const WelcomeInfo = styled(DescriptionSection)`
    //animation: 500ms ${slideInLeftAnimation};
    @media (max-width: 768px) {
        font-size: 1.4rem;
        margin-right: 0;
    }
    @media (max-width: 640px) {
        font-size: 1rem !important;
    }
`

export const PartnersTitle = styled(TitleSection)`
    //animation: 500ms ${fadeInAnimation};
`

export const IllustrationWelcome = styled.img.attrs({
    src: `${illustrationHome}`
})`
    width: 50vw;
    //animation: 500ms ${slideInRightAnimation};
    max-width: initial;
    @media (max-width: 768px) {
        width: 70vw;
    }
    @media (max-width: 640px) {
        width: 90vw;
    }
`

export const ButtonKnowUs = styled.button`
    padding: 10px;
    background: #00b707;
    border-radius: 1em;
    border: 0;
    margin-top: 3em;
    width: 13vw;
    font-size: 1vw;
    color: white;
    font-weight: 600;
    font-family: 'Roboto';
    cursor: pointer;
    &:hover {
        transform: scale(1.05);
        transition: 500ms;
    }
    //animation: 500ms ${slideInLeftAnimation};
    @media (max-width: 768px) {
        width: 21vw;
        font-size: 2vw;
    }
    @media (max-width: 640px) {
        width: 30vw;
        font-size: 3vw;
    }
`

export const AllianceTitle = styled(TitleSection)`
    //animation: 500ms ${slideInRightAnimation};
    @media (max-width: 768px) {
        font-size: 1.5rem;
    }
`
export const AllianceInfo = styled(DescriptionSection)`
    //animation: 500ms ${slideInRightAnimation};
    @media (max-width: 768px) {
        font-size: 1.4rem;
        margin-right: 0;
    }
    @media (max-width: 640px) {
        font-size: 1rem;
    }
`

export const IllustrationAlliance = styled.img.attrs({
    src: `${illustrationAlliance}`
})`
    width: 50vw;
    //animation: 500ms ${slideInLeftAnimation};
    max-width: initial;
`

export const WrapperVideoYoutubeSection = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 6em;
`

export const FirstImageBackground = styled.img.attrs({
    src: `${logoColor}`
})`
    width: 50vw;
    position: absolute;
    top: 0;
    left: -50%;
    opacity: 20%;
    z-index: -1;
    @media (max-width: 768px) {
        left: -38%;
    }
    @media (max-width: 640px) {
        left: -65%;
        width: 100vw;
    }
`

export const SecondImageBackground = styled.img.attrs({
    src: `${logoColor}`
})`
    width: 50vw;
    position: absolute;
    bottom: -90%;
    right: -51%;
    opacity: 20%;
    z-index: -1;
    @media (max-width: 768px) {
        bottom: -10%;
        right: -40%;
    }
    @media (max-width: 640px) {
        bottom: -20%;
        right: -65%;
        width: 100vw;
    }
`

export const PartnersContainer = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 2em;
`

export const BodyText = styled.span`
    color: #FFF;
    font-size: 1.2em;
    line-height: 1.5em;
    @media (max-width: 768px) {
        font-size: 1rem;
    }
`

export const PartnersFounderWrapper = styled.div`
    display: flex;
    overflow: auto;
    padding: 2em;
`

export const PartnerFounderCard = styled.div`
    display: inline-block;
    margin: 0.75rem;
    cursor: pointer;
    transition-duration: 300ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    &:hover {
        transform: scale(1.05);
    }
    background: #07062e;
    border-radius: 16px;
    padding: 13px;
    height: 12em;
    box-shadow: 0px 1px 8px 0px rgb(0 0 0 / 62%);
    @media (max-width: 640px) {
        height: 8em;
    }
`

export const PartnerFounterLogo = styled.img.attrs(props => ({
    src: props.src
}))`
    width: 70%;
`