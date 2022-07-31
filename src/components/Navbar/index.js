import React from 'react'
import { useLocation, NavLink } from 'react-router-dom'
import { routes } from '../../routes'

import {
    NavbarContainer,
    LogoAsoblockchain,
    Logo,
    Title,
    NavbarItemsContainer,
    NavbarItemText,
    NavbarItem,
    NavbarIndicator
} from './styles';

const Navbar = () => {

    const location = useLocation();

    const isActiveRoute = (routeName) => location.pathname === routeName;

    return (
        <NavbarContainer>
            <LogoAsoblockchain>
                <Logo />
                <Title />
            </LogoAsoblockchain>


            <NavbarItemsContainer>
                {routes.map((route) => (
                    <NavbarItem key={route.path}>
                        <NavLink to={route.path} key={route.path} style={{ textDecoration: 'none' }}>
                            <NavbarItemText
                                isActive={isActiveRoute(route.path)}>
                                {route.name}
                            </NavbarItemText>
                        </NavLink>
                        {isActiveRoute(route.path) && <NavbarIndicator />}
                    </NavbarItem>
                ))}
            </NavbarItemsContainer>
        </NavbarContainer>
    )
}

export default Navbar