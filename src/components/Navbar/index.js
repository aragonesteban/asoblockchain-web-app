import { Menu } from '@mui/icons-material';
import { IconButton, List, ListItem, ListItemButton } from '@mui/material';
import React, { useState } from 'react'
import { useLocation, NavLink } from 'react-router-dom'
import { routes } from '../../routes'
import Drawer from '@mui/material/Drawer';
import LogoColorTextWhite from '../../assets/logo_color_text_white.png';

import {
    NavbarContainer,
    LogoAsoblockchain,
    Logo,
    NavbarItemsContainer,
    NavbarItemText,
    NavbarItem,
    NavbarIndicator
} from './styles';
import './styles.css'

const Navbar = () => {

    const [drawerOpen, setDrawerOpen] = useState(false);
    const location = useLocation();

    const isActiveRoute = (routeName) => location.pathname === routeName;

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setDrawerOpen(open)
    };

    return (
        <NavbarContainer>
            <LogoAsoblockchain>
                <Logo />
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
            <div className='md:hidden menu-icon'>
                <IconButton onClick={toggleDrawer(true)} className=''>
                    <Menu sx={{ fill: "#FFF" }} />
                </IconButton>
            </div>
            <Drawer
                anchor="right"
                open={drawerOpen}
                sx={{
                    width: '100%',
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: '100%',
                        boxSizing: 'border-box',
                        background: '#07062e'
                    },
                }}
                onClose={toggleDrawer(false)}>
                <img src={LogoColorTextWhite} className='w-[8em] absolute self-center mt-10' alt="/" />
                <List className='h-full flex flex-col justify-center'>
                    {routes.map((route) => (
                        <ListItem key={route.path} disablePadding className='mt-4'>
                            <NavLink to={route.path} className='w-full' onClick={toggleDrawer(false)}>
                                <ListItemButton className='item-text-list' sx={{ background: isActiveRoute(route.path) ? '#111033' : '#07062e' }}>
                                    <span
                                        className='text-3xl'
                                        style={{ color: isActiveRoute(route.path) ? '#00b707' : '#FFF' }}>
                                        {route.name}
                                    </span>
                                </ListItemButton>
                            </NavLink>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </NavbarContainer>
    )
}

export default Navbar