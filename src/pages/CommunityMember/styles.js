import styled from 'styled-components';
import logoColor from '../../assets/logo_color.png';

export const FirstImageBackgroundCommunity = styled.img.attrs({
    src: `${logoColor}`
})`
    width: 50vw;
    position: absolute;
    top: 0;
    left: -30%;
    opacity: 20%;
    z-index: -1;
    transform: rotate(180deg);
    @media (max-width: 640px) {
        left: -65%;
        width: 100vw;
    }
`

export const SecondImageBackgroundCommunity = styled.img.attrs({
    src: `${logoColor}`
})`
    width: 50vw;
    position: absolute;
    bottom: -90%;
    right: -30%;
    opacity: 20%;
    z-index: -1;
    transform: rotate(180deg);
    @media (max-width: 640px) {
        bottom: -50%;
        right: -65%;
        width: 100vw;
    }
`