import styled from 'styled-components'
import logo from '../../assets/logo_color_text_white.png';
import title from '../../assets/logo_letters_white.png';

export const NavbarContainer = styled.header`
  width: 100%;
  align-items: center;
  display: flex;
  padding-top: 2em;
  justify-content: space-between;
  z-index: 1000;
  position: relative;
  @media (max-width: 640px) {
    justify-content: center;
  }
`;

export const LogoAsoblockchain = styled.div`
 display: flex;
 align-items: center;
`

export const Logo = styled.img.attrs({
  src: `${logo}`
})`
  margin-left: 10vw;
  width: 8vw;
  @media (max-width: 768px) {
    margin-left: 5vw;
  }
  @media (max-width: 640px) {
    margin-left: 0;
    width: 4em;
  }
`

export const Title = styled.img.attrs({
  src: `${title}`
})`
  margin-left: 1em;
  width: 11vw;
  @media (max-width: 640px) {
   display: none;
  }
`

export const NavbarItem = styled.div`
  margin-left: 2em;
  position: relative;
`

export const NavbarIndicator = styled.div`
  width: inherit;
  background-color: ${({ theme }) => theme.primary};
  height: 4px;
  margin: 6px 2px;
  position: absolute;
  left: 0;
  right: 0;
  box-shadow: 0px 1px 7px 1px #4caf50;
  border-radius: 8px;
`

export const NavbarItemText = styled.span`
  font-size: 18px;
  color: ${({ isActive, theme }) => isActive ? theme.primary : '#514BE9' };
  cursor: pointer;
`

export const NavbarItemsContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10vw;
  @media (max-width: 768px) {
    margin-right: 5vw;
  }
  @media (max-width: 640px) {
     display: none;
  }
`