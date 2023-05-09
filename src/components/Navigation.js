import { NavLink } from "react-router-dom";
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import DarkModeIcon from '@mui/icons-material/DarkMode';

const pages = ['breakfast', 'lunch', 'dinner'];

export default function Navigation({theme, toggletheme}) {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const menuStyles = {
        // Customize the background color here
        backgroundColor: "red",
    };

    return (
        <div className="navbar">
            <AppBar position="static" style={{ backgroundColor: '#FFD230' }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
                <NavLink to="/" >
                    <Typography
                        variant="h6"
                        // noWrap
                        component="a"
                        // href="/"
                        sx={{
                        mr: 2,
                        display: { xs: 'none', md: 'flex' },
                        fontFamily: 'Pacifico',
                        fontWeight: 700,
                        color: '#050505',
                        textDecoration: 'none'
                        }}
                    >
                        The Sunday Bites
                    </Typography>
                </NavLink>

        
                <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                    <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleOpenNavMenu}
                    color={toggletheme ? '#000' : '#fff'}
                    >
                    <MenuIcon />
                    </IconButton>
                    <Menu
                    id="menu-appbar" 
                    anchorEl={anchorElNav}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                        backgroundColor: '#FFD230'
                    }}
                    open={Boolean(anchorElNav)}

                    onClose={handleCloseNavMenu}
                    sx={{
                        display: { xs: 'block', md: 'none' },
                    }}
                    PaperProps={{
                        sx: {
                          // Override the Paper component styles here
                        backgroundColor: '#FFD230',
                        borderRadius: '1px',
                        textDecoration: 'none',
                        },
                        styles: menuStyles,
                    }}
                    >
                    {pages.map((page) => (
                        <MenuItem onClick={handleCloseNavMenu}>
                        <Typography textAlign="center" sx={{ textDecoration: 'none'}}>
                        <NavLink to={`./${page}`}>{page}</NavLink>    
                        </Typography>
                        </MenuItem>
                    ))}
                    </Menu>
                </Box>
                {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
                <NavLink to="/" >
                    <Typography
                        variant="h6"
                        component="a"
                        // href=""
                        sx={{
                        mr: 15,
                        display: { xs: 'flex', md: 'none' },
                        flexGrow: 2,
                        fontFamily: 'Pacifico',
                        fontWeight: 900,
                        color: '#050505',
                        textDecoration: 'none',
                        }}
                    >
                        The Sunday Bites
                    </Typography>
                </NavLink>
                
                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                    {pages.map((page) => (
                    <NavLink to={`./${page}`}>
                        <Button
                            key={page}
                            onClick={handleCloseNavMenu}
                            sx={{ my: 1, color: 'black', display: 'block' }}
                        >
                            {page}
                        </Button>
                    </NavLink>  
                    ))}
                </Box>
        
                <Box sx={{ flexGrow: 0 }}>
                    <Menu
                    sx={{ mt: '45px' }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                    >
                    </Menu>
                </Box>
                {console.log(theme)}
                <DarkModeIcon onClick={theme} sx={toggletheme? {color: '#fff'} : {color: '#000'}}/>
                </Toolbar>
                
            </Container>
            </AppBar>

            {/* <NavLink to="/">  - HOME - | </NavLink> */}

        </div>


    );
}