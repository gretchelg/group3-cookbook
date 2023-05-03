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
import { Link } from "react-router-dom";

const pages = ['breakfast', 'lunch', 'dinner'];

export default function Navigation() {
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

    return (
        <div className="navbar">
            <AppBar position="static" style={{ background: '#FFD230' }}>
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
                        textDecoration: 'none',
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
                    color= "#050505"
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
                    }}
                    open={Boolean(anchorElNav)}
                    onClose={handleCloseNavMenu}
                    sx={{
                        display: { xs: 'block', md: 'none' },
                    }}
                    >
                    {pages.map((page) => (
                        <MenuItem key={page} onClick={handleCloseNavMenu}>
                        <Typography textAlign="center">
                        <Link to={`./${page}`}>{page}</Link>    
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
                        mr: 30,
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
                    <Link to={`./${page}`}>
                        <Button
                            key={page}
                            onClick={handleCloseNavMenu}
                            sx={{ my: 1, color: 'black', display: 'block' }}
                        >
                            {page}
                        </Button>
                    </Link>  
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
                </Toolbar>
            </Container>
            </AppBar>

            {/* <NavLink to="/">  - HOME - | </NavLink> */}

        </div>


    );
}